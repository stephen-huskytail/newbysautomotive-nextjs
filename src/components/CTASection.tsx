import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, ArrowIcon } from "./icons";

export function CTASection({
  heading = "Ready to get your vehicle fixed right?",
  sub = "Call Newby's now to talk to a real person, or request an appointment online. Honest answers, fair prices, no runaround.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="bg-navy-gradient">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">
        <h2 className="text-balance text-3xl font-extrabold text-white sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-white/75 sm:text-lg">{sub}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${site.phone.tel}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-4 text-base font-bold text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-red-dark sm:w-auto"
          >
            <PhoneIcon size={20} /> Call {site.phone.display}
          </a>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Request Appointment <ArrowIcon size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
