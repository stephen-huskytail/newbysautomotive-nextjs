"use client";

import { useState } from "react";
import { site, services } from "@/lib/site";
import { PhoneIcon, CheckIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

export function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot — bots fill hidden fields
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
      <div className="rounded-2xl border border-line bg-mist p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
          <CheckIcon size={28} />
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink">Request received!</h3>
        <p className="mt-2 text-steel">
          Thanks — we&rsquo;ll call you back shortly to confirm your appointment. Need help right
          now? Call us directly.
        </p>
        <a
          href={`tel:${site.phone.tel}`}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 font-bold text-white"
        >
          <PhoneIcon size={18} /> {site.phone.display}
        </a>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/20";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
            Name <span className="text-brand-red">*</span>
          </label>
          <input id="name" name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink">
            Phone <span className="text-brand-red">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required className={field} placeholder="(702) 555-0123" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
            Email
          </label>
          <input id="email" name="email" type="email" className={field} placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="vehicle" className="mb-1.5 block text-sm font-semibold text-ink">
            Vehicle (Year / Make / Model)
          </label>
          <input id="vehicle" name="vehicle" className={field} placeholder="2018 Toyota Camry" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-ink">
          What do you need?
        </label>
        <select id="service" name="service" defaultValue="" className={field}>
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other / Not sure">Other / Not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
          What&rsquo;s going on?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={field}
          placeholder="Describe the issue, symptoms, or preferred day/time…"
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error} You can also reach us directly at{" "}
          <a href={`tel:${site.phone.tel}`} className="font-bold underline">
            {site.phone.display}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand-red px-6 py-4 text-base font-bold text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-red-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request My Appointment"}
      </button>

      <p className="text-center text-sm text-steel">
        Prefer to talk now?{" "}
        <a href={`tel:${site.phone.tel}`} className="font-bold text-brand-red">
          Call {site.phone.display}
        </a>
      </p>
    </form>
  );
}
