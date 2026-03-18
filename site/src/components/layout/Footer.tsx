import Link from "next/link";
import { SITE } from "@/lib/constants";
import { USE_CASES } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm font-[family-name:var(--font-heading)]">
                A
              </div>
              <span className="text-lg font-bold text-text-heading font-[family-name:var(--font-heading)]">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-text-muted leading-relaxed">
              {SITE.description}
            </p>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold text-text-heading uppercase tracking-wider mb-4">
              Industries
            </h4>
            <ul className="space-y-3">
              {USE_CASES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-text-heading uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#how-it-works" className="text-sm text-text-muted hover:text-text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-text-muted hover:text-text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-sm text-text-muted hover:text-text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-text-heading uppercase tracking-wider mb-4">
              Get Started
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent-light transition-colors"
                >
                  Book a Discovery Call
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-text-muted hover:text-text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
