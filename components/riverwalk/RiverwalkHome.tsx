import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";
import SchemaScript from "@/components/SchemaScript";
import MlsDisclaimer from "@/components/shared/MlsDisclaimer";
import { generateFAQSchema } from "@/lib/schema";
import {
  businessHours,
  ctaPhone,
  googleReviewsUrl,
  maps,
  nap,
  officePhone,
} from "@/lib/contact";
import { photos } from "@/lib/media";
import { riverwalkGuideLinks } from "@/lib/riverwalk-guide-pages";
import {
  RIVERWALK_AS_OF,
  RIVERWALK_BRAND,
  highNoonListingExample,
  highNoonMap,
  riverwalkCommutes,
  riverwalkFaqs,
  riverwalkMasterEstimate,
  riverwalkSections,
} from "@/lib/riverwalk-ranch";
import { riverwalkDisplay } from "@/components/riverwalk/font";
import OfficeListingsWidget from "@/components/realscout/OfficeListingsWidget";
import SectionPresence from "@/components/sections/SectionPresence";

type RiverwalkHomeProps = {
  heading?: string;
  lede?: string;
  showGuideLink?: boolean;
};

const corridorPhoto = {
  src: photos.aliante.src,
  width: photos.aliante.width,
  height: photos.aliante.height,
  alt: "Riverwalk Ranch is located in the 89031 corridor of North Las Vegas.",
};

