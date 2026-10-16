import MlsDisclaimer from "@/components/shared/MlsDisclaimer";
import { realscout } from "@/lib/contact";
import SectionPresence from "@/components/sections/SectionPresence";

type OfficeListingsWidgetProps = {
  /** Own container. Use when the widget sits outside the page container. */
  bleed?: boolean;
};

const agentId = realscout.agentEncodedId;

/**
 * RealScout office listings, placed directly under the page hero.
 * The module script and divider style load once from the root layout head.
 */
const officeListingsHtml = `<realscout-office-listings agent-encoded-id="${agentId}" sort-order="${realscout.officeListings.sortOrder}" listing-status="${realscout.officeListings.listingStatus}" property-types="${realscout.officeListings.propertyTypes}"></realscout-office-listings>`;

const followingWidgets: { title: string; html: string }[] = [
  {
    title: "Search homes",
    html: `<realscout-simple-search agent-encoded-id="${agentId}"></realscout-simple-search>`,
  },
  {
    title: "Search with price and beds",
    html: `<realscout-advanced-search agent-encoded-id="${agentId}"></realscout-advanced-search>`,
  },
  {
    title: "Dr. Jan Duffy listings",
    html: `<realscout-your-listings agent-encoded-id="${agentId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF,TC"></realscout-your-listings>`,
  },
  {
    title: "What is this home worth",
    html: `<realscout-home-value agent-encoded-id="${agentId}" include-name="true" include-phone="true"></realscout-home-value>`,
  },
];

export default function OfficeListingsWidget({
  bleed = false,
}: OfficeListingsWidgetProps) {
  const widget = (
    <>
      <div dangerouslySetInnerHTML={{ __html: officeListingsHtml }} />
      <MlsDisclaimer className="mt-4" />
      <div className="mt-10 space-y-10">
        {followingWidgets.map((item) => (
          <div key={item.title}>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              {item.title}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: item.html }} />
          </div>
        ))}
      </div>
    </>
  );

  if (bleed) {
    return (
      <section aria-label="Office listings" className="bg-white py-10">
        <div className="container mx-auto px-4">{widget}</div>
        <SectionPresence />
      </section>
    );
  }

  return (
    <section aria-label="Office listings" className="mx-auto mb-16 max-w-7xl">
      {widget}
      <SectionPresence />
    </section>
  );
}
