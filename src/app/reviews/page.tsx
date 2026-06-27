import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CTASection } from "@/components/CTASection";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Reviews — 4.9★ from 1,400+ Verified Customers",
  description:
    "See why Newby's Automotive is Henderson's most-reviewed auto repair shop — 4.9 stars from over 1,400 verified reviews, 95% five-star, NPS 96.",
  alternates: { canonical: "/reviews" },
};

const stats = [
  { value: site.reviews.rating.toString(), label: "Average rating" },
  { value: site.reviews.count.toLocaleString(), label: "Verified reviews" },
  { value: `${site.reviews.fiveStarPct}%`, label: "Five-star reviews" },
  { value: site.reviews.nps.toString(), label: "Net Promoter Score" },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Verified Reviews"
        title="The most-reviewed auto shop in Henderson"
        intro="Our reputation is built one honest repair at a time. These numbers come from SureCritic's human-verified review platform — real customers, real visits."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/reviews" },
        ]}
      />

      <section className="border-b border-line bg-white py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold text-brand-red sm:text-5xl">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-steel">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <ReviewsSection heading="In our customers' words" limit={6} />
      <CTASection
        heading="Join 1,400+ happy Henderson drivers"
        sub={`Experience the service that earned ${site.reviews.rating} stars. Call ${site.phone.display} or request an appointment today.`}
      />
    </>
  );
}
