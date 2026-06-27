"use client";

import { useState } from "react";
import { site, services } from "@/lib/site";
import { PhoneIcon, CheckIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

const TIME_SLOTS = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
];

const field =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/20";
const label = "mb-1.5 block text-sm font-semibold text-ink";
const req = <span className="text-brand-red">*</span>;

export function AppointmentForm() {
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
      <div className="rounded-2xl border border-line bg-mist p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
          <CheckIcon size={28} />
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink">Request received!</h3>
        <p className="mt-2 text-steel">
          Thanks — someone from Newby&rsquo;s will contact you to confirm a date and time. Need help
          right now? Call us directly.
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

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {/* Personal Information */}
      <fieldset>
        <legend className="mb-4 w-full border-b border-line pb-2 text-lg font-extrabold text-ink">
          Personal Information
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={label}>First Name {req}</label>
            <input id="firstName" name="firstName" required className={field} placeholder="John" />
          </div>
          <div>
            <label htmlFor="lastName" className={label}>Last Name {req}</label>
            <input id="lastName" name="lastName" required className={field} placeholder="Smith" />
          </div>
          <div>
            <label htmlFor="phone" className={label}>Phone {req}</label>
            <input id="phone" name="phone" type="tel" required className={field} placeholder="(702) 555-0123" />
          </div>
          <div>
            <label htmlFor="email" className={label}>Email {req}</label>
            <input id="email" name="email" type="email" required className={field} placeholder="john@email.com" />
          </div>
        </div>
      </fieldset>

      {/* Appointment Information */}
      <fieldset>
        <legend className="mb-4 w-full border-b border-line pb-2 text-lg font-extrabold text-ink">
          Appointment Information
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="customerType" className={label}>Customer Type {req}</label>
            <select id="customerType" name="customerType" required defaultValue="" className={field}>
              <option value="" disabled>Choose one…</option>
              <option>New Customer</option>
              <option>Returning Customer</option>
            </select>
          </div>
          <div>
            <label htmlFor="appointmentType" className={label}>Appointment Type {req}</label>
            <select id="appointmentType" name="appointmentType" required defaultValue="" className={field}>
              <option value="" disabled>Choose Drop off or Wait…</option>
              <option>Drop Off</option>
              <option>Wait (While You Wait)</option>
            </select>
          </div>
          <div>
            <label htmlFor="vehicle" className={label}>Vehicle (Year / Make / Model)</label>
            <input id="vehicle" name="vehicle" className={field} placeholder="2018 Toyota Camry" />
          </div>
          <div>
            <label htmlFor="service" className={label}>Service Needed</label>
            <select id="service" name="service" defaultValue="" className={field}>
              <option value="" disabled>Select a service…</option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>{s.name}</option>
              ))}
              <option value="Other / Not sure">Other / Not sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="firstChoiceDate" className={label}>First Choice Date {req}</label>
            <input id="firstChoiceDate" name="firstChoiceDate" type="date" required className={field} />
          </div>
          <div>
            <label htmlFor="firstChoiceTime" className={label}>First Choice Time {req}</label>
            <select id="firstChoiceTime" name="firstChoiceTime" required defaultValue="" className={field}>
              <option value="" disabled>Choose a time…</option>
              {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="secondChoiceDate" className={label}>Second Choice Date</label>
            <input id="secondChoiceDate" name="secondChoiceDate" type="date" className={field} />
          </div>
          <div>
            <label htmlFor="secondChoiceTime" className={label}>Second Choice Time</label>
            <select id="secondChoiceTime" name="secondChoiceTime" defaultValue="" className={field}>
              <option value="" disabled>Choose a time…</option>
              {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <p className="mt-3 text-sm font-medium text-brand-red">
          Dates and times are requests only — not a confirmed appointment. Someone will contact you to
          confirm a date and time.
        </p>
      </fieldset>

      {/* Service Explanation */}
      <fieldset>
        <legend className="mb-4 w-full border-b border-line pb-2 text-lg font-extrabold text-ink">
          Service Explanation
        </legend>
        <label htmlFor="message" className={label}>What&rsquo;s going on with your vehicle?</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={field}
          placeholder="Describe the issue, symptoms, or anything we should know…"
        />
      </fieldset>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error} You can also reach us directly at{" "}
          <a href={`tel:${site.phone.tel}`} className="font-bold underline">{site.phone.display}</a>.
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-brand-red px-6 py-4 text-base font-bold text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-red-dark disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request an Appointment"}
        </button>
        <p className="mt-3 text-center text-sm text-steel">
          Prefer to talk now?{" "}
          <a href={`tel:${site.phone.tel}`} className="font-bold text-brand-red">Call {site.phone.display}</a>
        </p>
      </div>
    </form>
  );
}
