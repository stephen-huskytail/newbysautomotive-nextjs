import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your personal information when you visit our website or request an appointment.`,
  alternates: { canonical: "/privacy-policy" },
};

const EFFECTIVE = "July 5, 2026";

const h2 = "mt-10 text-2xl font-extrabold text-ink";
const p = "mt-4 leading-relaxed text-ink/85";
const ul = "mt-4 ml-5 list-disc space-y-2 leading-relaxed text-ink/85";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        intro={`How ${site.name} collects, uses, and protects your information.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold text-steel">Effective date: {EFFECTIVE}</p>

          <p className={p}>
            {site.name} (&ldquo;Newby&rsquo;s,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) operates the website at {site.url.replace("https://", "")} and the
            auto repair shop at {site.address.full}. This Privacy Policy explains what information
            we collect through this website, how we use it, and the choices you have. We keep it
            simple: we collect only what we need to schedule your service and run our shop, and we
            do not sell your personal information.
          </p>

          <h2 className={h2}>Information we collect</h2>
          <ul className={ul}>
            <li>
              <strong>Information you give us.</strong> When you request an appointment, apply for a
              job, or contact us, we collect what you submit — typically your name, phone number,
              email address, vehicle details, requested dates, and the message you write.
            </li>
            <li>
              <strong>Basic usage data.</strong> We use privacy-focused website analytics (Vercel
              Analytics) to understand aggregate site traffic — pages visited, approximate region,
              browser and device type. This data is anonymized and is not used to identify you, and
              it does not rely on advertising cookies.
            </li>
          </ul>

          <h2 className={h2}>How we use your information</h2>
          <ul className={ul}>
            <li>To respond to your appointment request and confirm a date and time.</li>
            <li>To communicate with you about your vehicle and the work you approve.</li>
            <li>To evaluate employment applications you submit.</li>
            <li>To operate, maintain, and improve this website.</li>
          </ul>
          <p className={p}>
            We do <strong>not</strong> sell, rent, or trade your personal information, and we do not
            use it for third-party advertising.
          </p>

          <h2 className={h2}>How your information is shared</h2>
          <p className={p}>
            We share information only with service providers that help us run the website and shop,
            and only as needed to do so:
          </p>
          <ul className={ul}>
            <li>
              <strong>Email delivery</strong> — form submissions are delivered to our staff inbox
              through a transactional email provider.
            </li>
            <li>
              <strong>Website hosting and analytics</strong> — this site is hosted on Vercel, which
              processes standard server logs and anonymized analytics.
            </li>
            <li>
              <strong>Embedded maps</strong> — our contact page embeds Google Maps; loading the map
              is subject to{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-red hover:underline"
              >
                Google&rsquo;s privacy policy
              </a>
              .
            </li>
            <li>
              <strong>Legal requirements</strong> — we may disclose information if required by law
              or to protect our rights, customers, or staff.
            </li>
          </ul>

          <h2 className={h2}>Data retention &amp; security</h2>
          <p className={p}>
            Appointment requests and correspondence are kept only as long as needed for scheduling,
            service records, and legal or accounting requirements. This website is served entirely
            over HTTPS, form submissions are transmitted encrypted, and we limit access to your
            information to staff who need it to serve you.
          </p>

          <h2 className={h2}>Cookies</h2>
          <p className={p}>
            This site does not use advertising or cross-site tracking cookies. Third-party content
            you choose to load (such as the embedded Google map) may set its own cookies under that
            provider&rsquo;s policy.
          </p>

          <h2 className={h2}>Your choices &amp; rights</h2>
          <ul className={ul}>
            <li>You can contact us at any time to ask what information we hold about you.</li>
            <li>You can ask us to correct or delete your information, subject to records we are required to keep.</li>
            <li>You can opt out of non-essential communications by telling any staff member or replying to a message.</li>
          </ul>
          <p className={p}>
            Nevada residents: we do not sell covered information as defined by Nevada law (NRS
            603A). If you have questions about your rights, contact us using the details below.
          </p>

          <h2 className={h2}>Children&rsquo;s privacy</h2>
          <p className={p}>
            This website is intended for general audiences and is not directed to children under 13.
            We do not knowingly collect personal information from children.
          </p>

          <h2 className={h2}>Changes to this policy</h2>
          <p className={p}>
            If we update this policy, we will post the new version on this page with a new effective
            date. Material changes will be noted prominently.
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
          <p className={p}>
            See also our <Link href="/terms" className="font-semibold text-brand-red hover:underline">Terms of Use</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
