import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms that govern your use of the ${site.name} website, including appointment requests, site content, and specials.`,
  alternates: { canonical: "/terms" },
};

const EFFECTIVE = "July 5, 2026";

const h2 = "mt-10 text-2xl font-extrabold text-ink";
const p = "mt-4 leading-relaxed text-ink/85";
const ul = "mt-4 ml-5 list-disc space-y-2 leading-relaxed text-ink/85";

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        intro={`The terms that govern your use of the ${site.shortName} website.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Terms of Use", href: "/terms" },
        ]}
      />

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold text-steel">Effective date: {EFFECTIVE}</p>

          <p className={p}>
            Welcome to the website of {site.name} (&ldquo;Newby&rsquo;s,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using this website you agree to these Terms
            of Use. If you do not agree, please do not use the site. Our{" "}
            <Link href="/privacy-policy" className="font-semibold text-brand-red hover:underline">
              Privacy Policy
            </Link>{" "}
            explains how we handle your information and is part of these terms.
          </p>

          <h2 className={h2}>Website content is general information</h2>
          <p className={p}>
            Articles, car care tips, and service descriptions on this site are provided for general
            informational purposes only. They are not a diagnosis of your specific vehicle and are
            not a substitute for an inspection by a qualified technician. Always consult your
            owner&rsquo;s manual and have concerns evaluated in person before making repair
            decisions.
          </p>

          <h2 className={h2}>Appointment requests</h2>
          <ul className={ul}>
            <li>
              Submitting an appointment request through this site is a <strong>request only</strong>{" "}
              — it is not a confirmed booking. Your appointment is confirmed when a member of our
              team contacts you and agrees on a date and time.
            </li>
            <li>Requested dates and times are subject to availability.</li>
            <li>
              Estimates discussed by phone or online are preliminary; final pricing is provided and
              approved by you before any work begins.
            </li>
          </ul>

          <h2 className={h2}>Specials &amp; offers</h2>
          <p className={p}>
            Online specials and coupons cannot be combined, may exclude some vehicles, and may
            change or end without notice. Mention the offer when scheduling; the terms listed with
            each offer apply.
          </p>

          <h2 className={h2}>Acceptable use</h2>
          <p className={p}>
            You agree not to misuse this site — including submitting false or misleading requests,
            attempting to interfere with the site&rsquo;s operation or security, scraping content at
            scale, or using our forms to send spam or unlawful content.
          </p>

          <h2 className={h2}>Intellectual property</h2>
          <p className={p}>
            The content of this site — text, photos, graphics, and the Newby&rsquo;s name and logo —
            belongs to {site.name} or its licensors and is protected by law. Third-party trademarks
            (including vehicle manufacturer names) belong to their respective owners and are used
            only to identify the vehicles we service; no affiliation or endorsement is implied.
          </p>

          <h2 className={h2}>Third-party links</h2>
          <p className={p}>
            This site links to third-party websites (such as review platforms and social media). We
            are not responsible for their content or privacy practices.
          </p>

          <h2 className={h2}>Disclaimers &amp; limitation of liability</h2>
          <p className={p}>
            This website is provided &ldquo;as is&rdquo; without warranties of any kind regarding
            the site itself. To the fullest extent permitted by law, {site.name} is not liable for
            damages arising from your use of this website. Nothing in these terms limits or changes
            the warranties that apply to actual repair work performed at our shop, which are
            provided in writing with your invoice, or any rights you have under applicable law.
          </p>

          <h2 className={h2}>Governing law</h2>
          <p className={p}>
            These terms are governed by the laws of the State of Nevada. Any disputes arising from
            use of this website will be handled in the state or federal courts located in Clark
            County, Nevada.
          </p>

          <h2 className={h2}>Changes to these terms</h2>
          <p className={p}>
            We may update these terms from time to time. The current version will always be posted
            on this page with its effective date. Continued use of the site after changes means you
            accept the updated terms.
          </p>

          <h2 className={h2}>Contact us</h2>
          <p className={p}>
            {site.name}
            <br />
            {site.address.full}
            <br />
            <a href={`tel:${site.phone.tel}`} className="font-semibold text-brand-red hover:underline">
              {site.phone.display}
            </a>{" "}
            · Mon–Fri 8:00 AM – 5:00 PM
          </p>
        </div>
      </section>
    </>
  );
}
