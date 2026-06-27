import Image from "next/image";
import Link from "next/link";
import { site, services, process } from "@/lib/site";
import { Stars } from "@/components/Stars";
import { TrustBar } from "@/components/TrustBar";
import { ServiceCard } from "@/components/ServiceCard";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqSection } from "@/components/FaqSection";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { PhoneIcon, ArrowIcon, CheckIcon } from "@/components/icons";

export const revalidate = 86400; // ISR — regenerate at most once a day

const valueProps = [
  { title: "Honest, no-upsell pricing", body: "We diagnose the real problem and recommend only what your vehicle actually needs. You approve every cost before we start." },
  { title: "ASE-certified technicians", body: "NAPA-affiliated, AAA-accredited, BBB-rated. The training and tools to fix it right the first time." },
  { title: "All makes & models", body: "Domestic and import, cars and trucks, since 2000. A true one-stop shop for every vehicle you own." },
  { title: "Nationwide warranty", body: "Most work and parts are backed by a nationwide warranty — protection that follows you wherever you drive." },
];

const galleryPhotos = [
  { src: "/photos/brake-rotor.webp", alt: "Brake rotor and caliper service at Newby's Automotive" },
  { src: "/photos/ac-gauges.webp", alt: "A/C system diagnostics with manifold gauges" },
  { src: "/photos/oil-change.webp", alt: "Oil change service in progress" },
  { src: "/photos/wheel-alignment.webp", alt: "Computerized wheel alignment" },
  { src: "/photos/check-engine-dash.webp", alt: "Check engine light diagnostics" },
  { src: "/photos/suspension-arm.webp", alt: "Suspension and steering repair" },
  { src: "/photos/spark-plugs.webp", alt: "Ignition and tune-up service" },
  { src: "/photos/transmission-gears.webp", alt: "Transmission and drivetrain repair" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema()} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-brand-navy">
        <Image
          src="/photos/customer-keys.webp"
          alt="Happy Newby's Automotive customer receiving their keys"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20">
              <Stars rating={site.reviews.rating} size={15} />
              {site.reviews.rating} from {site.reviews.count.toLocaleString()} verified reviews
            </span>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Henderson&rsquo;s Most-Reviewed <span className="text-brand-red-light">Auto Repair</span> Shop
            </h1>
            <p className="mt-5 max-w-xl text-balance text-lg text-white/80">
              Honest, expert service on all makes and models — family-owned on American Pacific Dr
              since 2000. ASE-certified techs, fair prices, and work backed by nationwide warranty.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.phone.tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-4 text-base font-bold text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-red-dark"
              >
                <PhoneIcon size={20} /> Call {site.phone.display}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                Request Appointment <ArrowIcon size={18} />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/85">
              {["ASE Certified", "Family-Owned Since 2000", "All Makes & Models", "Nationwide Warranty"].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <CheckIcon size={16} className="text-brand-red-light" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Trust badges ─────────────────────────────────────── */}
      <section className="border-b border-line bg-white py-9">
        <div className="mx-auto max-w-7xl px-6">
          <TrustBar />
        </div>
      </section>

      {/* ── Why choose us ────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Why Newby&rsquo;s</p>
            <h2 className="mt-2 text-balance text-3xl font-extrabold text-ink sm:text-4xl">
              The Henderson shop drivers actually trust
            </h2>
            <p className="mt-4 text-steel">
              With over {site.reviews.count.toLocaleString()} verified reviews at {site.reviews.rating}★,
              Newby&rsquo;s has earned the largest spotless reputation on American Pacific Dr.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  <CheckIcon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Services</p>
              <h2 className="mt-2 text-balance text-3xl font-extrabold text-ink sm:text-4xl">
                One shop for everything your vehicle needs
              </h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1.5 font-bold text-brand-red">
              View all services <ArrowIcon size={18} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">How It Works</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Simple, honest, no surprises</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="relative rounded-2xl border border-line bg-white p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-xl font-extrabold text-white">
                  {p.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work gallery ─────────────────────────────────────── */}
      <section className="bg-brand-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red-light">In The Shop</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">The work we do every day</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {galleryPhotos.map((g) => (
              <div key={g.src} className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />
      <FaqSection />
      <CTASection />
    </>
  );
}
