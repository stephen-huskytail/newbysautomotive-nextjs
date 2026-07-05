import Image from "next/image";
import Link from "next/link";

export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs,
  image = "/photos/mechanic-clipboard.webp",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: { name: string; href: string }[];
  /** Background photo, faded into the navy gradient. Pass a page-specific photo when one fits. */
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-gradient">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-brand-navy/30" />
      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16">
        {crumbs && (
          <nav className="mb-4 text-sm text-white/60" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={c.href}>
                {i > 0 && <span className="px-2">/</span>}
                <Link href={c.href} className="hover:text-white">
                  {c.name}
                </Link>
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red-light">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-3xl text-balance text-4xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-2xl text-balance text-lg text-white/75">{intro}</p>}
      </div>
    </section>
  );
}
