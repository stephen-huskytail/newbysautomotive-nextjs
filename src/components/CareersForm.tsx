"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { PhoneIcon, CheckIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

const field =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/20";
const label = "mb-1.5 block text-sm font-semibold text-ink";

export function CareersForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.company) return setStatus("success");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "employment" }),
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
        <h3 className="mt-4 text-xl font-bold text-ink">Application received!</h3>
        <p className="mt-2 text-steel">
          Thanks for your interest in joining Newby&rsquo;s. We&rsquo;ll review your application and be
          in touch. Want to follow up? Give us a call.
        </p>
        <a href={`tel:${site.phone.tel}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 font-bold text-white">
          <PhoneIcon size={18} /> {site.phone.display}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-first" className={label}>First Name <span className="text-brand-red">*</span></label>
          <input id="c-first" name="firstName" required className={field} placeholder="John" />
        </div>
        <div>
          <label htmlFor="c-last" className={label}>Last Name <span className="text-brand-red">*</span></label>
          <input id="c-last" name="lastName" required className={field} placeholder="Smith" />
        </div>
        <div>
          <label htmlFor="c-phone" className={label}>Phone <span className="text-brand-red">*</span></label>
          <input id="c-phone" name="phone" type="tel" required className={field} placeholder="(702) 555-0123" />
        </div>
        <div>
          <label htmlFor="c-email" className={label}>Email <span className="text-brand-red">*</span></label>
          <input id="c-email" name="email" type="email" required className={field} placeholder="john@email.com" />
        </div>
      </div>
      <div>
        <label htmlFor="c-position" className={label}>Position of Interest</label>
        <select id="c-position" name="position" defaultValue="" className={field}>
          <option value="" disabled>Select a role…</option>
          <option>Automotive Technician / Mechanic</option>
          <option>ASE-Certified Technician</option>
          <option>Service Advisor</option>
          <option>Front Desk / Office</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="c-message" className={label}>Tell us about yourself & your experience</label>
        <textarea id="c-message" name="message" rows={5} className={field} placeholder="Experience, certifications, availability, and anything else you'd like us to know…" />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error} You can also call us at{" "}
          <a href={`tel:${site.phone.tel}`} className="font-bold underline">{site.phone.display}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand-red px-6 py-4 text-base font-bold text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-red-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit Application"}
      </button>
    </form>
  );
}
