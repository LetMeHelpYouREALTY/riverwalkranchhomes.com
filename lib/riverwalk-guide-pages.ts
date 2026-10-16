/**
 * Deep pages for the Riverwalk Ranch guide.
 * Market median is the Realtor.com North Las Vegas figure, not a section average
 * and not the same-named community in Florida.
 * Crossing dues of about $120 are that section only.
 */

import { RIVERWALK_AS_OF, highNoonListingExample } from "./riverwalk-ranch";

export const riverwalkRealtorMarket = {
  sourceName: "Realtor.com",
  sourceUrl:
    "https://www.realtor.com/local/market/nevada/north-las-vegas/riverwalk-ranch",
  medianListingPriceLabel: "$505,000",
  medianDaysOnMarket: 62,
  daysOnMarketYearOverYear: "29.17%",
} as const;

export const riverwalkSchools = [
  {
    name: "Kay Carl Elementary School",
    level: "Elementary",
  },
  {
    name: "Anthony Saville Middle School",
    level: "Middle",
  },
  {
    name: "Shadow Ridge High School",
    level: "High",
  },
] as const;

export const riverwalkGuideLinks = [
  {
    href: "/neighborhoods/riverwalk-ranch/market",
    label: "Current market",
  },
  {
    href: "/neighborhoods/riverwalk-ranch/hoa",
    label: "HOA fees and amenities",
  },
  {
    href: "/neighborhoods/riverwalk-ranch/schools",
    label: "Schools for these addresses",
  },
] as const;

const market = riverwalkRealtorMarket;

export const riverwalkMarketPage = {
  path: "/neighborhoods/riverwalk-ranch/market",
  eyebrow: "North Las Vegas 89031",
  title: "Current real estate market in Riverwalk Ranch",
  metaTitle: "Riverwalk Ranch North Las Vegas Market | Homes for Sale",
  description: `${market.sourceName} lists a ${market.medianListingPriceLabel} median listing price and a ${market.medianDaysOnMarket}-day median on the market for Riverwalk Ranch in North Las Vegas. Section ranges on this site are dated ${RIVERWALK_AS_OF}. Call (702) 222-1964.`,
  keywords: [
    "Riverwalk Ranch North Las Vegas homes for sale",
    "Riverwalk Ranch Las Vegas real estate",
    "homes for sale in Riverwalk Ranch NV",
    "Riverwalk Ranch 89031",
  ],
  lede: `${market.sourceName}'s Riverwalk Ranch page for North Las Vegas lists a median listing price of ${market.medianListingPriceLabel} and a median of ${market.medianDaysOnMarket} days on the market. That days-on-market figure is up ${market.daysOnMarketYearOverYear} from a year earlier. The listings under the heading are the live feed. This is ZIP 89031, not a same-named community in another state.`,
  sections: [
    {
      heading: "Median listing price",
      body: `${market.sourceName} publishes ${market.medianListingPriceLabel} as the median listing price for Riverwalk Ranch in North Las Vegas. That is one neighborhood median. It is not the asking range for a section. On this guide, dated ${RIVERWALK_AS_OF}, Manor & Estates asking prices run $489,900 to $649,000. High Noon listings on this guide typically run $295,000 to $330,000. One High Noon example, ${highNoonListingExample.address}, was listed ${highNoonListingExample.listedOn} at ${highNoonListingExample.priceLabel} (MLS ${highNoonListingExample.mls}).`,
    },
    {
      heading: "Days on the market",
      body: `The same ${market.sourceName} page lists a median of ${market.medianDaysOnMarket} days on the market, up ${market.daysOnMarketYearOverYear} year over year. A neighborhood median is not the time one address has been for sale. Read the live listing for the home you want to tour.`,
    },
    {
      heading: "What the sections are",
      body: "Construction ran mainly from 2007 to 2012. Estates are single-story plans of about 2,550 to 3,000 square feet with 3-car garages. Manor & Estates is gated and mixes single-story and two-story plans, often with 4 bedrooms, from 1,975 to over 2,800 square feet. Crossing is a gated two-story section of about 110 to 150 homes. High Noon is townhomes and condos at 6111 Towboat St, about 120 to 180 attached units. Cove is another D.R. Horton single-family section in 89031.",
    },
  ],
  faqs: [
    {
      question: "What is the median listing price in Riverwalk Ranch?",
      answer: `${market.sourceName} lists a median listing price of ${market.medianListingPriceLabel} for Riverwalk Ranch in North Las Vegas. Section asking ranges on this guide are dated ${RIVERWALK_AS_OF} and are not that median.`,
    },
    {
      question: "How long do Riverwalk Ranch homes stay on the market?",
      answer: `${market.sourceName} lists a median of ${market.medianDaysOnMarket} days on the market for Riverwalk Ranch in North Las Vegas, up ${market.daysOnMarketYearOverYear} year over year.`,
    },
  ],
} as const;

