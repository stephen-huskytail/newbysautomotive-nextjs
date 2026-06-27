import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { AppointmentForm } from "@/components/AppointmentForm";
import { PhoneIcon, PinIcon, ClockIcon } from "@/components/icons";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Contact & Appointments — Auto Repair in Henderson, NV",
  description:
    "Call (702) 897-9667 or request an appointment online at Newby's Automotive, 1201 American Pacific Dr, Henderson, NV 89074. Mon–Fri 8–5.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Schedule your service today"
        intro="The fastest way to get on the schedule is to call us. Prefer online? Send a request below and we'll call you right back."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Info + call CTA */}
          <div>
            <a
              href={`tel:${site.phone.tel}`}
              className="flex items-center gap-4 rounded-2xl bg-brand-red p-6 text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-red-dark"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/20">
                <PhoneIcon size={28} />
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-wider text-white/80">
                  Call us now
                </span>
                <span className="block text-2xl font-extrabold">{site.phone.display}</span>
              </span>
            </a>

            <dl className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <PinIcon size={22} className="mt-1 shrink-0 text-brand-red" />
                <div>
                  <dt className="font-bold text-ink">Location</dt>
                  <dd className="text-steel">
                    <a href={site.mapsDirections} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red">
                      {site.address.full}
                    </a>
                  </dd>
                  <dd className="mt-1">
                    <a href={site.mapsDirections} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-red">
                      Get directions →
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ClockIcon size={22} className="mt-1 shrink-0 text-brand-red" />
                <div>
                  <dt className="font-bold text-ink">Hours</dt>
                  <dd className="text-steel">
                    {site.hoursShort}
                    <br />
                    Saturday &amp; Sunday: Closed
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 overflow-hidden rounded-2xl border border-line">
              <iframe
                title={`Map to ${site.name}`}
                src={site.mapsEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] sm:p-8">
            <h2 className="text-2xl font-extrabold text-ink">Request an appointment</h2>
            <p className="mt-2 text-steel">
              Tell us about your vehicle and we&rsquo;ll get back to you to confirm a time. Fields
              marked <span className="text-brand-red">*</span> are required.
            </p>
            <div className="mt-6">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
