import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

// Mobile-only floating CTA. Phone call is the #1 objective, so it gets the
// dominant button; appointment request is the secondary path.
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 p-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] backdrop-blur lg:hidden">
      <div className="flex items-center gap-2.5">
        <a
          href={`tel:${site.phone.tel}`}
          className="flex flex-[2] items-center justify-center gap-2 rounded-full bg-brand-red px-4 py-3 text-sm font-bold text-white"
        >
          <PhoneIcon size={18} /> Call Now
        </a>
        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center rounded-full border-2 border-brand-navy px-4 py-3 text-sm font-bold text-brand-navy"
        >
          Book
        </Link>
      </div>
    </div>
  );
}
