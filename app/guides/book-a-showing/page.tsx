import type { Metadata } from "next";
import Link from "next/link";
import GuidePage from "@/components/sections/GuidePage";
import { pageMetadata } from "@/lib/seo";
import { ctaPhone, nap } from "@/lib/contact";
import SectionPresence from "@/components/sections/SectionPresence";

export const metadata: Metadata = pageMetadata({
  path: "/guides/book-a-showing",
  title: "How to Book a Showing in Las Vegas | Dr. Jan Duffy",
  description:
    "Book a Las Vegas home showing with Dr. Jan Duffy. Call (702) 222-1964 or use the showing calendar. Office: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
  keywords: [
    "book a showing Las Vegas",
    "schedule a home tour Las Vegas",
    "Dr. Jan Duffy showing",
  ],
});

const faqs = [
  {
    question: "How do I book a showing?",
    answer:
      "Call or text (702) 222-1964, or use the showing calendar on this page. The calendar is https://calendly.com/drjanduffy/showing. Tours can start at 9406 W Lake Mead Blvd, Suite 100, or at the property.",
  },
  {
    question: "What should I have ready?",
    answer:
      "The address or two ZIPs, and a lender contact if you already have one. Do not email listing keys.",
  },
  {
    question: "Who confirms the time?",
    answer:
      "Dr. Jan Duffy, REALTOR® S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties.",
  },
];

export default function BookShowingGuidePage() {
  return (
    <GuidePage
      eyebrow="Showing guide"
      title="How to book a showing in Las Vegas"
      lede="Use the phone or the showing calendar. Both reach the same desk at Suite 100."
      faqs={faqs}
    >
      <section className="mx-auto my-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900">Three ways to set a time</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-700">
          <li>Call or text {ctaPhone.display}.</li>
          <li>Open the showing calendar lower on this page and pick an open slot.</li>
          <li>
            Start from a listing on{" "}
            <Link href="/listings" className="font-semibold text-blue-700 underline">
              homes for sale
            </Link>{" "}
            and ask for that address.
          </li>
        </ol>
        <p className="mt-4 text-slate-700">
          {nap.shortName} meets clients at {nap.fullAddress} when the tour starts
          there. Say so when you book if you would rather meet at the house.
        </p>
      <SectionPresence />
      </section>
    </GuidePage>
  );
}
