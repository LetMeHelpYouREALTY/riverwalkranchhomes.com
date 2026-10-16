import type { Metadata } from "next";
import Link from "next/link";
import GuidePage from "@/components/sections/GuidePage";
import { pageMetadata } from "@/lib/seo";
import { ctaPhone, nap } from "@/lib/contact";
import SectionPresence from "@/components/sections/SectionPresence";

export const metadata: Metadata = pageMetadata({
  path: "/service-areas",
  title: "Las Vegas Service Areas | Dr. Jan Duffy REALTOR®",
  description:
    "Dr. Jan Duffy serves Las Vegas, Henderson, Summerlin, and North Las Vegas from 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964.",
  keywords: [
    "Las Vegas realtor service area",
    "Henderson homes",
    "Summerlin homes",
    "North Las Vegas 89031",
    "Dr. Jan Duffy",
  ],
});

const faqs = [
  {
    question: "Where is the office?",
    answer:
      "The office is at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. That address is the Google Business Profile pin. Call (702) 222-1964 to tour. Office line (702) 500-1942.",
  },
  {
    question: "Which cities are on this desk?",
    answer:
      "The service areas include Las Vegas, Henderson, Summerlin, and North Las Vegas. Riverwalk Ranch is in North Las Vegas ZIP 89031.",
  },
  {
    question: "How long is the drive from Riverwalk Ranch to the Strip?",
    answer:
      "Travel time via I-15 is about 20–25 minutes as mapped on October 16, 2026. Downtown Las Vegas is about 15–20 minutes. Craig Ranch Regional Park is about 10–15 minutes. Traffic changes the clock.",
  },
];

const areas = [
  {
    name: "Las Vegas",
    href: "/listings",
    note: "Valley listings, searched live in RealScout, with tours booked from Suite 100.",
  },
  {
    name: "Summerlin",
    href: "/neighborhoods/summerlin",
    note: "West Valley is about 10–15 minutes from 9406 W Lake Mead Blvd.",
  },
  {
    name: "Henderson",
    href: "/neighborhoods/henderson",
    note: "East valley tours compared by address, not by a valley average.",
  },
  {
    name: "North Las Vegas",
    href: "/neighborhoods/north-las-vegas",
    note: "ZIP 89031 includes Riverwalk Ranch",
  },
  {
    name: "Riverwalk Ranch",
    href: "/neighborhoods/riverwalk-ranch",
    note: "Five sections in 89031. Master count is an estimate of 500–700 homes.",
  },
];

export default function ServiceAreasPage() {
  return (
    <GuidePage
      eyebrow="From Suite 100"
      title="Dr. Jan Duffy serves the following areas"
      lede={`${nap.brokerage} shows homes in Las Vegas, Henderson, Summerlin, and North Las Vegas. The office pin does not move.`}
      faqs={faqs}
    >
      <section className="mx-auto my-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900">
          Cities on the tour map
        </h2>
        <ul className="mt-6 space-y-4">
          {areas.map((area) => (
            <li key={area.href} className="border-b border-slate-200 pb-4">
              <Link href={area.href} className="text-lg font-semibold text-blue-800 underline">
                {area.name}
              </Link>
              <p className="mt-1 text-slate-700">{area.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-slate-700">
          Call {ctaPhone.display} before you stack three ZIPs into one afternoon.
        </p>
      <SectionPresence />
      </section>
    </GuidePage>
  );
}
