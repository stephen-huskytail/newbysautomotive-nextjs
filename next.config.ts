import type { NextConfig } from "next";

// Legacy Drive Shops URLs (old newbysautomotive.com) → new routes, so nothing
// breaks at DNS cutover. Sourced from the old site's sitemap.xml (2026-07-05)
// plus common aliases; the old platform soft-200s everything, so the sitemap
// is the authoritative inventory. /blog, /blog-details?objId= and
// /vehicles?objId= are handled by in-app redirect routes instead (they need
// query-param lookups).
const legacyRedirects = [
  // Old flat service pages → new service detail pages
  { source: "/Brake-Repair&Suspension-Services", destination: "/services/brake-repair" },
  { source: "/Check-Engine-Light&Diagnostics", destination: "/services/check-engine-diagnostics" },
  { source: "/Oil-Change&Preventative-Maintenance", destination: "/services/oil-change-maintenance" },
  { source: "/our-services", destination: "/services" },
  { source: "/auto-repair-services", destination: "/services" },
  // Tips hubs → blog
  { source: "/auto-repair-tips", destination: "/car-care-tips" },
  { source: "/vehicle-tips", destination: "/car-care-tips" },
  // Hiring
  { source: "/hiring", destination: "/careers" },
  { source: "/job-posting-details", destination: "/careers" },
  // Contact / conversion paths
  { source: "/opt-in", destination: "/contact" },
  { source: "/appointment", destination: "/contact" },
  { source: "/appointments", destination: "/contact" },
  { source: "/schedule-service", destination: "/contact" },
  { source: "/contact-us", destination: "/contact" },
  // Misc pages
  { source: "/home", destination: "/" },
  { source: "/about-us", destination: "/about" },
  { source: "/testimonials", destination: "/reviews" },
  { source: "/coupons", destination: "/specials" },
  { source: "/gallery", destination: "/" },
  { source: "/privacy", destination: "/privacy-policy" },
  { source: "/accessibility", destination: "/contact" },
  // Old PPC landing pages (robots-disallowed on the old site)
  { source: "/ppc", destination: "/" },
  { source: "/ppc-thank-you", destination: "/" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