export default function RiverwalkHome({
  heading = "Riverwalk Ranch Homes in North Las Vegas 89031",
  lede = "The North Las Vegas master plan in ZIP 89031 includes five sections. No single published unit count.",
  showGuideLink = true,
}: RiverwalkHomeProps) {
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Riverwalk Ranch",
    description: lede,
    address: {
      "@type": "PostalAddress",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89031",
      addressCountry: "US",
    },
    containedInPlace: {
      "@type": "City",
      name: "North Las Vegas",
    },
  };

  const highNoonSchema = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: "Riverwalk Ranch High Noon",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6111 Towboat St",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89031",
      addressCountry: "US",
    },
    url: highNoonMap.directionsUrl,
  };

  return (
    <main id="main-content" className="bg-[#f3eee6] text-[#1c1917]">
      <SchemaScript
        schemas={[
          placeSchema,
          highNoonSchema,
          generateFAQSchema([...riverwalkFaqs]),
        ]}
        id="riverwalk-schema"
      />

      <section className="pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs tracking-[0.22em] uppercase text-[#6b5344] mb-6">
                North Las Vegas · 89031
              </p>
              <h1
                className={`${riverwalkDisplay.className} text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance`}
              >
                {heading}
              </h1>
              <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-[#3f3832]">
                {lede}
              </p>
              <p className="mt-4 max-w-[38rem] text-lg leading-relaxed text-[#3f3832]">
                Parcel mapping puts the master association near{" "}
                <span className="tabular-nums">
                  {riverwalkMasterEstimate.low.toLocaleString("en-US")} to{" "}
                  {riverwalkMasterEstimate.high.toLocaleString("en-US")}
                </span>{" "}
                homes. Construction ran mainly from 2007 to 2012.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4">
                <a
                  href={ctaPhone.href}
                  className="inline-flex items-center justify-center min-h-[48px] bg-[#3f2e1e] px-6 text-[#f3eee6] text-base font-semibold hover:bg-[#2a1f14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3f2e1e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3eee6]"
                >
                  <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                  Call {ctaPhone.display}
                </a>
                <a
                  href="#sections"
                  className="text-sm underline underline-offset-4 text-[#3f2e1e] hover:text-[#1c1917]"
                >
                  Read the five sections
                </a>
              </div>
              <p className="mt-6 text-sm text-[#6b5344] max-w-[38rem]">
                {nap.shortName}, REALTOR® {nap.license}.{" "}
                {nap.fullAddress}.
              </p>
            </div>
            <figure className="lg:col-span-5">
              <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden bg-[#e7dfd4]">
                <Image
                  src={photos.homeHero.src}
                  alt={photos.homeHero.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm text-[#6b5344]">
                <span>Las Vegas Valley</span>
                <span className="tabular-nums">
                  {riverwalkMasterEstimate.label} estimated
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      <SectionPresence />
      </section>
      <OfficeListingsWidget bleed />

      <section
        aria-labelledby="commute-heading"
        className="border-t border-[#ddd4c8] bg-[#f7f3ec]"
      >
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            <h2
              id="commute-heading"
              className={`${riverwalkDisplay.className} lg:col-span-5 text-4xl leading-none`}
            >
              Drive times from 89031
            </h2>
            <p className="lg:col-span-6 lg:col-start-7 text-[#3f3832] leading-relaxed max-w-[40rem]">
              The corridor sits near Decatur Boulevard and the 215. Tropical Parkway is a main approach. These ranges move with traffic.
            </p>
          </div>
          <div className="border-t border-[#1c1917]">
            {riverwalkCommutes.map((row) => (
              <div
                key={row.place}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-5 border-b border-[#ddd4c8]"
              >
                <div className="md:col-span-5 font-medium">{row.place}</div>
                <div className="md:col-span-3 tabular-nums">{row.minutes}</div>
                <div className="md:col-span-4 text-[#6b5344]">{row.via}</div>
              </div>
            ))}
          </div>
        </div>
      <SectionPresence />
      </section>

      <section
        id="sections"
        aria-labelledby="sections-heading"
        className="scroll-mt-32 bg-[#1c1917] text-[#f3eee6]"
      >
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <h2
              id="sections-heading"
              className={`${riverwalkDisplay.className} lg:col-span-7 text-4xl md:text-5xl leading-none`}
            >
              Five sections, not one total
            </h2>
            <p className="lg:col-span-5 text-[#d9cfc3] leading-relaxed">
              Gated and non-gated sub-associations share the master plan. Crossing and High Noon have section estimates. The single-family remainder does not have its own published count.
            </p>
          </div>
          <ol className="border-t border-[#3f3832]">
            {riverwalkSections.map((section) => (
              <li
                key={section.id}
                id={section.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-b border-[#3f3832] scroll-mt-32"
              >
                <div
                  className={`${riverwalkDisplay.className} lg:col-span-2 text-4xl text-[#c4a574]`}
                >
                  {section.index}
                </div>
                <div className="lg:col-span-5">
                  <h3
                    className={`${riverwalkDisplay.className} text-3xl leading-tight`}
                  >
                    {section.name}
                  </h3>
                  <p className="mt-2 text-xs tracking-[0.16em] uppercase text-[#c4a574]">
                    {section.kind}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <p className="leading-relaxed text-[#e7dfd4]">
                    {section.summary}
                  </p>
                  <ul className="mt-4 space-y-1 text-sm text-[#d9cfc3]">
                    {section.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-[#d9cfc3] max-w-3xl">
            Asking ranges on this page are the working figures as of{" "}
            {RIVERWALK_AS_OF}. One High Noon example: {highNoonListingExample.address}{" "}
            was listed {highNoonListingExample.listedOn} at{" "}
            {highNoonListingExample.priceLabel} (MLS {highNoonListingExample.mls}
            ), {highNoonListingExample.beds} bedrooms,{" "}
            {highNoonListingExample.sqft.toLocaleString("en-US")} sq ft. That
            listing showed association dues of $
            {highNoonListingExample.associationFeeMonthly} a month. It is not
            the Crossing dues, and it is not a section average.
          </p>
        </div>
      <SectionPresence />
      </section>

      <section className="bg-[#f3eee6]" aria-labelledby="corridor-heading">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <figure className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#e7dfd4]">
                <Image
                  src={corridorPhoto.src}
                  alt={corridorPhoto.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-[#6b5344]">
                This is the North Las Vegas corridor. This is not a photo of a specific Riverwalk listing.
              </figcaption>
            </figure>
            <div className="lg:col-span-5 lg:col-start-8">
              <h2
                id="corridor-heading"
                className={`${riverwalkDisplay.className} text-4xl leading-none`}
              >
                High Noon on Towboat Street
              </h2>
              <p className="mt-5 leading-relaxed text-[#3f3832]">
                The townhome section is at 6111 Towboat St, North Las Vegas, NV 89031. Estates plans run about 2,550 to 3,000 square feet with 3-car garages. Manor & Estates is the gated 4-bedroom mix, from 1,975 to over 2,800 square feet.
              </p>
              <p className="mt-4 leading-relaxed text-[#3f3832]">
                Cove is the other D.R. Horton single-family section in 89031. Call for which gate you are actually touring.
              </p>
              <a
                href={highNoonMap.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm underline underline-offset-4 text-[#3f2e1e]"
              >
                Directions to 6111 Towboat St
              </a>
            </div>
          </div>
          <div className="mt-10 overflow-hidden border border-[#ddd4c8]">
            <iframe
              title="Map to Riverwalk Ranch High Noon at 6111 Towboat St, North Las Vegas, NV 89031"
              src={highNoonMap.embedSrc}
              className="w-full h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      <SectionPresence />
      </section>

      <section className="border-t border-[#ddd4c8]" aria-labelledby="search-heading">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-5">
              <h2
                id="search-heading"
                className={`${riverwalkDisplay.className} text-4xl leading-none`}
              >
                How can I search current listings?
              </h2>
              <p className="mt-4 text-[#3f3832] leading-relaxed">
                The search box reads the live feed. The ranges above are a guide, not a lock on today's ask.
              </p>
            </div>
            <div className="lg:col-span-7">
              <RealScoutSearch />
            </div>
          </div>
        </div>
      <SectionPresence />
      </section>

      <section
        className="border-t border-[#ddd4c8] bg-[#f7f3ec]"
        aria-labelledby="advisor-heading"
      >
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2
                id="advisor-heading"
                className={`${riverwalkDisplay.className} text-4xl leading-none`}
              >
                {RIVERWALK_BRAND}, with {nap.shortName}
              </h2>
              <p className="mt-5 leading-relaxed text-[#3f3832]">
                License {nap.license}. The office pin is Suite
                104 at 6150 N Decatur Blvd, not the Towboat gate.
              </p>
              <a
                href={ctaPhone.href}
                className="inline-flex items-center justify-center min-h-[48px] mt-8 bg-[#3f2e1e] px-6 text-[#f3eee6] font-semibold hover:bg-[#2a1f14]"
              >
                <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                Call {ctaPhone.display}
              </a>
              <div className="mt-6 flex flex-col gap-2 text-sm">
                <a
                  href={maps.directionsUrl}
                  className="underline underline-offset-4 w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions to the office
                </a>
                <a
                  href={googleReviewsUrl}
                  className="underline underline-offset-4 w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Google Reviews
                </a>
                <a href={nap.emailHref} className="underline underline-offset-4 w-fit">
                  {nap.email}
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <address className="not-italic text-[#1c1917]">
                <span className="block font-semibold">{nap.shortName}</span>
                <span className="block mt-2">{nap.street}</span>
                <span className="block">
                  {nap.city}, {nap.state} {nap.zip}
                </span>
              </address>
              <p className="mt-4 text-sm text-[#3f3832]">
                Office {officePhone.display}. Client line {ctaPhone.display}.
              </p>
              <ul className="mt-6 space-y-1 text-sm tabular-nums">
                {businessHours.map((row) => (
                  <li key={row.day} className="flex justify-between gap-6 max-w-sm">
                    <span>{row.day}</span>
                    <span className="text-[#6b5344]">{row.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 overflow-hidden border border-[#ddd4c8]">
                <iframe
                  title={`Map to the office at ${nap.fullAddress}`}
                  src={maps.embedSrc}
                  className="w-full h-56"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      <SectionPresence />
      </section>

      <section className="border-t border-[#ddd4c8]" aria-labelledby="guides-heading">
        <div className="container mx-auto px-4 py-16 md:py-20 max-w-3xl">
          <h2
            id="guides-heading"
            className={`${riverwalkDisplay.className} text-4xl leading-none mb-6`}
          >
            Market, dues, and schools
          </h2>
          <ul className="space-y-3 text-lg">
            {riverwalkGuideLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="underline underline-offset-4">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <SectionPresence />
      </section>

      <section className="border-t border-[#ddd4c8]" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
          <h2
            id="faq-heading"
            className={`${riverwalkDisplay.className} text-4xl leading-none mb-8`}
          >
            Questions on the sections
          </h2>
          <div className="divide-y divide-[#ddd4c8] border-y border-[#ddd4c8]">
            {riverwalkFaqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer font-medium text-lg list-none flex justify-between gap-4">
                  {faq.question}
                  <span aria-hidden="true" className="text-[#6b5344] group-open:hidden">
                    +
                  </span>
                  <span aria-hidden="true" className="text-[#6b5344] hidden group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-[#3f3832]">{faq.answer}</p>
              </details>
            ))}
          </div>
          <MlsDisclaimer className="mt-10" />
          <p className="mt-4 text-xs text-[#6b5344]">
            Guide figures dated {RIVERWALK_AS_OF}. {RIVERWALK_BRAND}.
          </p>
          {showGuideLink ? (
            <p className="mt-6">
              <Link
                href="/neighborhoods/riverwalk-ranch"
                className="text-sm underline underline-offset-4"
              >
                Open the section guide
              </Link>
            </p>
          ) : null}
        </div>
      <SectionPresence />
      </section>
    </main>
  );
}
