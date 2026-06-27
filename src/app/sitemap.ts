import type { MetadataRoute } from "next";
import { site, services, nav } from "@/lib/site";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [...nav, { label: "Careers", href: "/careers" }].map((n) => ({
    url: `${site.url}${n.href}`,
    changeFrequency: "monthly" as const,
    priority: n.href === "/" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${site.url}/car-care-tips/${a.slug}`,
    lastModified: a.date,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
