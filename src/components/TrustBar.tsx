import Image from "next/image";
import { badges } from "@/lib/site";

// Real affiliation badges pulled from Newby's existing site.
export function TrustBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-6 ${
        dark ? "opacity-90" : ""
      }`}
    >
      {badges.map((b) => (
        <Image
          key={b.src}
          src={b.src}
          alt={b.alt}
          width={b.w}
          height={b.h}
          className="h-11 w-auto object-contain sm:h-12"
        />
      ))}
    </div>
  );
}
