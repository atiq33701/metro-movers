import { NextResponse } from "next/server";

// POST /api/quote
// Validates the quote form and optionally forwards the request
// to QUOTE_WEBHOOK_URL if it is configured.

export async function POST(req) {
  let data;

  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = String(data.name || "").trim();
  const phone = String(data.phone || "").trim();
  const email = String(data.email || "").trim();

  if (!name || !phone || !email) {
    return NextResponse.json({ error: "Name, phone and email are required." }, { status: 400 });
  }

  const payload = {
    name,
    phone,
    email,
    date: String(data.date || ""),
    services: Array.isArray(data.services) ? data.services.map(String) : [],
    pickup: String(data.pickup || ""),
    dropoff: String(data.dropoff || ""),
    details: String(data.details || ""),
    page: String(data.page || ""),
    receivedAt: new Date().toISOString(),
  };

  const hook = process.env.QUOTE_WEBHOOK_URL;

  if (hook) {
    try {
      const response = await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded ${response.status}`);
      }
    } catch (err) {
      console.error("[quote] webhook failed:", err);

      return NextResponse.json(
        { error: "Could not send your request. Please call us." },
        { status: 502 }
      );
    }
  } else {
    console.log("[quote] new request (set QUOTE_WEBHOOK_URL to forward):", payload);
  }

  return NextResponse.json({ ok: true });
}
