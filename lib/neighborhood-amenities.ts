/**
 * Unique amenity interiors per neighborhood path.
 * Named retail, parks, and hospitals — not a swapped "Shopping, Dining &
 * Healthcare" template. Fair Housing: square footage of parks, named
 * campuses already covered elsewhere, commute minutes. Dated 2026-09-15.
 */

export type NeighborhoodAmenityPin = {
  name: string;
  note: string;
};

export type NeighborhoodAmenityCopy = {
  h3: string;
  body: string;
  pins: [
    NeighborhoodAmenityPin,
    NeighborhoodAmenityPin,
    NeighborhoodAmenityPin,
  ];
};

export const neighborhoodAmenities: Record<string, NeighborhoodAmenityCopy> = {
  "/neighborhoods": {
    h3: "Retail options near Suite 101: Downtown Summerlin and The District",
    body: "Do not pick a ZIP from a card grid. We time one west retail loop and one Henderson loop so you compare parking, store mix, and drive minutes — not a slogan.",
    pins: [
      {
        name: "Downtown Summerlin",
        note: "20–25 minutes from 6150 N Decatur Blvd. Apple, Nordstrom, and the movie house on the same west loop as The Trails.",
      },
      {
        name: "The District at Green Valley Ranch",
        note: "35–45 minutes via I-215 east. Outdoor shops and GVR on the Henderson afternoon, not the same day as Downtown Summerlin.",
      },
      {
        name: "Aliante retail options",
        note: "North Las Vegas stop; pair with Craig Road jobs; contact (702) 222-1964",
      },
    ],
  },
  "/neighborhoods/summerlin": {
    h3: "Downtown Summerlin, Boca Park, and Tivoli in one west retail loop",
    body: "We sequence retail on the same afternoon as The Trails so you are not recrossing the valley for groceries. Named places, not a generic shopping FAQ.",
    pins: [
      {
        name: "Downtown Summerlin",
        note: "125+ stores on the Howard Hughes town center. 20–25 minutes from Suite 101. We park once and walk Apple to the cinema.",
      },
      {
        name: "Boca Park",
        note: "Trader Joe's and Whole Foods on West Charleston. Often the second stop after Downtown Summerlin on the same west loop.",
      },
      {
        name: "Tivoli Village",
        note: "Outdoor shops on the same west-valley clock. Red Rock Casino is optional if the brief includes dining, not a third ZIP. Call (702) 222-1964.",
      },
    ],
  },
  "/neighborhoods/the-ridges": {
    h3: "Bear's Best and Downtown Summerlin retail areas",
    body: "Gate codes stay off group texts. We confirm HOA vendor lists before we add a retail stop after a Ridges showing.",
    pins: [
      {
        name: "Bear's Best Golf Club",
        note: "Inside the Ridges loop. Jack Nicklaus tribute holes. We time this before any public-mall stop.",
      },
      {
        name: "Downtown Summerlin",
        note: "High-end retail after the gate. Same west-valley clock as Suite 101 — 15–20 minutes from The Ridges streets.",
      },
      {
        name: "Henderson Executive Airport",
        note: "Private-aviation pin only if the brief includes it. Not a default tour stop. Call (702) 222-1964.",
      },
    ],
  },
  "/neighborhoods/southern-highlands": {
    h3: "Clubhouse, Town Square, and Harry Reid Airport",
    body: "Southern Highlands sits on I-15 south. We do not mix this with a Summerlin retail day. Harry Reid International is the airport name.",
    pins: [
      {
        name: "Southern Highlands Golf Club",
        note: "Robert Trent Jones Jr. course with 35,000 sq ft clubhouse, centerpiece of 2,200-acre plat",
      },
      {
        name: "Town Square Las Vegas",
        note: "About 10 minutes north on Las Vegas Blvd. Whole Foods, Apple, cinema — not a Downtown Summerlin clone.",
      },
      {
        name: "Harry Reid International (LAS)",
        note: "Typically 15–25 minutes depending on I-15. Confirm the week you tour. Call (702) 222-1964.",
      },
    ],
  },
  "/neighborhoods/skye-canyon": {
    h3: "Skye Center, Floyd Lamb, then Centennial Hills Hospital",
    body: "Northwest afternoon: amenity campus first, 680-acre park second, hospital third. Do not add Downtown Summerlin on the same clock.",
    pins: [
      {
        name: "Skye Center",
        note: "15-acre amenity campus: resort pool, lap pool, fitness, tennis and pickleball. Registration and HOA packet at Suite 101 first if you are walking builder models.",
      },
      {
        name: "Floyd Lamb Park",
        note: "About 680 acres adjacent. Trails and lakes. We walk a loop after Skye Center so you measure shade vs new-construction streets.",
      },
      {
        name: "Centennial Hills Hospital",
        note: "Northwest ER pin on the same US-95 corridor. Call (702) 222-1964 to sequence the drive.",
      },
    ],
  },
  "/neighborhoods/centennial-hills": {
    h3: "Centennial Hills Park, the hospital, then Durango retail",
    body: "Mature northwest streets. We compare this to Skye Canyon new rows on a different afternoon so trees vs new rec campuses are obvious.",
    pins: [
      {
        name: "Centennial Hills Park",
        note: "About 120 acres: fields, skate park, dog park. Measure it the same day as mountain-view streets, not from a listing photo.",
      },
      {
        name: "Centennial Hills Hospital",
        note: "Full-service hospital and ER on the US-95 corridor. Suite 101 is a separate west-valley start — we do not pretend it is next door.",
      },
      {
        name: "Retail options at Centennial Center",
        note: "Target, Costco, and theatres near the Durango/215 cluster. Call (702) 222-1964",
      },
    ],
  },
  "/neighborhoods/green-valley": {
    h3: "Retail at The District, Whitney Mesa, and Galleria in Henderson",
    body: "35-year-old street trees plus The District. We do not run Downtown Summerlin on the same day.",
    pins: [
      {
        name: "The District at Green Valley Ranch",
        note: "Outdoor shops, GVR, and cinema within 35–45 minutes from Suite 101 via I-215 east",
      },
      {
        name: "Whitney Mesa Recreation Area",
        note: "Trails and a dog park with McCullough views. Walk it after The District so the tree canopy vs new rec campuses is clear.",
      },
      {
        name: "Galleria at Sunset",
        note: "Enclosed mall on the same Henderson clock. Call (702) 222-1964.",
      },
    ],
  },
  "/neighborhoods/henderson": {
    h3: "Water Street, St. Rose Siena, and Galleria locations",
    body: "Henderson is 35–45 minutes from Suite 101. We pick two villages plus one civic pin so you are not listing every mall.",
    pins: [
      {
        name: "Water Street District",
        note: "Downtown Henderson civic and dining row. Pair with Green Valley or Inspirada, not both, on the first east day.",
      },
      {
        name: "St. Rose Dominican — Siena",
        note: "Hospital pin on the Henderson clock. San Martin and Rose de Lima are other campuses — we name the one nearest the listing street.",
      },
      {
        name: "Galleria at Sunset",
        note: "Macy's/Dillard's mall. The District is a separate Green Valley stop. Call (702) 222-1964.",
      },
    ],
  },
  "/neighborhoods/inspirada": {
    h3: "Town Center pools vs Cadence — one south-Henderson rec afternoon",
    body: "Inspirada rec campuses are the point of the drive. We do not add The District and Downtown Summerlin on the same day.",
    pins: [
      {
        name: "Inspirada Town Center",
        note: "Resort pool, slides, cabanas, splash pad. Walk it before any builder model if you have not registered Dr. Jan.",
      },
      {
        name: "Trail loop inside the 2,000 acres",
        note: "10+ miles of paths connecting parks and courts. Measure shade vs new stucco, not a brochure.",
      },
      {
        name: "St. Rose Dominican — Siena",
        note: "Hospital on the Henderson clock. Call (702) 222-1964.",
      },
    ],
  },
  "/neighborhoods/north-las-vegas": {
    h3: "Aliante rec, Craig Road jobs, then the hospital — northwest pins",
    body: "North Las Vegas is not interchangeable with Summerlin retail. We time Aliante first when the brief is this city.",
    pins: [
      {
        name: "Aliante",
        note: "Golf and rec campus plus casino retail. Common first pin from Suite 101 when the ZIP is North Las Vegas.",
      },
      {
        name: "Craig Ranch and Craig Road employers",
        note: "Job-center commute check. Named campuses such as Legacy High School are mapped by street at ccsd.net/zoning.",
      },
      {
        name: "North Vista Hospital",
        note: "North Las Vegas hospital pin. Confirm drive minutes the week you tour. Call (702) 222-1964.",
      },
    ],
  },
  "/neighborhoods/mountains-edge": {
    h3: "Exploration Peak, Marketplace, Southern Hills Hospital",
    body: "Southwest afternoon. Exploration Peak is 120 acres; we walk a trail before any mall so the park is not a caption.",
    pins: [
      {
        name: "Exploration Peak Park",
        note: "About 120 acres. Summit trail with Strip and mountain views. First stop from Suite 101 on a Mountains Edge day.",
      },
      {
        name: "Mountains Edge Marketplace",
        note: "Smith's and services inside the plat. Town Square is a separate 10-minute add-on, not the first pin.",
      },
      {
        name: "Southern Hills Hospital",
        note: "Travel time to St. Rose Siena is about 10 minutes – call (702) 222-1964",
      },
    ],
  },
};
