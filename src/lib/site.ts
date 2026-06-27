// ────────────────────────────────────────────────────────────────────────────
// Single source of truth for Newby's Automotive Center.
// All NAP (name/address/phone) data, hours, services and review stats live here
// so every page + JSON-LD schema stays in sync.
// ────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Newby's Automotive Center",
  shortName: "Newby's Automotive",
  tagline: "Henderson's Most-Reviewed Auto Repair Shop Since 2000",
  owner: "Conley Newby",
  // Positioning hook (per competitor benchmark): the import-specialist shops on
  // American Pacific Dr can't claim "all makes, most-reviewed, since 2000."
  positioning:
    "Henderson's most-reviewed all-makes-and-models repair shop — family-owned and trusted since 2000.",
  // The live domain this will eventually point to. Used for canonical URLs +
  // sitemap. Safe to keep even while on a staging *.vercel.app URL.
  url: "https://www.newbysautomotive.com",
  foundedYear: 2000,

  phone: {
    display: "(702) 897-9667",
    tel: "+17028979667",
  },

  address: {
    street: "1201 American Pacific Dr",
    city: "Henderson",
    state: "NV",
    zip: "89074",
    full: "1201 American Pacific Dr, Henderson, NV 89074",
  },

  geo: { lat: 36.0291, lng: -115.0626 },

  // Google Maps embed + directions
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Newby%27s+Automotive+Center+1201+American+Pacific+Dr+Henderson+NV+89074",
  mapsEmbed:
    "https://www.google.com/maps?q=1201+American+Pacific+Dr+Henderson+NV+89074&output=embed",

  hours: [
    { day: "Monday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Tuesday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Wednesday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Thursday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Friday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Saturday", open: null, close: null },
    { day: "Sunday", open: null, close: null },
  ],
  hoursShort: "Mon–Fri: 8:00 AM – 5:00 PM",

  // Verified review stats — SureCritic (human-verified).
  reviews: {
    rating: 4.9,
    count: 1436,
    fiveStarPct: 95,
    nps: 96,
    sureCriticUrl: "https://www.surecritic.com/reviews/newbys-automotive-center",
    googleUrl: "https://www.google.com/maps/search/Newby%27s+Automotive+Center+Henderson+NV",
    yelpUrl: "https://www.yelp.com/biz/newbys-automotive-center-henderson",
  },

  social: {
    facebook: "https://www.facebook.com/newbysautomotive/",
  },

  // Neighborhoods / ZIPs Newby's serves — the tight Henderson radius is the
  // core local-SEO target.
  serviceArea: [
    "Henderson, NV",
    "Green Valley",
    "Anthem",
    "Whitney Ranch",
    "Seven Hills",
    "Boulder City",
    "Las Vegas",
    "North Las Vegas",
  ],
} as const;

// Trust badges (real affiliations pulled from Newby's existing site)
export const badges = [
  { src: "/badges/badge-ase.webp", alt: "ASE Certified — Automotive Service Excellence", w: 240, h: 88 },
  { src: "/badges/badge-bbb.webp", alt: "Better Business Bureau Accredited", w: 200, h: 88 },
  { src: "/badges/badge-worldpac.webp", alt: "WorldPac OEM Parts Distributor", w: 240, h: 60 },
  { src: "/badges/badge-identifix.webp", alt: "Identifix — Find and Fix Faster", w: 240, h: 60 },
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string; // card blurb
  photo: string;
  photoAlt: string;
  // Long-form, SEO-friendly intro for the service page
  intro: string;
  // Bullet list of what's included / signs you need it
  highlights: string[];
  includes: string[];
  category: string;
};

