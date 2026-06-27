import type { Metadata } from "next";
import { services, serviceCategories, site } from "@/lib/site";
import { ServiceCard } from "@/components/ServiceCard";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Auto Repair Services in Henderson, NV",
  description:
    "Complete auto repair in Henderson, NV: brakes, A/C, check engine diagnostics, oil changes, alignment, suspension, engine & transmission, electrical. ASE-certified. All makes & models.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Complete auto repair for every make & model"
        intro="From routine maintenance to major repairs, Newby's is Henderson's one-stop shop. ASE-certified technicians, honest pricing, and nationwide warranty on most work."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      {serviceCategories.map((cat) => (
        <section key={cat} className="py-12 first:pt-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-extrabold text-ink">{cat}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.category === cat)
                .map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-y border-line bg-mist py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-steel">
            Trusted credentials &amp; affiliations
          </p>
          <TrustBar />
        </div>
      </section>

      <CTASection
        heading="Not sure what your car needs?"
        sub={`Call ${site.phone.display} and talk to a real technician. We'll help you figure out what's going on — honestly.`}
      />
    </>
  );
}
