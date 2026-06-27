import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site";
import { ArrowIcon } from "./icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.photo}
          alt={service.photoAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-navy/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
          {service.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-ink">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-red">
          Learn more
          <ArrowIcon size={16} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
