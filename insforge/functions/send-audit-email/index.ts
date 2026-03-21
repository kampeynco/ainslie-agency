import { createClient } from "npm:@insforge/sdk@latest";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM = "Lenox from Ainslie Agency <lenox@ainslie.agency>";
const CAL_LINK = "https://cal.com/ainslie-agency/discovery-call";

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let body: { placeId?: string };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const { placeId } = body;
  if (!placeId) {
    return new Response(JSON.stringify({ error: "placeId required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const insforge = createClient({
    baseUrl: Deno.env.get("INSFORGE_BASE_URL")!,
    anonKey: Deno.env.get("API_KEY")!,
  });

  const { data: place, error: dbError } = await insforge.database
    .from("google_places_leads")
    .select("email, first_name, firm_name, website, category, audit_score, biggest_issue, report_pdf")
    .eq("place_id", placeId)
    .single();

  if (dbError || !place) {
    return new Response(JSON.stringify({ error: "Place not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!place.email) {
    return new Response(JSON.stringify({ error: "No email on record for this place" }), {
      status: 422,
      headers: { "Content-Type": "application/json" },
    });
  }

  const firstName = place.first_name ?? "there";
  const score = place.audit_score ?? 0;
  const firmName = place.firm_name ?? "";
  const website = place.website ?? "";
  const category = place.category ?? "your industry";
  const biggestIssue = place.biggest_issue ?? "";

  const text = `Hi ${firstName},

I ran an AI visibility analysis on ${website}. Your site is scoring ${score}/100, which means when people ask ChatGPT, Perplexity, or Google's AI for recommendations in ${category}, ${firmName} isn't showing up.

I attached the full report.

The biggest issue I found: ${biggestIssue}.

AI search is growing 500%+ year-over-year and that traffic converts 4x higher than regular Google traffic. This is going to matter a lot over the next 12 months.

Happy to walk through the report on a quick 15-minute call: ${CAL_LINK}

Cheers,
Lenox Ramsey Jr
CEO of Ainslie Agency
https://ainslie.agency`;

  const html = `<p>Hi ${firstName},</p>

<p>I ran an AI visibility analysis on ${website}. Your site is scoring <strong>${score}/100</strong>, which means when people ask ChatGPT, Perplexity, or Google's AI for recommendations in ${category}, ${firmName} isn't showing up.</p>

<p>I attached the full report.</p>

<p>The biggest issue I found: ${biggestIssue}.</p>

<p>AI search is growing 500%+ year-over-year and that traffic converts 4x higher than regular Google traffic. This is going to matter a lot over the next 12 months.</p>

<p><a href="${CAL_LINK}">Happy to walk through the report on a quick 15-minute call</a>.</p>

<p>Cheers,<br>
Lenox Ramsey Jr<br>
CEO of Ainslie Agency<br>
<a href="https://ainslie.agency">https://ainslie.agency</a></p>`;

  // Build Resend payload
  const resendPayload: Record<string, unknown> = {
    from: FROM,
    to: [place.email],
    subject: `AI search engines can't find ${firmName}`,
    text,
    html,
  };

  // Attach PDF if stored
  if (place.report_pdf) {
    const { data: blob, error: storageError } = await insforge.storage
      .from("audit-pdfs")
      .download(place.report_pdf);

    if (!storageError && blob) {
      const buffer = await blob.arrayBuffer();
      const content = btoa(String.fromCharCode(...new Uint8Array(buffer)));
      const safeName = firmName.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");
      resendPayload.attachments = [
        { filename: `${safeName}-GEO-Audit.pdf`, content },
      ];
    }
  }

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resendPayload),
  });

  const resendData = await resendRes.json();

  if (!resendRes.ok) {
    console.error("Resend error:", resendData);
    return new Response(JSON.stringify({ error: resendData }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true, id: resendData.id }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
