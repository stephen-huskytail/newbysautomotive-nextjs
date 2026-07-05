import type { Metadata } from "next";
import Link from "next/link";
import { site, services } from "@/lib/site";
import { articles } from "@/lib/articles";
import { vehicles } from "@/lib/vehicles";
import { PageHeader } from "@/components/PageHeader";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Sitemap",
  description: `Every page on the ${site.name} website — services, vehicle makes, car care tips, and company pages.`,
  alternates: { canonical: "/sitemap" },
};

const mainPages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Vehicles We Service", href: "/vehicles" },
  { label: "Reviews", href: "/reviews" },
  { label: "Specials & Coupons", href: "/specials" },
  { label: "Blog & Car Care Tips", href: "/car-care-tips" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact & Appointments", href: "/contact" },
];

const legalPages = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
];

const link = "text-ink/80 transition hover:text-brand-red";
const heading = "text-xl font-extrabold text-ink";

function LinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm">
      {items.map((it) => (
        <li key={it.href}>
          <Link href={it.href} className={link}>
            {it.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function SitemapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sitemap"
        title="Everything on our website"
        intro="A complete index of every page — jump straight to the service, vehicle make, or car care tip you're looking for."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Sitemap", href: "/sitemap" },
        ]}
      />

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 className={heading}>Main pages</h2>
              <LinkList items={mainPages} />
              <h2 className={`${heading} mt-10`}>Legal</h2>
              <LinkList items={legalPages} />
            </div>
            <div>
              <h2 className={heading}>Services</h2>
              <LinkList
                items={services.map((s) => ({
                  label: s.name,
                  href: `/services/${s.slug}`,
                }))}
              />
            </div>
            <div>
              <h2 className={heading}>Vehicle makes we service</h2>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {vehicles.map((v) => (
                  <li key={v.slug}>
                    <Link href={`/vehicles/${v.slug}`} className={link}>
                      {v.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 border-t border-line pt-10">
            <h2 className={heading}>Blog &amp; car care tips ({articles.length} posts)</h2>
            <ul className="mt-5 grid gap-x-8 gap-y-2.5 text-sm sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/car-care-tips/${a.slug}`} className={link}>
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
