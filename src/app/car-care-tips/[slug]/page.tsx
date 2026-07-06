import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, type Article } from "@/lib/articles";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { CTASection } from "@/components/CTASection";
import { Stars } from "@/components/Stars";
import { ArrowIcon, PhoneIcon, CheckIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const title = a.title.length > 60 ? `${a.title.slice(0, 57).trim()}…` : a.title;
  return {
    title: { absolute: title },
    description: a.excerpt,
    alternates: { canonical: `/car-care-tips/${a.slug}` },
    openGraph: { title, description: a.excerpt, images: [{ url: a.photo }] },
  };
}

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const STOPWORDS = new Set([
  "the", "and", "your", "how", "what", "when", "why", "helps", "help",
  "with", "for", "can", "may", "you", "are", "does", "prevent", "avoid",
  "vehicle", "vehicles", "car", "auto", "repair", "repairs", "service",
]);

// Related = most title-keyword overlap, newest first as tiebreaker.
function relatedArticles(a: Article, count: number) {
  const words = new Set(
    a.title.toLowerCase().split(/\W+/).filter((w) => w.length > 3 && !STOPWORDS.has(w)),
  );
  return articles
    .filter((x) => x.slug !== a.slug)
    .map((x) => ({
      article: x,
      score: x.title.toLowerCase().split(/\W+/).filter((w) => words.has(w)).length,
    }))
    .sort((p, q) => q.score - p.score || q.article.date.localeCompare(p.article.date))
    .slice(0, count)
    .map((p) => p.article);
}

function Toc({ headings }: { headings: { id: string; text: string }[] }) {
  return (
    <nav aria-label="Table of contents">
      <ol className="space-y-2.5 text-sm">
        {headings.map((h, i) => (
          <li key={h.id}>
            <a href={`#${h.id}`} className="group flex items-start gap-2.5 text-steel transition hover:text-brand-red">
              <span className="font-bold text-brand-red/60 group-hover:text-brand-red">{i + 1}.</span>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const headings = a.body
    .filter((b): b is { type: "h"; text: string } => b.type === "h")
    .map((b) => ({ id: headingId(b.text), text: b.text }));
  const related = relatedArticles(a, 4);
  const relatedSlugs = new Set(related.map((r) => r.slug));
  const more = articles
    .filter((x) => x.slug !== a.slug && !relatedSlugs.has(x.slug))
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(a)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/car-care-tips" },
          { name: a.title, path: `/car-care-tips/${a.slug}` },
        ])}
      />

      <article className="pb-4">
        {/* Header */}
        <div className="bg-navy-gradient">
          <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
            <nav className="mb-4 text-sm text-white/60" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="px-2">/</span>
              <Link href="/car-care-tips" className="hover:text-white">Blog</Link>
            </nav>
            <p className="text-sm font-semibold text-white/70">
              {formatDate(a.date)} · {a.readMins} min read
            </p>
            <h1 className="mt-2 max-w-4xl text-balance text-4xl font-extrabold text-white sm:text-5xl">{a.title}</h1>
            <p className="mt-4 text-sm font-medium text-white/70">
              By the {site.shortName} team · Family-owned in Henderson, NV since {site.foundedYear}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-10 lg:grid lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-12">
          {/* Main column */}
          <div className="max-w-3xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <Image src={a.photo} alt={a.photoAlt} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
            </div>

            {/* Mobile TOC */}
            {headings.length > 1 && (
              <details className="mt-6 rounded-2xl border border-line bg-mist p-5 lg:hidden">
                <summary className="cursor-pointer text-sm font-bold uppercase tracking-widest text-ink">
                  In this article
                </summary>
                <div className="mt-4">
                  <Toc headings={headings} />
                </div>
              </details>
            )}

            {/* Body */}
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/85">
              {a.body.map((block, i) => {
                if (block.type === "h")
                  return (
                    <h2 key={i} id={headingId(block.text)} className="pt-4 text-2xl font-extrabold text-ink">
                      {block.text}
                    </h2>
                  );
                if (block.type === "ul")
                  return (
                    <ul key={i} className="ml-1 space-y-2">
                      {block.items.map((it, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  );
                return <p key={i}>{block.text}</p>;
              })}
            </div>

            {/* Author / E-E-A-T box */}
            <div className="mt-12 rounded-2xl border border-line bg-mist p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red">About the author</p>
              <h2 className="mt-2 text-lg font-extrabold text-ink">{site.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                This article is published by the team at {site.name}, a family-owned auto repair shop
                on American Pacific Dr in Henderson, NV since {site.foundedYear}. Our ASE-certified
                technicians service all makes and models and have earned{" "}
                {site.reviews.count.toLocaleString()} verified reviews at {site.reviews.rating} stars.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm font-medium text-ink/80">
                {["ASE Certified", "NAPA Affiliated", "AAA Accredited", "BBB Rated"].map((t) => (
                  <li key={t} className="inline-flex items-center gap-1.5">
                    <CheckIcon size={15} className="text-brand-red" /> {t}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-red">
                Meet the team behind the shop <ArrowIcon size={15} />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="mt-10 space-y-6 lg:mt-0">
            <div className="lg:sticky lg:top-28 lg:space-y-6">
              {/* Desktop TOC */}
              {headings.length > 1 && (
                <div className="hidden rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] lg:block">
                  <p className="text-xs font-bold uppercase tracking-widest text-ink">In this article</p>
                  <div className="mt-4">
                    <Toc headings={headings} />
                  </div>
                </div>
              )}

              {/* CTA card */}
              <div className="rounded-2xl bg-navy-gradient p-6 text-white shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-2">
                  <Stars rating={site.reviews.rating} size={14} />
                  <span className="text-sm font-bold">
                    {site.reviews.rating} · {site.reviews.count.toLocaleString()} reviews
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-extrabold">Questions about your vehicle?</h2>
                <p className="mt-1.5 text-sm text-white/75">
                  Reading is great — a quick call is faster. Talk to a real Henderson technician.
                </p>
                <a
                  href={`tel:${site.phone.tel}`}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-bold text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-red-dark"
                >
                  <PhoneIcon size={16} /> Call {site.phone.display}
                </a>
                <Link
                  href="/contact"
                  className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Request Appointment <ArrowIcon size={15} />
                </Link>
              </div>

              {/* Related posts */}
              <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                <p className="text-xs font-bold uppercase tracking-widest text-ink">Related posts</p>
                <ul className="mt-4 space-y-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/car-care-tips/${r.slug}`} className="group flex items-start gap-3">
                        <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg">
                          <Image src={r.photo} alt="" fill sizes="80px" className="object-cover" />
                        </span>
                        <span className="text-sm font-semibold leading-snug text-ink/85 transition group-hover:text-brand-red">
                          {r.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/car-care-tips" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-red">
                  View all posts <ArrowIcon size={15} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* More articles */}
      <section className="border-t border-line bg-mist py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-extrabold text-ink">More car care tips</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {more.map((m) => (
              <Link
                key={m.slug}
                href={`/car-care-tips/${m.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={m.photo} alt={m.photoAlt} fill sizes="33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold text-ink">{m.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-red">
                    Read <ArrowIcon size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
