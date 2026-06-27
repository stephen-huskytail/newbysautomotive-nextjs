"use client";

import Link from "next/link";
import { useState } from "react";
import { site, nav } from "@/lib/site";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { PhoneIcon, ClockIcon, PinIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility bar */}
      <div className="hidden bg-brand-navy text-white/85 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-[0.8rem]">
          <div className="flex items-center gap-5">
            <SocialLinks variant="ghost" size={13} buttonClassName="h-6 w-6" />
            <span className="hidden items-center gap-1.5 lg:inline-flex">
              <PinIcon size={14} /> {site.address.full}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon size={14} /> {site.hoursShort}
            </span>
          </div>
          <a
            href={site.reviews.sureCriticUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-brand-red-light"
          >
            ★ {site.reviews.rating} from {site.reviews.count.toLocaleString()} verified reviews
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm font-semibold text-ink/80 transition hover:text-brand-red"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phone.tel}`}
              className="hidden items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-bold text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-red-dark sm:inline-flex"
            >
              <PhoneIcon size={16} />
              {site.phone.display}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-line bg-white lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2" aria-label="Mobile">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/70 py-3 text-base font-semibold text-ink/85"
                >
                  {n.label}
                </Link>
              ))}
              <a
                href={`tel:${site.phone.tel}`}
                className="mt-3 mb-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-3 text-base font-bold text-white"
              >
                <PhoneIcon size={18} /> Call {site.phone.display}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
