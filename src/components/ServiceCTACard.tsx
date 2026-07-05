import Link from "next/link";
import { site, testimonials } from "@/lib/site";
import { Stars } from "./Stars";
import { PhoneIcon, ArrowIcon } from "./icons";

// Fills the empty cell in the 8-card services grid (3-col layout) with social
// proof + a catch-all CTA instead of blank space.
export function ServiceCTACard() {
  const quote = testimonials[2];

  return (
    <div className="flex flex-col rounded-2xl bg-navy-gradient p-6 text-white shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2">
        <Stars rating={site.reviews.rating} size={15} />
        <span className="text-sm font-bold">
          {site.reviews.rating} · {site.reviews.count.toLocaleString()} verified reviews
        </span>
      </div>
      <blockquote className="mt-5 flex-1">
        <p className="text-xl font-bold leading-snug">&ldquo;{quote.quote}&rdquo;</p>
        <footer className="mt-3 text-sm text-white/65">— {quote.source} review</footer>
      </blockquote>
      <div className="mt-6 border-t border-white/15 pt-5">
        <h3 className="text-lg font-bold">Need something not listed?</h3>
        <p className="mt-1 text-sm text-white/75">
          Exhaust, cooling systems, fleet service, inspections — we do it all.
        </p>
        <a
          href={`tel:${site.phone.tel}`}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3.5 font-bold text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-red-dark"
        >
          <PhoneIcon size={18} /> Call {site.phone.display}
        </a>
        <Link
          href="/contact"
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
        >
          Request Appointment <ArrowIcon size={16} />
        </Link>
      </div>
    </div>
  );
}
