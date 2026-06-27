import { site, testimonials } from "@/lib/site";
import { Stars } from "./Stars";

export function ReviewsSection({
  heading = "Henderson's most-reviewed auto shop",
  limit = 6,
}: {
  heading?: string;
  limit?: number;
}) {
  return (
    <section className="bg-mist py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
            Verified Reviews
          </p>
          <h2 className="mt-2 text-balance text-3xl font-extrabold text-ink sm:text-4xl">
            {heading}
          </h2>
          <div className="mt-5 inline-flex flex-col items-center gap-2 rounded-2xl bg-white px-7 py-4 shadow-[var(--shadow-card)]">
            <Stars rating={site.reviews.rating} size={24} />
            <p className="text-lg font-bold text-ink">
              {site.reviews.rating} out of 5 ·{" "}
              <span className="text-brand-red">{site.reviews.count.toLocaleString()}</span> verified
              reviews
            </p>
            <p className="text-sm text-steel">
              {site.reviews.fiveStarPct}% five-star · Net Promoter Score {site.reviews.nps}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, limit).map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <Stars rating={5} size={16} />
              <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2 text-sm">
                <span className="font-bold text-ink">{t.author}</span>
                <span className="text-steel">· via {t.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.reviews.sureCriticUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-navy px-6 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-navy hover:text-white"
          >
            Read all {site.reviews.count.toLocaleString()} reviews on SureCritic
          </a>
          <a
            href={site.reviews.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-line px-6 py-3 text-sm font-bold text-ink transition hover:border-brand-red hover:text-brand-red"
          >
            Leave us a Google review
          </a>
        </div>
      </div>
    </section>
  );
}
