import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { TrustBar } from "@/components/TrustBar";
import { CTASection } from "@/components/CTASection";
import { MakesSection } from "@/components/MakesSection";
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
            {/* PLACEHOLDER: swap for a real photo of the shop / team */}
            <Image
              src="/photos/customer-keys.webp"
              alt="A happy Newby's Automotive customer in Henderson, NV"
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

      {/* About the Owner */}
      <section className="bg-brand-navy py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            {/* PLACEHOLDER: swap for a real photo of Conley Newby */}
            <Image
              src="/photos/mechanic-clipboard.webp"
              alt="Conley Newby, owner of Newby's Automotive Center"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red-light">
              About the Owner
            </p>
            <h2 className="mt-2 text-4xl font-extrabold text-white">Conley Newby</h2>
            <div className="mt-5 space-y-4 text-white/80">
              <p>
                It started with a young boy growing up in Las Vegas with a fascination for cars. As a
                local businessman, Conley Newby earned the right qualifications and ran two automotive
                franchises — including an AAMCO Transmissions franchise from 1985 to 2000 — before
                deciding to go out on his own. That&rsquo;s how Newby&rsquo;s Automotive Center was born.
              </p>
              <p>
                Through Conley&rsquo;s hard work and dedication, Newby&rsquo;s has grown into one of the
                most respected auto repair garages in Henderson, NV, delivering exemplary service year
                after year.
              </p>
              <p>
                Conley&rsquo;s son-in-law also works at the shop, keeping it a true family-run business.
                When he&rsquo;s not working, you&rsquo;ll find Conley supporting his local church. His
                motto says it all: <span className="font-semibold text-white">quality work at fair prices, and treating you like family.</span>
              </p>
            </div>
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

      <MakesSection dark />

      <CTASection />
    </>
  );
}
