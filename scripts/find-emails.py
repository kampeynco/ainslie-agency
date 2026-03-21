#!/usr/bin/env python3
"""
Scrape contact emails for google_places_leads rows where email is null
using Firecrawl API, then update the database via Insforge API.
"""

import json
import re
import ssl
import time
import urllib.request
import urllib.error
from urllib.parse import urljoin, urlparse

# macOS Python SSL fix
SSL_CTX = ssl.create_default_context()
SSL_CTX.check_hostname = False
SSL_CTX.verify_mode = ssl.CERT_NONE

INSFORGE_API_KEY = "ik_52a3747fc30ccb11c3d622d510e80f83"
INSFORGE_BASE_URL = "https://3djxv2zs.us-east.insforge.app"
FIRECRAWL_API_KEY = "fc-57a988aaec554373a08bb6b63a1ede21"
FIRECRAWL_BASE_URL = "https://api.firecrawl.dev/v1"

EMAIL_REGEX = re.compile(
    r"[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}",
    re.IGNORECASE
)

# Domains to exclude (common false positives)
EXCLUDED_EMAIL_DOMAINS = {
    "example.com", "test.com", "domain.com", "yoursite.com",
    "sentry.io", "wix.com", "squarespace.com", "wordpress.com",
    "googleapis.com", "schema.org", "w3.org", "iana.org",
    "png", "jpg", "jpeg", "gif", "svg", "css", "js",
}


def insforge_request(method, path, body=None):
    url = f"{INSFORGE_BASE_URL}/api/database/records/{path}"
    data = json.dumps(body).encode() if body else None
    req = urllib.request.Request(
        url,
        data=data,
        method=method,
        headers={
            "apikey": INSFORGE_API_KEY,
            "Authorization": f"Bearer {INSFORGE_API_KEY}",
            "Content-Type": "application/json",
            "Prefer": "return=minimal",
        }
    )
    try:
        with urllib.request.urlopen(req, timeout=15, context=SSL_CTX) as r:
            content = r.read()
            return json.loads(content) if content else None
    except urllib.error.HTTPError as e:
        print(f"  HTTP {e.code}: {e.read().decode()[:200]}")
        return None


def firecrawl_scrape(url):
    """Scrape a URL with Firecrawl and return markdown text."""
    payload = json.dumps({
        "url": url,
        "formats": ["markdown"],
        "onlyMainContent": False,
        "timeout": 20000,
    }).encode()
    req = urllib.request.Request(
        f"{FIRECRAWL_BASE_URL}/scrape",
        data=payload,
        method="POST",
        headers={
            "Authorization": f"Bearer {FIRECRAWL_API_KEY}",
            "Content-Type": "application/json",
        }
    )
    try:
        with urllib.request.urlopen(req, timeout=30, context=SSL_CTX) as r:
            result = json.loads(r.read())
            if result.get("success"):
                return result.get("data", {}).get("markdown", "")
    except (urllib.error.URLError, json.JSONDecodeError, TimeoutError) as e:
        print(f"  Firecrawl error for {url}: {e}")
    return ""


def extract_email(text, site_domain=None):
    """Extract the best contact email from scraped text."""
    emails = EMAIL_REGEX.findall(text)
    if not emails:
        return None

    # Filter out excluded domains and image/file extensions
    IMAGE_EXTS = {"png", "jpg", "jpeg", "gif", "svg", "webp", "ico", "bmp", "tiff", "pdf"}
    cleaned = []
    for e in emails:
        domain = e.split("@")[-1].lower()
        ext = domain.rsplit(".", 1)[-1]
        if domain not in EXCLUDED_EMAIL_DOMAINS and ext not in EXCLUDED_EMAIL_DOMAINS and ext not in IMAGE_EXTS:
            cleaned.append(e.lower())

    if not cleaned:
        return None

    # Prefer emails on the same domain as the website
    if site_domain:
        same_domain = [e for e in cleaned if site_domain in e]
        if same_domain:
            return same_domain[0]

    return cleaned[0]


def get_contact_url(website):
    """Try common contact page paths, stripping query params for subpages."""
    # Use full URL (with params) for main page, clean URL for subpages
    parsed = urlparse(website)
    clean_base = f"{parsed.scheme}://{parsed.netloc}{parsed.path.rstrip('/')}"
    return [
        website,  # main page with original params
        f"{clean_base}/contact",
        f"{clean_base}/contact-us",
        f"{clean_base}/about",
    ]


def find_email_for_website(website):
    """Scrape a website and its contact page to find an email."""
    parsed = urlparse(website)
    site_domain = parsed.netloc.replace("www.", "")

    urls_to_try = get_contact_url(website)

    for url in urls_to_try:
        print(f"  Scraping {url}...")
        text = firecrawl_scrape(url)
        if text:
            email = extract_email(text, site_domain)
            if email:
                return email
        time.sleep(0.5)  # be polite

    return None


def update_email(row_id, email):
    """Update the email field for a row."""
    result = insforge_request(
        "PATCH",
        f"google_places_leads?id=eq.{row_id}",
        {"email": email}
    )
    return result is not None or result == []


def main():
    # Fetch all rows with null email and a website
    print("Fetching rows with null email...")
    rows = insforge_request(
        "GET",
        "google_places_leads?email=is.null&website=not.is.null&select=id,firm_name,website"
    )

    if not rows:
        print("No rows found or error fetching rows.")
        return

    print(f"Found {len(rows)} rows to process.\n")

    found_count = 0
    not_found_count = 0

    for i, row in enumerate(rows, 1):
        firm_name = row.get("firm_name", "Unknown")
        website = row.get("website", "")
        row_id = row["id"]

        print(f"[{i}/{len(rows)}] {firm_name}")
        print(f"  Website: {website}")

        if not website:
            print("  No website, skipping.")
            not_found_count += 1
            continue

        email = find_email_for_website(website)

        if email:
            print(f"  Found email: {email}")
            update_email(row_id, email)
            found_count += 1
        else:
            print("  No email found.")
            not_found_count += 1

        # Small delay between firms to avoid rate limiting
        time.sleep(1)

    print(f"\n{'='*50}")
    print(f"Done! Found emails for {found_count}/{len(rows)} firms.")
    print(f"Not found: {not_found_count}")


if __name__ == "__main__":
    main()
