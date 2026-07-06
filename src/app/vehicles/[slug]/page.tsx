import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { vehicles, getVehicle } from "@/lib/vehicles";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CTASection } from "@/components/CTASection";
import { ArrowIcon, CheckIcon, PhoneIcon } from "@/components/icons";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) return {};

  return {
    title: `${vehicle.name} Repair in Henderson, NV`,
    description: vehicle.metaDescription.replace("Newby's Automotive Ctr", "Newby's Automotive Center"),
    alternates: { canonical: `/vehicles/${vehicle.slug}` },
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) notFound();

  const otherVehicles = vehicles.filter((item) => item.slug !== vehicle.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Vehicles", path: "/vehicles" },
          { name: vehicle.name, path: `/vehicles/${vehicle.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${vehicle.name} Repair in Henderson, NV`,
          description: vehicle.metaDescription.replace("Newby's Automotive Ctr", "Newby's Automotive Center"),
          serviceType: `${vehicle.name} repair and maintenance`,
          url: `${site.url}/vehicles/${vehicle.slug}`,
          provider: { "@id": `${site.url}/#business` },
          areaServed: site.serviceArea.map((name) => ({ "@type": "City", name })),
        }}
      />

      <PageHeader
        eyebrow={`${vehicle.name} Repair`}
        title={vehicle.title.replace("Newby's Automotive Ctr", "Newby's Automotive Center")}
        intro={`Certified ${vehicle.name} repair and maintenance from Newby's Automotive Center in Henderson, NV.`}
        image="/photos/towing-flatbed.webp"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Vehicles", href: "/vehicles" },
          { name: vehicle.name, href: `/vehicles/${vehicle.slug}` },
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.35fr_0.85fr]">
          <article>
            <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
              <p className="text-lg leading-relaxed text-ink/85">
                {vehicle.intro.replace("Newby's Automotive Ctr", "Newby's Automotive Center")}
              </p>

              {vehicle.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-5 leading-relaxed text-ink/85">
                  {paragraph.replaceAll("Newby's Automotive Ctr", "Newby's Automotive Center")}
                </p>
              ))}

              {vehicle.bullets.length > 0 ? (
                <ul className="mt-6 grid gap-3">
                  {vehicle.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 rounded-xl bg-mist p-4 text-sm leading-relaxed text-ink/85">
                      <CheckIcon size={20} className="mt-0.5 shrink-0 text-brand-red" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="mt-8 rounded-2xl bg-brand-navy p-6 text-white shadow-[var(--shadow-card)] sm:p-8">
              <h2 className="text-2xl font-extrabold">
                {vehicle.ctaHeading.replace("Newby's Automotive Ctr", "Newby's Automotive Center")}
              </h2>
              <p className="mt-3 leading-relaxed text-white/80">
                {vehicle.ctaBody.replaceAll("Newby's Automotive Ctr", "Newby's Automotive Center")}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${site.phone.tel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3.5 font-bold text-white transition hover:bg-brand-red-dark"
                >
                  <PhoneIcon size={19} /> Call {site.phone.display}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  Request Appointment <ArrowIcon size={17} />
                </Link>
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-red">All makes & models</p>
              <h2 className="mt-2 text-2xl font-extrabold text-ink">We service {vehicle.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                From scheduled maintenance to diagnostics and repairs, our Henderson technicians work on domestic and import vehicles every day.
              </p>
              <dl className="mt-6 space-y-3 border-t border-line pt-5 text-sm">
                <div className="flex justify-between gap-4"><dt className="text-steel">Shop</dt><dd className="font-semibold text-ink">Family-owned since {site.foundedYear}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-steel">Rating</dt><dd className="font-semibold text-ink">{site.reviews.rating}★ / {site.reviews.count.toLocaleString()} reviews</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-steel">Hours</dt><dd className="font-semibold text-ink">Mon–Fri 8–5</dd></div>
              </dl>
              <Link href="/vehicles" className="mt-6 inline-flex items-center gap-1.5 font-bold text-brand-red">
                View all makes <ArrowIcon size={17} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-extrabold text-ink">Other vehicle makes we service</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {otherVehicles.map((item) => (
              <Link
                key={item.slug}
                href={`/vehicles/${item.slug}`}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink ring-1 ring-line transition hover:bg-brand-red hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection heading="Why Henderson trusts Newby's" limit={3} />
      <CTASection />
    </>
  );
}
