import { makes } from "@/lib/site";

export function MakesSection({ dark = false }: { dark?: boolean }) {
  return (
    <section className={dark ? "bg-brand-navy py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-red-light">
          We Service All Makes &amp; Models
        </p>
        <h2 className={`mt-2 text-3xl font-extrabold sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>
          Vehicles we service &amp; repair
        </h2>
        <p className={`mx-auto mt-4 max-w-2xl ${dark ? "text-white/70" : "text-steel"}`}>
          Domestic and import, cars and trucks — if you drive it, we can fix it. A few of the makes
          our Henderson techs work on every day:
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {makes.map((m) => (
            <li
              key={m}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                dark
                  ? "bg-white/10 text-white ring-1 ring-white/15"
                  : "bg-mist text-ink ring-1 ring-line"
              }`}
            >
              {m}
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
