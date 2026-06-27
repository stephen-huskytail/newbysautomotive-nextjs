import type { MetadataRoute } from "next";
import { site, services, nav } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = nav.map((n) => ({
    url: `${site.url}${n.href}`,
    changeFrequency: "monthly" as const,
    priority: n.href === "/" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
