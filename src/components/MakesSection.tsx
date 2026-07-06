import Link from "next/link";
import { vehicles } from "@/lib/vehicles";

export function MakesSection({ dark = false }: { dark?: boolean }) {
  return (
    <section className={dark ? "bg-brand-navy py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className={`text-sm font-bold uppercase tracking-widest ${dark ? "text-white" : "text-brand-red"}`}>
          We Service All Makes &amp; Models
        </p>
        <h2 className={`mt-2 text-3xl font-extrabold sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>
          Vehicles we service &amp; repair
        </h2>
        <p className={`mx-auto mt-4 max-w-2xl ${dark ? "text-white/70" : "text-steel"}`}>
          Domestic and import, cars and trucks — if you drive it, we can fix it. Select your make
          for details on our Henderson repair and maintenance services:
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {vehicles.map((vehicle) => (
            <li
              key={vehicle.slug}
            >
              <Link
                href={`/vehicles/${vehicle.slug}`}
                className={`inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  dark
                    ? "bg-white/10 text-white ring-1 ring-white/15 hover:bg-brand-red"
                    : "bg-mist text-ink ring-1 ring-line hover:bg-brand-red hover:text-white"
                }`}
              >
                {vehicle.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className={`mt-6 text-sm ${dark ? "text-white/60" : "text-steel"}`}>
          Don&rsquo;t see your make? We service it too — just give us a call.
        </p>
      </div>
    </section>
  );
}
