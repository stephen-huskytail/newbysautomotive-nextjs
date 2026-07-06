import type { Metadata } from "next";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import { vehicles, getVehicleByObjId } from "@/lib/vehicles";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { ArrowIcon } from "@/components/icons";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Vehicles We Service in Henderson, NV",
  description:
    "Newby's Automotive Center services domestic and import vehicles in Henderson, NV, including Acura, Audi, BMW, Chevrolet, Ford, Honda, Toyota, Hyundai and more.",
  alternates: { canonical: "/vehicles" },
};

export default async function VehiclesPage({
  searchParams,
}: {
  searchParams: Promise<{ objId?: string }>;
}) {
  const { objId } = await searchParams;
  if (objId) {
    const vehicle = getVehicleByObjId(objId);
    if (vehicle) permanentRedirect(`/vehicles/${vehicle.slug}`);
  }

  return (
    <>
      <PageHeader
        eyebrow="Vehicles"
        title="Vehicles we service & repair"
        intro="Domestic and import, cars and trucks — Newby's Automotive Center works on all makes and models at our Henderson, NV shop."
        image="/photos/towing-flatbed.webp"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Vehicles", href: "/vehicles" },
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-ink/85">
              Our ASE-certified technicians can work on all makes and models with exceptional expertise. We especially service Chevrolet, Ford, Honda, Chrysler, Toyota, Hyundai and dozens more.
            </p>
            <p className="mt-4 text-steel">
              Choose your vehicle make below for dedicated repair and maintenance information from our Henderson auto shop.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {vehicles.map((vehicle) => (
              <Link
                key={vehicle.slug}
                href={`/vehicles/${vehicle.slug}`}
                className="group rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-brand-red"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red">{vehicle.name} Repair</span>
                <h2 className="mt-2 text-xl font-extrabold text-ink group-hover:text-brand-red">
                  {vehicle.name}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-steel">
                  {vehicle.metaDescription.replace("Newby's Automotive Ctr", "Newby's Automotive Center")}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy group-hover:text-brand-red">
                  View detail page <ArrowIcon size={16} />
                </span>
              </Link>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-steel">
            Don&apos;t see your make? We service it too — call {site.phone.display} and ask our team.
          </p>
        </div>
      </section>

      <CTASection
        heading="Need service for your vehicle?"
        sub={`Call ${site.phone.display} or request an appointment online. We'll help you get clear answers and a fair repair plan.`}
      />
    </>
  );
}
