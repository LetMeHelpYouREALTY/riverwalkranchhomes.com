import type { Metadata } from "next";
import Link from "next/link";
import GuidePage from "@/components/sections/GuidePage";
import { pageMetadata } from "@/lib/seo";
import {
  riverwalkGuideLinks,
  riverwalkMarketPage,
  riverwalkRealtorMarket,
} from "@/lib/riverwalk-guide-pages";
import SectionPresence from "@/components/sections/SectionPresence";

const page = riverwalkMarketPage;

export const metadata: Metadata = pageMetadata({
  path: page.path,
  title: page.metaTitle,
  description: page.description,
  keywords: [...page.keywords],
});

export default function RiverwalkMarketPage() {
  return (
    <GuidePage
      eyebrow={page.eyebrow}
      title={page.title}
      lede={page.lede}
      faqs={[...page.faqs]}
    >
      {page.sections.map((section) => (
        <section key={section.heading} className="mx-auto my-16 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900">{section.heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            {section.body}
          </p>
          <SectionPresence />
        </section>
      ))}
      <section className="mx-auto my-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900">Source and next pages</h2>
        <p className="mt-4 text-slate-700">
          Median listing price and median days on the market are quoted from{" "}
          <a
            href={riverwalkRealtorMarket.sourceUrl}
            className="font-semibold text-blue-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {riverwalkRealtorMarket.sourceName}&apos;s Riverwalk Ranch market page
          </a>
          . This site does not publish a price-per-square-foot range for the
          whole community.
        </p>
        <ul className="mt-6 space-y-2">
          {riverwalkGuideLinks
            .filter((link) => link.href !== page.path)
            .map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold text-blue-700 underline">
                  {link.label}
                </Link>
              </li>
            ))}
          <li>
            <Link
              href="/neighborhoods/riverwalk-ranch"
              className="font-semibold text-blue-700 underline"
            >
              Five sections
            </Link>
          </li>
        </ul>
        <SectionPresence />
      </section>
    </GuidePage>
  );
}
