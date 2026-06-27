import { faqs } from "@/lib/site";

export function FaqSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            Questions Henderson drivers ask
          </h2>
        </div>
        <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-5 [&_summary]:cursor-pointer" {...(i === 0 ? { open: true } : {})}>
              <summary className="flex list-none items-center justify-between gap-4 font-bold text-ink">
                {f.q}
                <span className="text-brand-red transition group-open:rotate-45">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-steel">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
