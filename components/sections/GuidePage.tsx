import Image from "next/image";
import Link from "next/link";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import OfficeListingsWidget from "@/components/realscout/OfficeListingsWidget";
import SchemaScript from "@/components/SchemaScript";
import { generateFAQSchema, type FAQItem } from "@/lib/schema";
import {
  businessHours,
  ctaPhone,
  googleReviewsUrl,
  hoursSummary,
  maps,
  nap,
  officePhone,
} from "@/lib/contact";
import { photos } from "@/lib/media";
import SectionPresence from "@/components/sections/SectionPresence";

type GuidePageProps = {
  eyebrow: string;
  title: string;
  lede: string;
  faqs: FAQItem[];
  children: React.ReactNode;
};

export default function GuidePage({
  eyebrow,
  title,
  lede,
  faqs,
  children,
}: GuidePageProps) {
  return (
    <main id="main-content" className="pb-16">
      <SchemaScript schema={generateFAQSchema(faqs)} id="guide-faq" />
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
                {eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-slate-200">{lede}</p>
              <a
                href={ctaPhone.href}
                className="mt-8 inline-flex min-h-12 items-center bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700"
              >
                Call {ctaPhone.display}
              </a>
            </div>
            <figure className="lg:col-span-4">
              <Image
                src={photos.portrait.src}
                alt={photos.portrait.alt}
                width={photos.portrait.width}
                height={photos.portrait.height}
                priority
                className="mx-auto w-full max-w-xs rounded-full"
              />
              <figcaption className="mt-4 text-center text-sm text-slate-300">
                {nap.shortName} · {nap.license}
              </figcaption>
            </figure>
          </div>
        </div>
      <SectionPresence />
      </section>

      <OfficeListingsWidget bleed />

      <div className="container mx-auto px-4">
        {children}

        <section className="mx-auto my-16 max-w-3xl" aria-labelledby="guide-faq-heading">
          <h2 id="guide-faq-heading" className="text-3xl font-bold text-slate-900">
            Direct answers
          </h2>
          <dl className="mt-8 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-slate-700">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        <SectionPresence />
        </section>

        <section className="mx-auto my-16 max-w-4xl" aria-labelledby="guide-book-heading">
          <h2 id="guide-book-heading" className="text-3xl font-bold text-slate-900">
            Book a showing
          </h2>
          <p className="mt-3 text-slate-600">
            The calendar is Dr. Jan Duffy&apos;s showing schedule. Call{" "}
            {ctaPhone.display} if you need a time that is not listed.
          </p>
          <div className="mt-6">
            <CalendlyWidget />
          </div>
        <SectionPresence />
        </section>

        <section className="mx-auto my-16 max-w-3xl" aria-labelledby="guide-office-heading">
          <h2 id="guide-office-heading" className="text-3xl font-bold text-slate-900">
            Office
          </h2>
          <p className="mt-3 text-slate-700">
            {nap.name}. {nap.fullAddress}. Client line {ctaPhone.display}.
            Office line {officePhone.display}. {hoursSummary}.
          </p>
          <ul className="mt-4 space-y-1 text-sm text-slate-600">
            {businessHours.map((row) => (
              <li key={row.day} className="flex justify-between gap-6">
                <span>{row.day}</span>
                <span>{row.label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <a href={ctaPhone.href} className="text-blue-700 underline">
              Call
            </a>
            <a href={maps.directionsUrl} className="text-blue-700 underline">
              Directions
            </a>
            <a href={googleReviewsUrl} className="text-blue-700 underline">
              View Google Reviews
            </a>
            <Link href="/contact" className="text-blue-700 underline">
              Contact
            </Link>
          </div>
        <SectionPresence />
        </section>
      </div>
    </main>
  );
}
