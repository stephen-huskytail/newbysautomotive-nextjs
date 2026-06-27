import type { Metadata } from "next";
import { services, site } from "@/lib/site";
import { ServiceCard } from "@/components/ServiceCard";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { TrustBar } from "@/components/TrustBar";
import { MakesSection } from "@/components/MakesSection";

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

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-steel">
            Need something not listed here? From exhaust and cooling systems to fleet service and
            safety inspections, we do it all.{" "}
            <a href={`tel:${site.phone.tel}`} className="font-bold text-brand-red">
              Call {site.phone.display}
            </a>{" "}
            and just ask.
          </p>
        </div>
      </section>

      <MakesSection dark />

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
