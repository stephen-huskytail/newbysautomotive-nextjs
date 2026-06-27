import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService, site } from "@/lib/site";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServiceCard } from "@/components/ServiceCard";
import { PhoneIcon, CheckIcon, ArrowIcon } from "@/components/icons";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.name} in Henderson, NV`,
    description: `${s.short} ASE-certified ${s.name.toLowerCase()} at Newby's Automotive in Henderson, NV. Call ${site.phone.display}.`,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceSchema(service.name, service.intro, service.slug)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />

      <PageHeader
        eyebrow={service.category}
        title={`${service.name} in Henderson, NV`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={service.photo}
                alt={service.photoAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <p className="text-lg leading-relaxed text-ink/85">{service.intro}</p>

            <h2 className="mt-10 text-2xl font-extrabold text-ink">Signs you may need this service</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 rounded-xl border border-line bg-white p-4">
                  <CheckIcon size={20} className="mt-0.5 shrink-0 text-brand-red" />
                  <span className="text-sm text-ink/85">{h}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-extrabold text-ink">What&rsquo;s included</h2>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {service.includes.map((it) => (
                <li key={it} className="flex items-center gap-2 text-ink/85">
                  <CheckIcon size={18} className="shrink-0 text-brand-red" /> {it}
                </li>
              ))}
            </ul>
          </div>

          {/* Sticky call card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
              <h2 className="text-xl font-extrabold text-ink">Schedule your {service.name.toLowerCase()}</h2>
              <p className="mt-2 text-sm text-steel">
                Calling is the fastest way to get on the schedule. Talk to a real technician — no
                runaround, no pressure.
              </p>
              <a
                href={`tel:${site.phone.tel}`}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-4 text-base font-bold text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-red-dark"
              >
                <PhoneIcon size={20} /> Call {site.phone.display}
              </a>
              <Link
                href="/contact"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-navy px-6 py-3.5 text-base font-bold text-brand-navy transition hover:bg-brand-navy hover:text-white"
              >
                Request Appointment <ArrowIcon size={18} />
              </Link>
              <dl className="mt-6 space-y-2 border-t border-line pt-5 text-sm">
                <div className="flex justify-between"><dt className="text-steel">Hours</dt><dd className="font-semibold text-ink">Mon–Fri 8–5</dd></div>
                <div className="flex justify-between"><dt className="text-steel">Location</dt><dd className="font-semibold text-ink">Henderson, NV</dd></div>
                <div className="flex justify-between"><dt className="text-steel">Rating</dt><dd className="font-semibold text-ink">{site.reviews.rating}★ ({site.reviews.count.toLocaleString()})</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-extrabold text-ink">Other services we offer</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection heading="Why Henderson trusts Newby's" limit={3} />
      <CTASection />
    </>
  );
}
