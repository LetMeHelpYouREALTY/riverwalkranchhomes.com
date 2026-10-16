import type { Metadata } from "next";
import Link from "next/link";
import GuidePage from "@/components/sections/GuidePage";
import { pageMetadata } from "@/lib/seo";
import {
  riverwalkGuideLinks,
  riverwalkHoaPage,
} from "@/lib/riverwalk-guide-pages";
import SectionPresence from "@/components/sections/SectionPresence";

const page = riverwalkHoaPage;

export const metadata: Metadata = pageMetadata({
  path: page.path,
  title: page.metaTitle,
  description: page.description,
  keywords: [...page.keywords],
});

export default function RiverwalkHoaPage() {
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
        <h2 className="text-3xl font-bold text-slate-900">Where the dues figures come from</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          {page.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                className="font-semibold text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
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
