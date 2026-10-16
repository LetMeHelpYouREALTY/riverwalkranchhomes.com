import type { Metadata } from "next";
import GuidePage from "@/components/sections/GuidePage";
import { pageMetadata } from "@/lib/seo";
import { nap, ctaPhone, officePhone } from "@/lib/contact";
import SectionPresence from "@/components/sections/SectionPresence";

export const metadata: Metadata = pageMetadata({
  path: "/credentials",
  title: "License and Brokerage | Dr. Jan Duffy S.0197614.LLC",
  description:
    "Dr. Jan Duffy, Nevada real estate license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties, 9406 W Lake Mead Blvd, Suite 100, Las Vegas. Call (702) 222-1964.",
  keywords: [
    "Dr. Jan Duffy license",
    "S.0197614.LLC",
    "Berkshire Hathaway HomeServices Nevada Properties",
    "Las Vegas REALTOR",
  ],
});

const faqs = [
  {
    question: "What is the license number?",
    answer:
      "S.0197614.LLC. The licensee is Dr. Jan Duffy. The brokerage is Berkshire Hathaway HomeServices Nevada Properties.",
  },
  {
    question: "Where do I verify a Nevada real estate license?",
    answer:
      "Use the Nevada Real Estate Division at https://red.nv.gov/ and search the license number S.0197614.LLC. This website is not the state database.",
  },
  {
    question: "Which phone is the client line?",
    answer:
      "Call or text (702) 222-1964 for showings. (702) 500-1942 is the office and Google Business Profile line.",
  },
];

export default function CredentialsPage() {
  return (
    <GuidePage
      eyebrow="Nevada license"
      title="Credentials for Dr. Jan Duffy"
      lede="License, brokerage, and the office address in one place so the Google Business Profile and this site name the same person."
      faqs={faqs}
    >
      <section className="mx-auto my-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900">On the card</h2>
        <dl className="mt-6 space-y-4 text-slate-700">
          <div>
            <dt className="font-semibold text-slate-900">Agent</dt>
            <dd>{nap.shortName}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">License</dt>
            <dd>{nap.license}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Brokerage</dt>
            <dd>{nap.brokerage}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Office</dt>
            <dd>{nap.fullAddress}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Client line</dt>
            <dd>{ctaPhone.display}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Office line</dt>
            <dd>{officePhone.display}</dd>
          </div>
        </dl>
        <p className="mt-6 text-slate-700">
          Confirm the license on the Nevada Real Estate Division site,{" "}
          <a href="https://red.nv.gov/" className="font-semibold text-blue-700 underline">
            red.nv.gov
          </a>
          .
        </p>
      <SectionPresence />
      </section>
    </GuidePage>
  );
}
