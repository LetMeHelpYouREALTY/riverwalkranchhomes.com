import type { Metadata } from "next";
import Link from "next/link";
import GuidePage from "@/components/sections/GuidePage";
import { pageMetadata } from "@/lib/seo";
import { ctaPhone, nap } from "@/lib/contact";
import SectionPresence from "@/components/sections/SectionPresence";

export const metadata: Metadata = pageMetadata({
  path: "/private-client",
  title: "Private Client Real Estate Las Vegas | Dr. Jan Duffy",
  description:
    "Private client representation in Las Vegas, Henderson, and Summerlin with Dr. Jan Duffy, REALTOR® S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964.",
  keywords: [
    "private client realtor Las Vegas",
    "luxury real estate agent Las Vegas",
    "Dr. Jan Duffy",
    "Berkshire Hathaway HomeServices Nevada Properties",
  ],
});

const faqs = [
  {
    question: "Who is the private client contact?",
    answer:
      "Dr. Jan Duffy, REALTOR®, license S.0197614.LLC, at Berkshire Hathaway HomeServices Nevada Properties. Call or text (702) 222-1964. The office is 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
  },
  {
    question: "What does a private client appointment cover?",
    answer:
      "A scheduled showing, a written offer plan, and one agent for the file. Live MLS search stays in RealScout. The calendar on this page is the showing schedule.",
  },
  {
    question: "Which areas does this desk cover?",
    answer:
      "Las Vegas, Henderson, Summerlin, and North Las Vegas, including Riverwalk Ranch in ZIP 89031. See the service areas page for the list.",
  },
];

export default function PrivateClientPage() {
  return (
    <GuidePage
      eyebrow="Las Vegas · Henderson · Summerlin"
      title="Private client real estate with Dr. Jan Duffy"
      lede="One agent, one office pin, and a showing calendar. Berkshire Hathaway HomeServices Nevada Properties at Suite 100."
      faqs={faqs}
    >
      <section className="mx-auto my-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900">
          What the appointment is for
        </h2>
        <p className="mt-4 text-slate-700">
          Buyers use the time to set a tour route and a price band. Sellers
          use it to review a listing plan for a specific address. {nap.shortName}{" "}
          writes the next step before you leave Suite 100. Call {ctaPhone.display}.
        </p>
        <p className="mt-4 text-slate-700">
          Public listing search is on{" "}
          <Link href="/listings" className="font-semibold text-blue-700 underline">
            Las Vegas homes for sale
          </Link>
          . Riverwalk Ranch is on{" "}
          <Link
            href="/neighborhoods/riverwalk-ranch"
            className="font-semibold text-blue-700 underline"
          >
            the 89031 section guide
          </Link>
          .
        </p>
      <SectionPresence />
      </section>
      <section className="mx-auto my-16 max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900">
          How a file stays with one agent
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-700">
          <li>Call {ctaPhone.display} or book the showing calendar.</li>
          <li>Name the address, the ZIP, or two neighborhoods.</li>
          <li>Bring a lender contact if you already have one.</li>
          <li>Leave with the next date, not a stack of unsorted links.</li>
        </ol>
      <SectionPresence />
      </section>
    </GuidePage>
  );
}
