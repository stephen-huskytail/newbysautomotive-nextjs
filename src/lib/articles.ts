// Blog / Car Care Tips content.
// The old site's /blog had ZERO published posts; the real, owned content lived on
// its tips pages. These articles are built from that genuine content (lightly
// edited for clarity) so nothing of value is lost when the old site goes offline.
// Hero images reuse the relevant local service photos.

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMins: number;
  photo: string;
  photoAlt: string;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "summer-driving-tips-henderson-heat",
    title: "Summer Driving Tips for Henderson's Heat",
    excerpt:
      "Las Vegas-valley summers are brutal on batteries, cooling systems and tires. Here's how to avoid a breakdown when the temperature climbs.",
    date: "2026-06-01",
    readMins: 4,
    photo: "/photos/ac-gauges.webp",
    photoAlt: "A/C and cooling system service for summer heat",
    body: [
      { type: "p", text: "Summer can be tough on a vehicle, especially during the high temperatures we see in Henderson and across the Las Vegas Valley. Heat can destroy batteries and put extra stress on the cooling system and tires. A few simple checks during the summer go a long way toward avoiding breakdowns." },
      { type: "h", text: "The life of your battery" },
      { type: "p", text: "Excessive heat and overcharging shorten the life of a battery. Heat causes battery fluid to evaporate, which damages the internal structure. To get the most life out of your battery, have the electrical system checked to make sure it's charging at the correct rate. Keep the top of the battery clean — dirt can become a conductor that drains power, and corrosion on the terminals inhibits current flow." },
      { type: "h", text: "The cooling system" },
      { type: "p", text: "The cooling system works harder in hot weather to keep your engine from overheating. The coolant-and-distilled-water mixture should be 50:50, and as a rule of thumb coolant should be changed annually on most vehicles. A pressure test, thermostat test, cooling-fan test and a visual inspection for leaks should be done yearly. Hoses and drive belts should be checked for cracks, bulges or frayed edges. (And never open a hot radiator cap.)" },
      { type: "h", text: "Tire care" },
      { type: "p", text: "High temperatures put added stress on tires. Check tire condition and inflation pressure monthly, and have the tires rotated every 6,000 miles. Summer heat raises the pressure inside a tire, so always check pressure when the tires are cold. Your owner's manual lists the recommended pressure for your vehicle." },
      { type: "p", text: "We check all of these things every time we service your vehicle. If you'd like us to take a look before a road trip, just stop by or call (702) 897-9667." },
    ],
  },
  {
    slug: "winter-weather-driving-tips",
    title: "Winter Weather Driving Tips",
    excerpt:
      "Cold snaps and foggy windows catch a lot of drivers off guard. A few basics keep you safe and your visibility clear.",
    date: "2026-01-15",
    readMins: 3,
    photo: "/photos/check-engine-dash.webp",
    photoAlt: "Dashboard checks for winter driving readiness",
    body: [
      { type: "p", text: "When winter arrives, a few simple steps make it easier to handle whatever the weather throws at us." },
      { type: "h", text: "Keep your windows clear" },
      { type: "p", text: "When using your defroster, make sure you're pulling in fresh air from outside the vehicle. Ever see a car driving down the road with all the windows fogged up? That happens when the system recirculates inside air and can't get rid of the moisture. Running the A/C in defrost mode helps too, because the A/C removes moisture from the air — with the heat on, you'll stay warm and keep the glass clear. Many newer vehicles do this automatically in defrost mode." },
      { type: "p", text: "Your wipers are key to clear visibility. Make sure you have washer fluid rated for cold weather, and keep an ice scraper handy." },
      { type: "h", text: "Tires and traction" },
      { type: "p", text: "Keep your tires properly inflated and make sure you have good tread — both help with traction and control. Newer vehicles have anti-lock brakes and traction control that help in bad weather, but those systems work far better when your tires have a good grip on the road." },
      { type: "p", text: "We check these items every time we service your vehicle. Stop by and we'll be glad to look them over for you." },
    ],
  },
  {
    slug: "do-you-have-to-use-the-dealership",
    title: "Do You Have to Use the Dealership for Service?",
    excerpt:
      "Short answer: no. You can use an independent shop and keep your factory warranty fully intact. Here's how.",
    date: "2026-03-10",
    readMins: 2,
    photo: "/photos/oil-change.webp",
    photoAlt: "Independent shop oil change service",
    body: [
      { type: "p", text: "One of the most common questions we hear: \"Do I have to go to the dealership for repairs or scheduled maintenance to keep my warranty?\"" },
      { type: "p", text: "No. In fact, federal law requires the manufacturer to honor your warranty as long as you have proper documentation that the appropriate maintenance was performed. You're free to have any legitimate mechanic do the work." },
      { type: "h", text: "Just keep your records" },
      { type: "ul", items: [
        "Hold onto your service records and receipts",
        "If you have a maintenance schedule book, have the mechanic sign it",
        "Stay on top of your manufacturer's recommended intervals",
      ] },
      { type: "p", text: "That's it. You get dealership-quality work at an independent shop's prices — without risking your warranty. Dealerships are often overpriced and a hassle; at Newby's you get honest service and the same protection. Call (702) 897-9667 and we'll help you build a maintenance plan that keeps your warranty solid." },
    ],
  },
  {
    slug: "how-often-should-you-change-your-oil",
    title: "How Often Should You Change Your Oil?",
    excerpt:
      "The old \"every 3,000 miles\" rule doesn't apply to most modern cars. Here's how to find the right interval for yours.",
    date: "2026-04-05",
    readMins: 2,
    photo: "/photos/oil-change.webp",
    photoAlt: "Fresh motor oil being poured during an oil change",
    body: [
      { type: "p", text: "Oil change intervals depend on your specific vehicle and how you drive it. Many modern vehicles need an oil change every 5,000 to 7,500 miles — well beyond the old 3,000-mile rule of thumb." },
      { type: "p", text: "At Newby's Automotive, we check your manufacturer's guidelines along with your real-world driving conditions to determine the best schedule for your engine. Stop-and-go driving, towing, and our desert heat can all shorten the ideal interval." },
      { type: "p", text: "Staying on schedule with oil changes, filter replacements and fluid checks is the single easiest way to prevent breakdowns and keep your vehicle running efficiently — and it protects your factory warranty. Call (702) 897-9667 to get on the schedule." },
    ],
  },
  {
    slug: "how-to-trust-an-auto-repair-shop",
    title: "How to Tell If You Can Trust an Auto Repair Shop",
    excerpt:
      "Trust comes down to transparency. Here are the things an honest shop always does.",
    date: "2026-05-20",
    readMins: 2,
    photo: "/photos/mechanic-clipboard.webp",
    photoAlt: "A technician explaining a repair to a customer",
    body: [
      { type: "p", text: "Picking a repair shop you can trust shouldn't feel like a gamble. Trust comes from transparency — and a good shop shows it the same way every time." },
      { type: "h", text: "What an honest shop always does" },
      { type: "ul", items: [
        "Provides written estimates before any work begins",
        "Explains repairs in clear, simple language so you understand what's needed",
        "Uses quality parts from reliable manufacturers",
        "Shows you the issue whenever possible before starting repairs",
        "Stands behind the work with a parts-and-labor warranty",
      ] },
      { type: "p", text: "These commitments are exactly why drivers throughout Henderson, Las Vegas and Boulder City have trusted Newby's Automotive since 2000 — and why we've earned 1,400+ verified reviews at 4.9 stars. If anything doesn't seem right after a repair, we make it right. Your safety and satisfaction come first." },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