export const riverwalkHoaPage = {
  path: "/neighborhoods/riverwalk-ranch/hoa",
  eyebrow: "North Las Vegas 89031",
  title: "How much are Riverwalk Ranch HOA fees?",
  metaTitle: "Riverwalk Ranch HOA Fees | Crossing and High Noon",
  description: `Crossing HOA dues average about $120 a month. That is the Crossing figure, not High Noon. A ${highNoonListingExample.listedOn} High Noon listing showed $${highNoonListingExample.associationFeeMonthly} a month. Call (702) 222-1964.`,
  keywords: [
    "Riverwalk Ranch HOA fees",
    "Riverwalk Ranch Crossing HOA",
    "Riverwalk Ranch High Noon HOA",
    "Riverwalk Ranch 89031",
  ],
  lede: `Crossing HOA dues average about $120 a month. That is the Crossing association. It is not a combined master-and-sub total, and it is not the High Noon dues. The ${highNoonListingExample.listedOn} listing at ${highNoonListingExample.address} showed association dues of $${highNoonListingExample.associationFeeMonthly} a month.`,
  sections: [
    {
      heading: "Riverwalk Ranch Crossing",
      body: "Crossing is a gated two-story section of about 110 to 150 homes, with a park, a playground, and walking paths. The Nevada HOA directory lists Riverwalk Ranch Crossing fees at $120 per month for gate operations, common-area maintenance, park and trail upkeep, and management services.",
    },
    {
      heading: "Riverwalk Ranch High Noon",
      body: `High Noon is the townhome and condo section at 6111 Towboat St, North Las Vegas, NV 89031. The ${highNoonListingExample.listedOn} listing at ${highNoonListingExample.address} showed $${highNoonListingExample.associationFeeMonthly} a month in association dues. The High Noon association directory describes fees that support pool upkeep, gates, landscaping, and common insurance. Confirm the section on the resale certificate before you budget dues.`,
    },
    {
      heading: "Which sections are gated",
      body: "Crossing and Manor & Estates are the gated single-family sections in this guide. Estates are single-story single-family homes. Cove is a separate D.R. Horton single-family section. High Noon's association is described as a gated portion of the larger community. Ask which gate you are touring.",
    },
  ],
  faqs: [
    {
      question: "How much are Riverwalk Ranch HOA fees?",
      answer:
        "Crossing dues average about $120 a month. That figure is not the High Noon dues. The June 19, 2026 listing at 6041 Towboat St, Unit 102, showed $221 a month.",
    },
    {
      question: "Is all of Riverwalk Ranch gated?",
      answer:
        "No. Crossing and Manor & Estates are gated single-family sections. High Noon is described as a gated townhome section at 6111 Towboat St. Estates and Cove are separate single-family sections.",
    },
  ],
  sources: [
    {
      label: "Riverwalk Ranch Crossing Homeowners Association",
      url: "https://nv-hoa.com/nvhoa_list.php?mastertable=nvtitle&masterkey1=E0379052006-1",
    },
    {
      label: "Riverwalk Ranch High Noon Homeowners Association",
      url: "https://nv-hoa.com/nvhoa_list.php?masterkey1=E0378962006-9&mastertable=nvtitle",
    },
  ],
} as const;

export const riverwalkSchoolsPage = {
  path: "/neighborhoods/riverwalk-ranch/schools",
  eyebrow: "North Las Vegas 89031",
  title: "Schools named for Riverwalk Ranch addresses",
  metaTitle: "Schools near Riverwalk Ranch | North Las Vegas 89031",
  description:
    "Listing sites assign Kay Carl Elementary, Anthony Saville Middle, and Shadow Ridge High to Riverwalk Ranch addresses in North Las Vegas 89031. Confirm the parcel with Clark County School District. Call (702) 222-1964.",
  keywords: [
    "schools near Riverwalk Ranch North Las Vegas",
    "Kay Carl Elementary",
    "Anthony Saville Middle School",
    "Shadow Ridge High School",
    "Riverwalk Ranch 89031",
  ],
  lede: "Listing sites assign Kay Carl Elementary School, Anthony Saville Middle School, and Shadow Ridge High School to Riverwalk Ranch addresses in ZIP 89031, including 6041 Riverwalk Falls St, 6109 Riverwalk Falls St, and 4604 Sea Dream Ave. A High Noon subdivision page names the same three schools for that section. Confirm the parcel with the Clark County School District. A zone can change by street.",
  sections: [
    {
      heading: "Kay Carl Elementary School",
      body: "Named as the elementary school for 6041 Riverwalk Falls St, 6109 Riverwalk Falls St, and 4604 Sea Dream Ave.",
    },
    {
      heading: "Anthony Saville Middle School",
      body: "Named as the middle school for those same Riverwalk Ranch addresses. Listing sites also write the name as Saville Anthony.",
    },
    {
      heading: "Shadow Ridge High School",
      body: "Named as the high school for those same Riverwalk Ranch addresses.",
    },
  ],
  faqs: [
    {
      question: "What schools are named for Riverwalk Ranch?",
      answer:
        "Listing sites name Kay Carl Elementary School, Anthony Saville Middle School, and Shadow Ridge High School for Riverwalk Ranch addresses in 89031, including Riverwalk Falls Street and 4604 Sea Dream Ave. Confirm the address with the Clark County School District.",
    },
  ],
  sources: [
    {
      label: "6041 Riverwalk Falls St school assignment",
      url: "https://www.zillow.com/b/6041-riverwalk-falls-st-north-las-vegas-nv-9MCq3h/",
    },
    {
      label: "6109 Riverwalk Falls St nearby schools",
      url: "https://www.homes.com/property/6109-riverwalk-falls-st-north-las-vegas-nv/qxkn2w0nrjy7x/",
    },
    {
      label: "4604 Sea Dream Ave school zone",
      url: "https://www.ezhomesearch.com/propertydetails/us/nv/north-las-vegas/4604-sea-dream-avenue-89031/2825479/",
    },
  ],
} as const;
