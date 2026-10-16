import MlsDisclaimer from "@/components/shared/MlsDisclaimer";
import { realscout } from "@/lib/contact";
import SectionPresence from "@/components/sections/SectionPresence";

type OfficeListingsWidgetProps = {
  /** Own container. Use when the widget sits outside the page container. */
  bleed?: boolean;
};

/**
 * RealScout office listings, placed under the page hero.
 * The web component script loads once from the root layout.
 */
export default function OfficeListingsWidget({
  bleed = false,
}: OfficeListingsWidgetProps) {
  const widget = (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `<realscout-office-listings agent-encoded-id="${realscout.agentEncodedId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF,TC"></realscout-office-listings>`,
        }}
      />
      <MlsDisclaimer className="mt-4" />
    </>
  );

  if (bleed) {
    return (
      <section aria-label="Office listings" className="py-10">
        <div className="container mx-auto px-4">{widget}</div>
      <SectionPresence />
      </section>
    );
  }

  return (
    <section aria-label="Office listings" className="mb-16 max-w-7xl mx-auto">
      {widget}
    <SectionPresence />
    </section>
  );
}
