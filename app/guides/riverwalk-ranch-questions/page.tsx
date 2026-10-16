import type { Metadata } from "next";
import Link from "next/link";
import GuidePage from "@/components/sections/GuidePage";
import { pageMetadata } from "@/lib/seo";
import { ctaPhone } from "@/lib/contact";
import { RIVERWALK_AS_OF } from "@/lib/riverwalk-ranch";
import SectionPresence from "@/components/sections/SectionPresence";

export const metadata: Metadata = pageMetadata({
  path: "/guides/riverwalk-ranch-questions",
  title: "Riverwalk Ranch Questions | North Las Vegas 89031",
  description:
    "Answers on Riverwalk Ranch in North Las Vegas ZIP 89031. Section types, the 500–700 home estimate, and drive times. Dr. Jan Duffy. Call (702) 222-1964.",
  keywords: [
    "Riverwalk Ranch questions",
    "Riverwalk Ranch 89031",
    "North Las Vegas homes",
    "Dr. Jan Duffy",
  ],
});

const faqs = [
  {
    question: "How many homes are in Riverwalk Ranch?",
    answer:
      "There is no single published master-association total. Parcel mapping used for this guide puts the community near 500 to 700 homes across all sections.",
  },
  {
    question: "What are the sections?",
    answer:
      "Riverwalk Ranch Estates, Manor & Estates, Crossing, High Noon, and Cove. Crossing is gated, with a park, playground, and paths, and an HOA near $120 a month. High Noon is attached homes at 6111 Towboat St. Asking ranges and one MLS example are on the section guide, dated October 16, 2026.",
  },
  {
    question: "How far is Riverwalk Ranch from the Strip?",
    answer:
      "About 20–25 minutes via I-15. Downtown Las Vegas is about 15–20 minutes. Craig Ranch Regional Park is about 10–15 minutes. Those times are drive estimates, not a promise at rush hour.",
  },
];

export default function RiverwalkQuestionsPage() {
  return (
    <GuidePage
      eyebrow={`North Las Vegas 89031 · ${RIVERWALK_AS_OF}`}
      title="Riverwalk Ranch questions, answered"
      lede="Short answers for ZIP 89031. The full section guide has the square footage, asking ranges, and the one cited listing."
      faqs={faqs}
    >
      <section className="mx-auto my-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900">
          Read the section guide next
        </h2>
        <p className="mt-4 text-slate-700">
          Prices and dues move when listings change. The working figures for
          this site are dated {RIVERWALK_AS_OF}. Call {ctaPhone.display} to
          confirm a specific address before you tour.
        </p>
        <p className="mt-4">
          <Link
            href="/neighborhoods/riverwalk-ranch"
            className="font-semibold text-blue-700 underline"
          >
            Five sections in Riverwalk Ranch
          </Link>
        </p>
      <SectionPresence />
      </section>
    </GuidePage>
  );
}
