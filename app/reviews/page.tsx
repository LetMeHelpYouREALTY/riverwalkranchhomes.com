import type { Metadata } from "next";
import GuidePage from "@/components/sections/GuidePage";
import { pageMetadata } from "@/lib/seo";
import { googleReviewsUrl, nap, ctaPhone } from "@/lib/contact";
import SectionPresence from "@/components/sections/SectionPresence";

export const metadata: Metadata = pageMetadata({
  path: "/reviews",
  title: "Google Reviews | Dr. Jan Duffy Las Vegas REALTOR®",
  description:
    "Read Google reviews for Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties, 6150 N Decatur Blvd, Suite 101, Las Vegas. Call (702) 222-1964.",
  keywords: [
    "Dr. Jan Duffy reviews",
    "Berkshire Hathaway HomeServices Nevada Properties reviews.",
    "Las Vegas realtor reviews",
  ],
});

const faqs = [
  {
    question: "Where are the reviews?",
    answer:
      "The reviews are on Google under Dr. Jan Duffy at Dr. Jan Duffy. This page links to that profile and does not reprint review text.",
  },
  {
    question: "How do I ask a question before hiring?",
    answer:
      "Call (702) 222-1964 or book a showing. The office is 6150 N Decatur Blvd, Suite 101, North Las Vegas, NV 89031. License S.0197614.LLC.",
  },
];

export default function ReviewsPage() {
  return (
    <GuidePage
      eyebrow="Google Business Profile"
      title="Reviews for Dr. Jan Duffy"
      lede="Review text lives on Google, tied to the same name, address, and office phone as this site."
      faqs={faqs}
    >
      <section className="mx-auto my-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900">
          Read the Google profile
        </h2>
        <p className="mt-4 text-slate-700">
          {nap.shortName}. {nap.fullAddress}. Search that name on Google, or open
          the reviews link. Call {ctaPhone.display} if you want a showing
          instead of a form.
        </p>
        <a
          href={googleReviewsUrl}
          className="mt-6 inline-flex min-h-12 items-center bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700"
        >
          View Google Reviews
        </a>
      <SectionPresence />
      </section>
    </GuidePage>
  );
}