export const services: Service[] = [
  {
    slug: "brake-repair",
    name: "Brake Repair & Service",
    short: "Pads, rotors, calipers and ABS diagnostics — stop safely with brakes you can trust.",
    photo: "/photos/brake-rotor.webp",
    photoAlt: "Close-up of a vehicle brake rotor and caliper during a brake service",
    category: "Safety & Stopping",
    intro:
      "Your brakes are the single most important safety system on your vehicle. If you hear squealing or grinding, feel a soft or pulsing pedal, or notice your car pulling to one side when you stop, it's time to have them checked. Our ASE-certified technicians inspect the entire system — pads, rotors, calipers, lines and ABS — and give you a straight answer on what actually needs attention.",
    highlights: [
      "Squealing, grinding or vibration when braking",
      "Soft, spongy or low brake pedal",
      "Dashboard ABS or brake warning light",
      "Vehicle pulls to one side when stopping",
    ],
    includes: [
      "Full brake system inspection",
      "Brake pad & rotor replacement",
      "Caliper service & replacement",
      "Brake fluid flush",
      "ABS (anti-lock) diagnostics & repair",
    ],
  },
  {
    slug: "check-engine-diagnostics",
    name: "Check Engine Light & Diagnostics",
    short: "Advanced computer diagnostics to find the real problem — not just guess at it.",
    photo: "/photos/check-engine-dash.webp",
    photoAlt: "Vehicle dashboard with an illuminated check engine warning light",
    category: "Diagnostics",
    intro:
      "A check engine light can mean anything from a loose gas cap to a failing sensor or a serious engine issue. Newby's uses professional-grade scan tools and the Identifix database to pinpoint the actual cause instead of throwing parts at the problem. You get an accurate diagnosis and an honest recommendation before any work begins.",
    highlights: [
      "Check engine or service-engine-soon light is on",
      "Rough idle, stalling or hard starting",
      "Loss of power or poor fuel economy",
      "Failed or upcoming emissions test",
    ],
    includes: [
      "OBD-II computer diagnostics",
      "Drivability troubleshooting",
      "Engine performance check",
      "Sensor & emissions diagnostics",
      "Clear, written repair recommendation",
    ],
  },
  {
    slug: "ac-heating",
    name: "A/C & Heating Repair",
    short: "Beat the Henderson heat — A/C recharge, compressor and full climate system repair.",
    photo: "/photos/ac-gauges.webp",
    photoAlt: "Technician holding A/C manifold gauges while servicing a vehicle air conditioning system",
    category: "Comfort & Climate",
    intro:
      "In the Las Vegas valley, a working A/C system isn't a luxury — it's a necessity. If your air isn't getting cold, smells musty, or your heater won't warm up, our team diagnoses and repairs the entire climate system: refrigerant, compressor, evaporator, blower and controls. We'll get your cabin comfortable again, fast.",
    highlights: [
      "A/C blowing warm or weak air",
      "Strange smells when the A/C runs",
      "Heater not producing heat",
      "Loud noise when climate system is on",
    ],
    includes: [
      "A/C performance check & recharge",
      "Compressor repair & replacement",
      "Evaporator & condenser service",
      "Heating system repair",
      "Cooling-system & climate diagnostics",
    ],
  },
  {
    slug: "oil-change-maintenance",
    name: "Oil Changes & Scheduled Maintenance",
    short: "30/60/90K services and oil changes that keep your warranty intact and your car reliable.",
    photo: "/photos/oil-change.webp",
    photoAlt: "Fresh motor oil being poured during an oil change service",
    category: "Maintenance",
    intro:
      "The cheapest repair is the one you prevent. Staying on top of oil changes and your manufacturer's 30/60/90/120K service schedule is the easiest way to avoid expensive breakdowns and protect your factory warranty. Newby's follows your vehicle's exact maintenance schedule and only recommends what it actually needs.",
    highlights: [
      "Due for a routine oil change",
      "Approaching a 30K / 60K / 90K service interval",
      "Maintenance-required light is on",
      "Want to protect your factory warranty",
    ],
    includes: [
      "Oil & filter changes (conventional & synthetic)",
      "30/60/90/120K mile services",
      "Fluid services & flushes",
      "Filter replacement",
      "Multi-point maintenance inspection",
    ],
  },
  {
    slug: "wheel-alignment",
    name: "Wheel Alignment",
    short: "Precision alignment that stops uneven tire wear and keeps your steering straight.",
    photo: "/photos/wheel-alignment.webp",
    photoAlt: "Wheel alignment machine attached to a vehicle wheel in the shop",
    category: "Tires & Steering",
    intro:
      "If your steering wheel is off-center, your car drifts, or your tires are wearing unevenly, your alignment is likely out. A proper alignment protects your tire investment, improves handling and makes your vehicle safer to drive. Newby's uses precision equipment to bring every angle back to factory spec.",
    highlights: [
      "Vehicle pulls or drifts to one side",
      "Steering wheel off-center when driving straight",
      "Uneven or rapid tire wear",
      "After new tires or suspension work",
    ],
    includes: [
      "Computerized wheel alignment",
      "Front-end alignment check",
      "Tire wear inspection",
      "Steering & suspension angle correction",
    ],
  },
  {
    slug: "suspension-steering",
    name: "Suspension & Steering",
    short: "Shocks, struts, control arms and steering repair for a smooth, controlled ride.",
    photo: "/photos/suspension-arm.webp",
    photoAlt: "Vehicle suspension control arm and components during a chassis service",
    category: "Tires & Steering",
    intro:
      "A worn suspension doesn't just make for a rough ride — it affects braking, handling and tire life. If your car bounces, dips when braking, or you hear clunks over bumps, let us inspect the shocks, struts, bushings and steering components and restore the control your vehicle was built to have.",
    highlights: [
      "Bouncy, rough or unstable ride",
      "Nose-dives when braking",
      "Clunking or knocking over bumps",
      "Loose or wandering steering",
    ],
    includes: [
      "Shocks & struts replacement",
      "Chassis & suspension repair",
      "Control arm & bushing service",
      "Power steering repair",
      "Suspension lifts",
    ],
  },
  {
    slug: "engine-transmission",
    name: "Engine & Transmission",
    short: "From tune-ups to major repairs — keep your drivetrain running strong for years.",
    photo: "/photos/transmission-gears.webp",
    photoAlt: "Detailed view of automotive transmission gears",
    category: "Engine & Drivetrain",
    intro:
      "The engine and transmission are the heart of your vehicle. Whether you need a routine tune-up, a fluid service, or have a more serious drivability concern, our technicians have the experience and equipment to diagnose it correctly and repair it right the first time — backed by nationwide warranty.",
    highlights: [
      "Slipping, hard or delayed shifting",
      "Loss of power or rough running",
      "Leaking fluid or burning smell",
      "Unusual engine noises",
    ],
    includes: [
      "Engine repair & performance checks",
      "Transmission repair & service",
      "Differential repair",
      "Tune-ups & performance upgrades",
      "Fuel injection & fuel system service",
    ],
  },
  {
    slug: "electrical-diagnostics",
    name: "Electrical & Electronic Repair",
    short: "Batteries, alternators, starters and electronics diagnosed and fixed correctly.",
    photo: "/photos/spark-plugs.webp",
    photoAlt: "New spark plugs resting on a vehicle battery during electrical service",
    category: "Electrical",
    intro:
      "Modern vehicles are rolling computers. When something electrical goes wrong — a dead battery, a no-start, flickering lights or a glitchy accessory — it takes the right tools and know-how to trace it. Newby's diagnoses and repairs starting, charging and electronic systems so your vehicle is dependable every time you turn the key.",
    highlights: [
      "Slow crank, no-start or dead battery",
      "Dashboard warning or charging light",
      "Power windows, locks or accessories failing",
      "Dim or flickering lights",
    ],
    includes: [
      "Battery, starter & alternator service",
      "Ignition system repair",
      "Power window, lock & accessory repair",
      "Lighting & bulb replacement",
      "Electronic diagnostics & programming",
    ],
  },
];

