"use client";

import { useState } from "react";
import Link from "next/link";
import { site, services } from "@/lib/site";
import { setMinToday } from "@/lib/dateInput";
import { PhoneIcon, CheckIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

const field =
  "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/20";
const label = "mb-1 block text-xs font-semibold text-ink";
const req = <span className="text-brand-red">*</span>;

// Compact hero variant of the appointment form. Posts to the same
// /api/appointment endpoint; the full form lives on /contact.
export function HeroAppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.company) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
          <CheckIcon size={24} />
        </div>
        <h3 className="mt-3 text-lg font-bold text-ink">Request received!</h3>
        <p className="mt-2 text-sm text-steel">
          Someone from Newby&rsquo;s will contact you to confirm a date and time. Need help right
          now?
        </p>
        <a
          href={`tel:${site.phone.tel}`}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-bold text-white"
        >
          <PhoneIcon size={16} /> {site.phone.display}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3.5">
      {/* honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor="hero-firstName" className={label}>First Name {req}</label>
          <input id="hero-firstName" name="firstName" required autoComplete="given-name" className={field} placeholder="John" />
        </div>
        <div>
          <label htmlFor="hero-lastName" className={label}>Last Name {req}</label>
          <input id="hero-lastName" name="lastName" required autoComplete="family-name" className={field} placeholder="Smith" />
        </div>
        <div>
          <label htmlFor="hero-phone" className={label}>Phone {req}</label>
          <input id="hero-phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="(702) 555-0123" />
        </div>
        <div>
          <label htmlFor="hero-email" className={label}>Email {req}</label>
          <input id="hero-email" name="email" type="email" required autoComplete="email" className={field} placeholder="john@email.com" />
        </div>
      </div>

      <div>
        <label htmlFor="hero-service" className={label}>Service Needed</label>
        <select id="hero-service" name="service" defaultValue="" className={field}>
          <option value="" disabled>Select a service…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>{s.name}</option>
          ))}
          <option value="Other / Not sure">Other / Not sure</option>
        </select>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor="hero-firstChoiceDate" className={label}>Preferred Date</label>
          <input id="hero-firstChoiceDate" name="firstChoiceDate" type="date" ref={setMinToday} className={field} />
        </div>
        <div>
          <label htmlFor="hero-vehicle" className={label}>Vehicle</label>
          <input id="hero-vehicle" name="vehicle" className={field} placeholder="2018 Toyota Camry" />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
          {error} You can also call{" "}
          <a href={`tel:${site.phone.tel}`} className="font-bold underline">{site.phone.display}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand-red px-6 py-3.5 text-base font-bold text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-red-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request an Appointment"}
      </button>
      <p className="text-center text-xs text-steel">
        Requests only — we&rsquo;ll call to confirm.{" "}
        <Link href="/contact" className="font-bold text-brand-red">
          Need more options? Full form →
        </Link>
      </p>
    </form>
  );
}
