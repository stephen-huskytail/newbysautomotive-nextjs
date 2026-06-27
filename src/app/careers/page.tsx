import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { CareersForm } from "@/components/CareersForm";
import { CheckIcon, PhoneIcon } from "@/components/icons";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Careers — Join Newby's Automotive in Henderson, NV",
  description:
    "Newby's Automotive Center is hiring in Henderson, NV. Competitive pay, job security, and a supportive, family-run shop culture. Apply online or call (702) 897-9667.",
  alternates: { canonical: "/careers" },
};

const perks = [
  { title: "Competitive pay", body: "We pay well for skilled, dependable work — and reward people who take pride in it." },
  { title: "Employment security", body: "An established, busy shop trusted by Henderson since 2000. Steady work, steady paycheck." },
  { title: "Modern equipment", body: "Up-to-date diagnostic tools and resources so you can do the job right and grow your skills." },
  { title: "Supportive culture", body: "A family-run shop that respects its staff and treats the team like family." },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build your career at Newby's Automotive"
        intro="We're a busy, well-respected Henderson shop and we're always looking to grow our team with people who love working on vehicles."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Careers", href: "/careers" },
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-ink">Job opportunities at Newby&rsquo;s Automotive Center</h2>
            <p className="mt-4 text-steel">
              Our shop is actively looking to grow. We provide a vibrant work environment, cutting-edge
              opportunities, competitive pay, employment security, and a supportive company culture. If you
              like working with vehicles and want to work for a recognized company that respects its
              staff, we want to hear from you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  <CheckIcon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-extrabold text-ink">Apply now</h2>
            <p className="mt-3 text-steel">
              Fill out the form and we&rsquo;ll be in touch. Prefer to talk? Call us directly and ask about
              current openings.
            </p>
            <a
              href={`tel:${site.phone.tel}`}
              className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-brand-red p-5 text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-red-dark"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <PhoneIcon size={24} />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-white/80">Call to apply</span>
                <span className="block text-xl font-extrabold">{site.phone.display}</span>
              </span>
            </a>
          </div>
          <div className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] sm:p-8">
            <CareersForm />
          </div>
        </div>
      </section>
    </>
  );
}
