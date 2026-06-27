import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { ArrowIcon } from "@/components/icons";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Car Care Tips & Auto Advice — Henderson, NV",
  description:
    "Practical car care tips from Newby's Automotive in Henderson, NV: summer & winter driving, oil changes, battery and cooling-system care, warranty facts and more.",
  alternates: { canonical: "/car-care-tips" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function CarCareTipsPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHeader
        eyebrow="Car Care Tips"
        title="Advice to keep your vehicle running strong"
        intro="Straight-talk car care tips from the team at Newby's — written for real Henderson drivers and our desert climate. No jargon, no upsells."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Car Care Tips", href: "/car-care-tips" },
        ]}
      />

      {/* Featured */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href={`/car-care-tips/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)] transition hover:shadow-lg md:grid-cols-2"
          >
            <div className="relative aspect-[16/10] md:aspect-auto">
              <Image
                src={featured.photo}
                alt={featured.photoAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                Featured · {featured.readMins} min read
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-ink">{featured.title}</h2>
              <p className="mt-3 text-steel">{featured.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand-red">
                Read the tips <ArrowIcon size={18} className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <Link
                key={a.slug}
                href={`/car-care-tips/${a.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={a.photo}
                    alt={a.photoAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold text-steel">
                    {formatDate(a.date)} · {a.readMins} min read
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-ink">{a.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{a.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-red">
                    Read more <ArrowIcon size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Questions about your vehicle?"
        sub="Reading is great — but a quick call is faster. Talk to a real Newby's technician today."
      />
    </>
  );
}
