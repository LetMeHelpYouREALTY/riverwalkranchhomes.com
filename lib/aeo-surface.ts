import { nap, ctaPhone, officePhone, hoursSummary } from "@/lib/contact";

/**
 * Explicit allow signals for answer-engine crawlers.
 * A blanket User-agent: * is not treated as an allow by every AI crawler.
 * List aligned with the 2026 AI crawler allowlist used on the Duffy portfolio.
 */
export const AI_CRAWLER_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "cohere-ai",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "meta-externalfetcher",
  "YouBot",
  "Diffbot",
  "CCBot",
  "Bytespider",
] as const;

/** Paths that stay out of every crawler group, including named AI bots. */
export const CRAWLER_DISALLOW = ["/api/", "/admin/", "/monitoring/"] as const;

export function buildLlmsTxt(origin: string, riverwalk: boolean): string {
  const base = origin.replace(/\/$/, "");
  const napBlock = [
    `Agent: ${nap.shortName}, REALTOR®, license ${nap.license}`,
    `Office: ${nap.fullAddress}`,
    `Client phone: ${ctaPhone.display}`,
    `Office phone: ${officePhone.display}`,
    `Email: ${nap.email}`,
    `Hours: ${hoursSummary}`,
  ].join("\n");

  if (!riverwalk) {
    return [
      "# Dr. Jan Duffy",
      "",
      "> Las Vegas Valley real estate with Dr. Jan Duffy. Neighborhood pages name the area, the office, and how to book a showing.",
      "",
      napBlock,
      "",
      "## Pages",
      `- ${base}/`,
      `- ${base}/neighborhoods`,
      `- ${base}/listings`,
      `- ${base}/contact`,
      `- ${base}/buyers`,
      `- ${base}/sellers`,
      `- ${base}/55-plus-communities`,
      "",
      "Live inventory is the RealScout office-listings widget. This file does not quote a listing count.",
      "",
    ].join("\n");
  }

  return [
    "# Riverwalk Ranch Homes",
    "",
    "> Homes for sale and neighborhood facts for Riverwalk Ranch in North Las Vegas, ZIP 89031.",
    "",
    napBlock,
    "",
    "## Direct answers",
    "- Riverwalk Ranch homes for sale are in North Las Vegas, ZIP 89031.",
    "- The master plan was built mainly from 2007 to 2012 and has five sections: Estates, Manor & Estates, Crossing, Cove, and High Noon.",
    "- There is no single published unit count. The working parcel estimate is about 500 to 700 homes.",
    "- High Noon townhomes are at 6111 Towboat St. Crossing HOA dues are about $120 a month. A cited High Noon listing showed $221 a month. Those figures are not a combined total.",
    "- Schools named for some Riverwalk Ranch addresses are Kay Carl Elementary, Anthony Saville Middle, and Shadow Ridge High. Confirm the parcel with Clark County School District.",
    "- The office pin is Suite 101 at 6150 N Decatur Blvd, North Las Vegas, NV 89031. It is not the Towboat gate.",
    "",
    "## Pages",
    `- ${base}/`,
    `- ${base}/neighborhoods/riverwalk-ranch`,
    `- ${base}/neighborhoods/riverwalk-ranch/market`,
    `- ${base}/neighborhoods/riverwalk-ranch/hoa`,
    `- ${base}/neighborhoods/riverwalk-ranch/schools`,
    `- ${base}/guides/riverwalk-ranch-questions`,
    `- ${base}/listings`,
    `- ${base}/contact`,
    "",
    "Live listings are the RealScout office widget on each page. This file does not quote a live inventory count.",
    "",
  ].join("\n");
}
