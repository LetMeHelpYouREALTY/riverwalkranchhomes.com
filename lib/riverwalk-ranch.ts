/**
 * Riverwalk Ranch Homes — North Las Vegas 89031.
 * Unit totals are parcel estimates, not one published master-association figure.
 * Asking ranges are the working figures for this guide as of October 16, 2026.
 * They move when listings change. One MLS example is cited separately.
 */

import { normalizeHostname } from "./contact";

export const RIVERWALK_AS_OF = "October 16, 2026";

export const RIVERWALK_BRAND = "Riverwalk Ranch Homes";

export const RIVERWALK_DESCRIPTION =
  "Riverwalk Ranch Homes in North Las Vegas, ZIP 89031. Five sections, from D.R. Horton single-family plans to High Noon townhomes. Dr. Jan Duffy, REALTOR® S.0197614.LLC. Call (702) 222-1964.";

export const riverwalkKeywords = [
  "Riverwalk Ranch Homes",
  "Riverwalk Ranch North Las Vegas",
  "Riverwalk Ranch 89031",
  "Riverwalk Ranch High Noon",
  "Riverwalk Ranch Crossing",
  "Riverwalk Ranch Estates",
  "homes for sale 89031",
];

const RIVERWALK_HOSTS = new Set([
  "heyberkshire.com",
  "riverwalkranchhomes.com",
]);

/** Public brand is Riverwalk Ranch Homes on these hosts, plus local and Vercel previews. */
export function isRiverwalkHost(hostname?: string | null): boolean {
  const clean = normalizeHostname(hostname ?? "");
  if (
    !clean ||
    clean === "localhost" ||
    clean === "127.0.0.1" ||
    clean === "[::1]" ||
    clean.endsWith(".vercel.app")
  ) {
    return true;
  }
  return RIVERWALK_HOSTS.has(clean);
}

export const riverwalkMasterEstimate = {
  low: 500,
  high: 700,
  label: "500–700 homes",
} as const;

export const riverwalkCommutes = [
  {
    place: "Las Vegas Strip",
    minutes: "20–25 minutes",
    via: "Via I-15",
  },
  {
    place: "Downtown Las Vegas",
    minutes: "15–20 minutes",
    via: "South from 89031",
  },
  {
    place: "Craig Ranch Regional Park",
    minutes: "10–15 minutes",
    via: "North Las Vegas",
  },
] as const;

export type RiverwalkSection = {
  id: string;
  index: string;
  name: string;
  kind: string;
  summary: string;
  facts: string[];
};

export const riverwalkSections: RiverwalkSection[] = [
  {
    id: "estates",
    index: "01",
    name: "Riverwalk Ranch Estates",
    kind: "Single-story single-family",
    summary:
      "D.R. Horton single-story plans, about 2,550 to 3,000 square feet, with 3-car garages.",
    facts: [
      "Single-story single-family homes",
      "Floor plans about 2,550 to 3,000 sq ft",
      "3-car garages",
      "Built by D.R. Horton",
    ],
  },
  {
    id: "manor",
    index: "02",
    name: "Riverwalk Ranch Manor & Estates",
    kind: "Gated single-family",
    summary:
      "Gated mix of single-story and two-story homes. Plans are typically 4 bedrooms, from 1,975 to over 2,800 square feet.",
    facts: [
      "Gated section",
      "Single-story and two-story homes",
      "Typically 4 bedrooms",
      "About 1,975 to 2,800+ sq ft",
      "Asking range generally $489,900 to $649,000",
    ],
  },
  {
    id: "crossing",
    index: "03",
    name: "Riverwalk Ranch Crossing",
    kind: "Gated single-family",
    summary:
      "Gated two-story homes, a community park, a playground, and walking paths. About 110 to 150 homes. HOA dues average about $120 a month.",
    facts: [
      "Gated section",
      "Two-story layouts",
      "Community park, playground, and walking paths",
      "About 110 to 150 homes",
      "HOA dues average about $120 a month",
    ],
  },
  {
    id: "high-noon",
    index: "04",
    name: "Riverwalk Ranch High Noon",
    kind: "Townhomes and condos",
    summary:
      "Multi-level townhomes and condos at 6111 Towboat St, North Las Vegas, NV 89031. About 120 to 180 attached units. Active listings typically ask $295,000 to $330,000.",
    facts: [
      "6111 Towboat St, North Las Vegas, NV 89031",
      "Multi-level townhomes and condos",
      "About 120 to 180 attached units",
      "Active listings typically $295,000 to $330,000",
    ],
  },
  {
    id: "cove",
    index: "05",
    name: "Riverwalk Ranch Cove",
    kind: "Single-family",
    summary:
      "Another D.R. Horton single-family section in the 89031 area. It sits in the remainder of the master plan, outside the Crossing and High Noon counts.",
    facts: [
      "D.R. Horton homes",
      "ZIP 89031",
      "Part of the single-family remainder",
    ],
  },
];

/** One public listing used as a dated proof point, not a section average. */
export const highNoonListingExample = {
  address: "6041 Towboat St, Unit 102, North Las Vegas, NV 89031",
  price: 315000,
  priceLabel: "$315,000",
  listedOn: "June 19, 2026",
  mls: "2793064",
  sqft: 1316,
  beds: 2,
  associationFeeMonthly: 221,
} as const;

export const riverwalkFaqs = [
  {
    question: "How many homes are in Riverwalk Ranch?",
    answer:
      "Riverwalk Ranch is not published as one aggregated unit count. Parcel mapping for this 89031 corridor estimates about 500 to 700 homes across every section. Crossing is about 110 to 150 single-family homes. High Noon is about 120 to 180 attached units. Estates, Manor, and Cove make up the remaining single-family sections.",
  },
  {
    question: "Where is Riverwalk Ranch High Noon?",
    answer:
      "Riverwalk Ranch High Noon is the townhome and condo section at 6111 Towboat St, North Las Vegas, NV 89031. The wider community is in ZIP 89031, near Decatur Boulevard and the 215.",
  },
  {
    question: "What do Riverwalk Ranch homes cost?",
    answer:
      "As of October 16, 2026, Manor & Estates asking prices generally run $489,900 to $649,000. High Noon active listings typically run $295,000 to $330,000. A June 19, 2026 High Noon listing at 6041 Towboat St, Unit 102, asked $315,000 (MLS 2793064). Prices move with new listings. Call (702) 222-1964 for a current comp.",
  },
  {
    question: "What are the HOA dues?",
    answer:
      "Crossing HOA dues average about $120 a month. That figure is not the High Noon dues. The June 19, 2026 listing at 6041 Towboat St, Unit 102, showed association dues of $221 a month. Confirm the section before you budget dues.",
  },
  {
    question: "When was Riverwalk Ranch built?",
    answer:
      "Construction ran mainly from 2007 to 2012. Later infill and additional phases followed. The 6041 Towboat St townhome in High Noon was built in 2010.",
  },
  {
    question: "How long is the drive from Riverwalk Ranch?",
    answer:
      "The Las Vegas Strip is about 20 to 25 minutes via I-15. Downtown Las Vegas is about 15 to 20 minutes. Craig Ranch Regional Park is about 10 to 15 minutes. Times vary with traffic.",
  },
] as const;

export const highNoonMap = {
  embedSrc:
    "https://maps.google.com/maps?q=6111+Towboat+St+North+Las+Vegas+NV+89031&z=15&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=6111+Towboat+St,+North+Las+Vegas,+NV+89031",
} as const;
