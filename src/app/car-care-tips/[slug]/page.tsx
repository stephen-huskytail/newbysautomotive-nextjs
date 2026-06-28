import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { CTASection } from "@/components/CTASection";
import { ArrowIcon } from "@/components/icons";

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
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/car-care-tips/${a.slug}` },
    openGraph: { title: a.title, description: a.excerpt, images: [{ url: a.photo }] },
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

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 3);

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
          <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16">
            <nav className="mb-4 text-sm text-white/60" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="px-2">/</span>
              <Link href="/car-care-tips" className="hover:text-white">Blog</Link>
            </nav>
            <p className="text-sm font-semibold text-white/70">
              {formatDate(a.date)} · {a.readMins} min read
            </p>
            <h1 className="mt-2 text-balance text-4xl font-extrabold text-white sm:text-5xl">{a.title}</h1>
          </div>
        </div>

        {/* Hero image */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative -mt-8 aspect-[16/9] overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <Image src={a.photo} alt={a.photoAlt} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="space-y-5 text-lg leading-relaxed text-ink/85">
            {a.body.map((block, i) => {
              if (block.type === "h")
                return <h2 key={i} className="pt-4 text-2xl font-extrabold text-ink">{block.text}</h2>;
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
