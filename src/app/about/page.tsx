import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { TrustBar } from "@/components/TrustBar";
import { CTASection } from "@/components/CTASection";
import { CheckIcon } from "@/components/icons";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "About Newby's Automotive — Family-Owned in Henderson Since 2000",
  description:
    "Newby's Automotive Center is a family-owned, ASE-certified auto repair shop on American Pacific Dr in Henderson, NV. Honest service on all makes and models since 2000.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Honesty first", body: "We tell you what your vehicle actually needs — and what it doesn't. No upsells, no scare tactics." },
  { title: "Do it right", body: "ASE-certified work, quality parts, and a nationwide warranty standing behind every repair." },
  { title: "Treat you like family", body: "We've earned 1,400+ verified reviews by treating every customer the way we'd want to be treated." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Family-owned auto repair, trusted since 2000"
        intro={`${site.owner} and the Newby's team have spent over two decades building Henderson's most-reviewed auto shop — one honest repair at a time.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            {/* PLACEHOLDER: swap for a real photo of Conley Newby / the team / the shop */}
            <Image
              src="/photos/mechanic-clipboard.webp"
              alt="A Newby's Automotive technician ready to help in Henderson, NV"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-ink">Your neighborhood auto repair specialist</h2>
            <div className="mt-5 space-y-4 text-ink/85">
              <p>
                Since 2000, Newby&rsquo;s Automotive Center has been the shop Henderson drivers turn to
                when they want it done right. As a local, family-owned business on American Pacific
                Drive, we have the knowledge, skills and equipment to care for your vehicle in a
                friendly, cost-effective way.
              </p>
              <p>
                We service all makes, models and years — domestic and import, cars and trucks. From a
                simple oil change to major engine and transmission work, you get the same honest
                answer and the same quality every time.
              </p>
              <p>
                That commitment is why our customers keep coming back, and why we&rsquo;ve become the
                most-reviewed auto repair shop in the area, with {site.reviews.count.toLocaleString()}{" "}
                verified reviews at {site.reviews.rating} stars.
              </p>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {["ASE-Certified Technicians", "NAPA AutoCare Affiliated", "AAA Accredited", "BBB Rated", "Nationwide Warranty", "All Makes & Models"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-ink/85">
                  <CheckIcon size={18} className="shrink-0 text-brand-red" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink">What we stand for</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-bold text-ink">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-steel">{v.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <TrustBar />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
