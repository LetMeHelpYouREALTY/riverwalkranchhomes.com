/**
 * Unique lifestyle H2s per village — named pins, not "sought-after" slogans.
 * Fair Housing: square footage, amenities, named campuses, commute minutes.
 * Dated 2026-09-15.
 */

export type NeighborhoodLifestyleCopy = {
  h2: string;
};

export const neighborhoodLifestyles: Record<string, NeighborhoodLifestyleCopy> =
  {
    "/neighborhoods/summerlin": {
      h2: "How does Downtown Summerlin retail compare to Red Rock trailheads – two west-valley days",
    },
    "/neighborhoods/the-ridges": {
      h2: "How do guard-gated ridge lots compare to Downtown Summerlin – two Ridges days",
    },
    "/neighborhoods/southern-highlands": {
      h2: "How does Southern Highlands Golf Club compare to I-15/Cactus – two south-valley days",
    },
    "/neighborhoods/skye-canyon": {
      h2: "How does Skye Center compare to Floyd Lamb Park – two northwest days",
    },
    "/neighborhoods/centennial-hills": {
      h2: "How does Centennial Hills Park compare to Arbor View High School commute – two northwest days",
    },
    "/neighborhoods/green-valley": {
      h2: "How does The District compare to 35-year street trees – two Green Valley days",
    },
    "/neighborhoods/henderson": {
      h2: "How does Green Valley trees compare to Inspirada rec campus – two Henderson days",
    },
    "/neighborhoods/inspirada": {
      h2: "How does Town Center pools compare to St. Rose/Eastern – two Inspirada days",
    },
    "/neighborhoods/north-las-vegas": {
      h2: "What is the Aliante Rec to Nellis AFB commute over two North Las Vegas days?",
    },
    "/neighborhoods/mountains-edge": {
      h2: "What is the Exploration Peak to I-15/Blue Diamond commute over two southwest days?",
    },
    "/neighborhoods": {
      h2: "West retail loop vs Henderson loop — pick the first afternoon from Suite 101",
    },
  };
