import { createClient } from "npm:@insforge/sdk@latest";

const WEBHOOK_SECRET = Deno.env.get("CAL_WEBHOOK_SECRET");

async function verifySignature(body: string, signature: string | null, secret: string): Promise<boolean> {
  if (!signature) return false;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(body));
  const computed = Array.from(new Uint8Array(mac))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return computed === signature.replace(/^sha256=/, "");
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const rawBody = await req.text();

  // Verify HMAC signature if secret is configured
  if (WEBHOOK_SECRET) {
    const sig = req.headers.get("X-Cal-Signature-256");
    const valid = await verifySignature(rawBody, sig, WEBHOOK_SECRET);
    if (!valid) {
      return new Response("Unauthorized", { status: 401 });
    }
  }

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const triggerEvent = payload.triggerEvent as string;
  const data = (payload.payload ?? payload) as Record<string, unknown>;

  const attendees = (data.attendees as Record<string, unknown>[]) ?? [];
  const guest = attendees[0] ?? {};

  // Phone can live in multiple places depending on Cal.com config
  const guestPhone =
    (guest.phoneNumber as string) ??
    ((data.responses as Record<string, { value: string }>)?.phone?.value) ??
    null;

  const insforge = createClient({
    baseUrl: Deno.env.get("INSFORGE_BASE_URL")!,
    anonKey: Deno.env.get("API_KEY")!,
  });

  const { error } = await insforge.database
    .from("cal_bookings")
    .upsert(
      {
        booking_uid: (data.uid as string) ?? crypto.randomUUID(),
        trigger_event: triggerEvent ?? null,
        event_type: (data.type as string) ?? null,
        title: (data.title as string) ?? null,
        description: (data.description as string) ?? null,
        guest_name: (guest.name as string) ?? null,
        guest_email: (guest.email as string) ?? null,
        guest_phone: guestPhone,
        guest_timezone: (guest.timeZone as string) ?? null,
        start_time: (data.startTime as string) ?? null,
        end_time: (data.endTime as string) ?? null,
        status: (data.status as string) ?? null,
        raw_payload: payload,
      },
      { onConflict: "booking_uid" }
    );

  if (error) {
    console.error("DB error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
