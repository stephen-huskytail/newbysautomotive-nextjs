import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Where appointment requests are emailed. Set in Vercel env when ready.
const TO = process.env.APPOINTMENT_TO || "newb@ymail.com";
const FROM = process.env.APPOINTMENT_FROM || "appointments@newbysautomotive.com";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

type Body = {
  name?: string;
  phone?: string;
  email?: string;
  vehicle?: string;
  service?: string;
  message?: string;
  company?: string; // honeypot
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept bots
  if (body.company) return NextResponse.json({ ok: true });

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  if (!name || !phone) {
    return NextResponse.json(
      { error: "Please include your name and phone number." },
      { status: 422 },
    );
  }

  const lines = [
    `New appointment request from newbysautomotive.com`,
    ``,
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Email:   ${body.email || "—"}`,
    `Vehicle: ${body.vehicle || "—"}`,
    `Service: ${body.service || "—"}`,
    ``,
    `Message:`,
    body.message || "(none)",
  ].join("\n");

  // Always log server-side so requests aren't lost even before email is wired.
  console.log("[appointment]", JSON.stringify({ name, phone, email: body.email, service: body.service }));

  // Send email via Resend when configured. Falls back gracefully on staging.
  if (RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Newby's Website <${FROM}>`,
          to: [TO],
          reply_to: body.email || undefined,
          subject: `New Appointment Request — ${name}`,
          text: lines,
        }),
      });
      if (!res.ok) {
        console.error("[appointment] Resend error", res.status, await res.text());
        // Don't fail the user — the request is logged. Surface a soft error only
        // if you'd rather the user call instead. Here we accept it.
      }
    } catch (err) {
      console.error("[appointment] email send failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}
