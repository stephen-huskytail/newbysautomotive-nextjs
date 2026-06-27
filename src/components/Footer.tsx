import Link from "next/link";
import { site, nav, services } from "@/lib/site";
import { Logo } from "./Logo";
import { PhoneIcon, PinIcon, ClockIcon } from "./icons";
import { Stars } from "./Stars";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {site.positioning}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Stars rating={site.reviews.rating} size={16} />
            <span className="text-sm font-semibold text-white">
              {site.reviews.rating} · {site.reviews.count.toLocaleString()} reviews
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-semibold text-brand-red-light hover:text-white">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Visit Us</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <PinIcon size={16} className="mt-0.5 shrink-0 text-brand-red-light" />
              <a href={site.mapsDirections} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {site.address.full}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon size={16} className="shrink-0 text-brand-red-light" />
              <a href={`tel:${site.phone.tel}`} className="font-semibold text-white hover:text-brand-red-light">
                {site.phone.display}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <ClockIcon size={16} className="mt-0.5 shrink-0 text-brand-red-light" />
              <span>{site.hoursShort}<br />Sat–Sun: Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/55 sm:flex-row">
          <p>© {site.foundedYear}–present {site.name}. All rights reserved.</p>
          <p>Family-owned in Henderson, NV · ASE Certified · NAPA · AAA · BBB</p>
        </div>
      </div>
    </footer>
  );
}
