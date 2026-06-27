import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { PhoneIcon } from "@/components/icons";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Online Specials & Coupons — Auto Repair Henderson, NV",
  description:
    "Save on auto repair and maintenance at Newby's Automotive in Henderson, NV. Mention these online specials when you call to schedule.",
  alternates: { canonical: "/specials" },
};

// PLACEHOLDER OFFERS — confirm exact amounts/terms with Conley before production.
// (Old site advertised a $39.95 alignment check; rest are standard shop offers.)
const specials = [
  {
    title: "Alignment Check",
    price: "$39.95",
    desc: "Front-end alignment check to protect your tires and keep your steering straight.",
    terms: "Most vehicles. Mention this offer when scheduling.",
  },
  {
    title: "Oil Change Special",
    price: "Call for price",
    desc: "Conventional or synthetic oil & filter change with a multi-point inspection.",
    terms: "Most vehicles. Synthetic and specialty filters may vary.",
  },
  {
    title: "A/C Performance Check",
    price: "Seasonal offer",
    desc: "Beat the Vegas heat — full A/C system performance check before summer.",
    terms: "Refrigerant and repairs additional if needed.",
  },
  {
    title: "New Customer Welcome",
    price: "Ask us",
    desc: "First time at Newby's? Call and ask what we can do for your first visit.",
    terms: "One per customer. Cannot combine with other offers.",
  },
];

export default function SpecialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Save Money"
        title="Online specials & coupons"
        intro="Quality auto repair doesn't have to break the bank. Mention any of these specials when you call to schedule your appointment."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Specials", href: "/specials" },
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2">
          {specials.map((s) => (
            <div
              key={s.title}
              className="flex flex-col overflow-hidden rounded-2xl border-2 border-dashed border-brand-red/40 bg-white p-7 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-extrabold text-ink">{s.title}</h2>
                <span className="text-2xl font-extrabold text-brand-red">{s.price}</span>
              </div>
              <p className="mt-3 flex-1 text-ink/85">{s.desc}</p>
              <p className="mt-4 text-xs text-steel">{s.terms}</p>
              <a
                href={`tel:${site.phone.tel}`}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 font-bold text-white transition hover:bg-brand-red-dark"
              >
                <PhoneIcon size={18} /> Call to redeem
              </a>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl px-6 text-center text-sm text-steel">
          Offers cannot be combined and may change without notice. Call {site.phone.display} for
          current pricing and details.
        </p>
      </section>

      <CTASection
        heading="Ready to save on your next repair?"
        sub={`Call ${site.phone.display} and mention the special you'd like to use.`}
      />
    </>
  );
}
