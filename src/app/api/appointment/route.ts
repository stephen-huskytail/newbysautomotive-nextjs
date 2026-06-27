import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Where requests are emailed. Set in Vercel env when ready.
const TO = process.env.APPOINTMENT_TO || "newb@ymail.com";
const FROM = process.env.APPOINTMENT_FROM || "appointments@newbysautomotive.com";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

type Body = Record<string, string | undefined> & { company?: string };

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept bots
  if (body.company) return NextResponse.json({ ok: true });

  const isCareers = body.type === "employment";
  const first = (body.firstName || "").trim();
  const last = (body.lastName || "").trim();
  const phone = (body.phone || "").trim();
  const name = `${first} ${last}`.trim();

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Please include your name and phone number." },
      { status: 422 },
    );
  }

  const row = (k: string, v?: string) => `${k.padEnd(18)} ${v && v.trim() ? v : "—"}`;

  const lines = isCareers
    ? [
        `New CAREERS / employment inquiry from newbysautomotive.com`,
        ``,
        row("Name:", name),
        row("Phone:", phone),
        row("Email:", body.email),
        row("Position:", body.position),
        ``,
        `Message:`,
        body.message || "(none)",
      ]
    : [
        `New appointment request from newbysautomotive.com`,
        ``,
        `— Personal —`,
        row("Name:", name),
        row("Phone:", phone),
        row("Email:", body.email),
        ``,
        `— Appointment —`,
        row("Customer type:", body.customerType),
        row("Drop off / wait:", body.appointmentType),
        row("Vehicle:", body.vehicle),
        row("Service:", body.service),
        row("1st choice:", [body.firstChoiceDate, body.firstChoiceTime].filter(Boolean).join(" @ ")),
        row("2nd choice:", [body.secondChoiceDate, body.secondChoiceTime].filter(Boolean).join(" @ ")),
        ``,
        `— Service explanation —`,
        body.message || "(none)",
      ];

  const text = lines.join("\n");

  // Always log server-side so nothing is lost before email is wired.
  console.log(`[${isCareers ? "careers" : "appointment"}]`, JSON.stringify({ name, phone }));

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
          subject: isCareers
            ? `New Job Application — ${name}`
            : `New Appointment Request — ${name}`,
          text,
        }),
      });
      if (!res.ok) console.error("[email] Resend error", res.status, await res.text());
    } catch (err) {
      console.error("[email] send failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}
