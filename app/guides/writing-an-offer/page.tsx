import type { Metadata } from "next";
import Link from "next/link";
import GuidePage from "@/components/sections/GuidePage";
import { pageMetadata } from "@/lib/seo";
import { ctaPhone, nap } from "@/lib/contact";
import SectionPresence from "@/components/sections/SectionPresence";

export const metadata: Metadata = pageMetadata({
  path: "/guides/writing-an-offer",
  title: "Writing an Offer on a Las Vegas Home | Dr. Jan Duffy",
  description:
    "A written offer in Las Vegas starts with Dr. Jan Duffy. Call (702) 222-1964. Office: 6150 N Decatur Blvd, Suite 101. License S.0197614.LLC.",
  keywords: [
    "write an offer Las Vegas",
    "Las Vegas home offer process",
    "Dr. Jan Duffy buyer agent",
  ],
});

const faqs = [
  {
    question: "Where is the offer written?",
    answer:
      "You can meet Dr. Jan Duffy at 6150 N Decatur Blvd, Suite 101, North Las Vegas, NV 89031 or schedule a call. Call (702) 222-1964.",
  },
  {
    question: "What comes before the offer?",
    answer:
      "A showing of the address, a price you can support, and a lender contact if you are financing. This page does not quote contract deadlines. Those dates are the ones written into the offer you sign.",
  },
  {
    question: "Who is the brokerage?",
    answer:
      "The brokerage name is in the footer. License S.0197614.LLC.",
  },
];

export default function WritingAnOfferPage() {
  return (
    <GuidePage
      eyebrow="Offer sequence"
      title="Writing an offer on a Las Vegas home"
      lede="The sequence is the showing, the written offer, the seller's response, the inspections named in that contract, then closing. Day counts are whatever the signed offer says."
      faqs={faqs}
    >
      <section className="mx-auto my-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900">
          The order of the file
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-700">
          <li>Tour the address. Book it from the calendar or call {ctaPhone.display}.</li>
          <li>Bring the lender contact if you already have one.</li>
          <li>{nap.shortName} writes the offer for that property, not a template price.</li>
          <li>The seller accepts, counters, or declines.</li>
          <li>Inspections and closing follow the dates in the signed offer.</li>
        </ol>
        <p className="mt-4 text-slate-700">
          Buyer representation is explained at Suite 101. Start with{" "}
          <Link href="/buyers" className="font-semibold text-blue-700 underline">
            the Las Vegas buyer guide
          </Link>
          .
        </p>
      <SectionPresence />
      </section>
    </GuidePage>
  );
}
