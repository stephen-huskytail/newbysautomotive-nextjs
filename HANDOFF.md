# Newby's Automotive — Next.js Rebuild · Handoff

**Built:** 2026-06-27 · **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind v4 · Vercel
**Status:** Staging build. **Do NOT cut over DNS until the Drive Shops migration is confirmed complete** (target ~Jul 3–6, per `newbysautomotive.com/todo.md`).

---

## What this is
A from-scratch, SEO-first rebuild of newbysautomotive.com built around the client's #1 asset — the
**4.9★ / 1,436 verified-review** reputation — and the competitor-benchmark positioning hook:
**"Henderson's most-reviewed all-makes shop since 2000."** Phone calls are the primary CTA on every
screen (sticky tap-to-call on mobile); the online appointment request is the secondary path.

100% self-contained — no dependency on the old Drive Shops site (which is going offline). All images,
logo, and badges are hosted locally in `/public`.

## Pages
- `/` Home — hero, trust badges, why-us, all 8 services, 4-step process, work gallery, reviews, FAQ, CTA
- `/services` — services hub (single unified grid)
- `/services/[slug]` — 8 individual SEO service pages (brakes, check-engine, A/C, oil/maintenance, alignment, suspension, engine/transmission, electrical)
- `/reviews` — review stats + real verified testimonials, links to SureCritic + Google
- `/specials` — coupon/offer cards
- `/car-care-tips` + `/car-care-tips/[slug]` — Car Care Tips blog (5 real articles migrated from the old tips pages) w/ Article schema. Old `/blog` was empty (zero posts); this is the content hub, ready for new posts.
- `/about` — family-owned story + **About-the-Owner (real Conley Newby bio)** + "we service all makes" list + values + credentials
- `/careers` — hiring page + online application form (real owner copy)
- `/contact` — in-depth appointment form + NAP + hours + Google map embed
- `/api/appointment` — handles both appointment requests and careers applications (`type: employment`)

Also: "We service all makes & models" brand list (Acura…Volvo) on Services + About; social links (Facebook/Google/Yelp/SureCritic) in header + footer.

## SEO / AI-SEO (fixes every gap from the baseline audit)
- Single H1 per page (old site had multiple)
- Unique title + meta description per page (old homepage had none)
- Individual service pages (old site had one flat list)
- **Schema:** `AutoRepair` LocalBusiness w/ **AggregateRating (4.9 / 1,436)**, FAQPage, per-service Service + BreadcrumbList
- `sitemap.xml`, `robots.txt`, and `llms.txt` (AI-SEO)
- Targets the American Pacific Dr / Henderson 89074 map-pack keywords
- ISR enabled (`revalidate = 86400`) on all content pages

## Performance
- Next/Image optimization on all photos; hero uses `priority`
- Inline SVG icons (no icon library) — small JS bundle
- CSS wordmark logo (sharper + faster than the low-res source logo image)
- Mobile-first; fonts via `next/font` with `display: swap`

---

## ⚠️ PLACEHOLDERS — replace before production
1. **Testimonials** (`src/lib/site.ts` → `testimonials`): representative summaries based on the
   review themes. Swap for real verbatim SureCritic/Google quotes (or wire a live feed).
2. **Owner/team photo** (`/about`): currently a stock mechanic photo. Replace with a real photo of
   Conley Newby / the team / the shopfront.
3. **Specials** (`src/app/specials/page.tsx`): the $39.95 alignment check is from the old site;
   confirm all offer amounts/terms with Conley.
4. **Address suite:** old site sometimes listed "Suite E." Confirm correct NAP and update
   `src/lib/site.ts` if needed.
5. **Appointment email delivery:** the form logs every request server-side and will email via Resend
   when these env vars are set in Vercel:
   - `RESEND_API_KEY` — Resend API key
   - `APPOINTMENT_TO` — destination inbox (defaults to `newb@ymail.com`)
   - `APPOINTMENT_FROM` — verified sender (defaults to `appointments@newbysautomotive.com`)
   Until then, requests are captured in the function logs (no data lost) and the user is told we'll call back.

## Single source of truth
All business data (NAP, hours, services, reviews, FAQs) lives in **`src/lib/site.ts`** — edit there and
it propagates to every page + all JSON-LD schema.

## Go-live checklist (after migration confirmed)
- [ ] Confirm Drive Shops migration complete; obtain DNS access
- [ ] Replace placeholders above
- [ ] Set Resend env vars in Vercel
- [ ] Add custom domain `newbysautomotive.com` in Vercel + point DNS
- [ ] 301-redirect old URLs to new equivalents (preserve rankings)
- [ ] Submit sitemap in Google Search Console; verify GBP NAP matches exactly