export const serviceCategories = Array.from(
  new Set(services.map((s) => s.category)),
);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

// Primary navigation
export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Specials", href: "/specials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// 4-step "How It Works" (required by site-build-standard)
export const process = [
  {
    step: "1",
    title: "Call or Request Online",
    body: "Call us or send a quick appointment request. Tell us what's going on with your vehicle — no pressure, no runaround.",
  },
  {
    step: "2",
    title: "Honest Diagnosis",
    body: "Our ASE-certified techs inspect your vehicle and pinpoint the real problem using professional diagnostic tools.",
  },
  {
    step: "3",
    title: "You Approve the Work",
    body: "We explain exactly what's needed and what it costs — in plain English — before we touch a thing. Your call.",
  },
  {
    step: "4",
    title: "Drive Away Confident",
    body: "We fix it right the first time, backed by nationwide warranty, and get you back on the road.",
  },
] as const;

// FAQs — feed FAQPage schema (required by site-build-standard) and the on-page
// FAQ section. Targets the questions Henderson drivers actually search.
export const faqs = [
  {
    q: "Where is Newby's Automotive located?",
    a: "We're at 1201 American Pacific Dr in Henderson, NV 89074, serving Henderson, Green Valley, Anthem, Seven Hills, Boulder City and the greater Las Vegas valley.",
  },
  {
    q: "Do you work on all makes and models?",
    a: "Yes. Newby's services all makes, models and years — domestic and import, cars and trucks. We're a true one-stop, full-service shop.",
  },
  {
    q: "Are your technicians certified?",
    a: "Absolutely. Our technicians are ASE-certified, and we're NAPA-affiliated, AAA-accredited and BBB-rated. Most work and parts are backed by a nationwide warranty.",
  },
  {
    q: "Do I need an appointment, or can I just call?",
    a: "Calling is the fastest way to get scheduled — (702) 897-9667. You can also send an appointment request through this site and we'll get right back to you. Walk-ins are welcome when the schedule allows.",
  },
  {
    q: "How much will my repair cost?",
    a: "We diagnose the real problem first, then give you a clear, upfront estimate before any work begins. You always approve the cost before we start — no surprises.",
  },
  {
    q: "What are your hours?",
    a: "We're open Monday through Friday, 8:00 AM to 5:00 PM. We're closed weekends.",
  },
] as const;

// ── Customer testimonials ────────────────────────────────────────────────────
// REAL reviews. Named quotes are from Newby's own review carousel; the rest are
// verbatim verified reviews surfaced via SureCritic/Carfax (2026-06-27).
// To expand or keep perfectly current, wire a live SureCritic feed.
export const testimonials = [
  {
    quote:
      "They were able to get my car in right away, were courteous, explained what needed to be done, and had my car done on time.",
    author: "Dan Bladow",
    source: "Verified Review",
  },
  {
    quote:
      "I appreciate how professional and honest Newby's is. They have earned my trust!",
    author: "Verified Customer",
    source: "SureCritic",
  },
  {
    quote:
      "Honest, ethical, straight forward, fair — and they know automotive repairs.",
    author: "Verified Customer",
    source: "SureCritic",
  },
  {
    quote:
      "Always professional service in a timely manner at fair prices.",
    author: "Verified Customer",
    source: "SureCritic",
  },
  {
    quote:
      "The most honest and hardworking mechanics I've seen.",
    author: "Verified Customer",
    source: "SureCritic",
  },
  {
    quote:
      "I so appreciate your honest and forthright attention — I take a lot of security in knowing I can rely upon your assessment.",
    author: "Verified Customer",
    source: "SureCritic",
  },
] as const;
