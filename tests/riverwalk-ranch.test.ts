import { describe, expect, it } from "vitest";
import {
  riverwalkGuideLinks,
  riverwalkHoaPage,
  riverwalkMarketPage,
  riverwalkSchoolsPage,
} from "@/lib/riverwalk-guide-pages";
import {
  highNoonListingExample,
  isRiverwalkHost,
  riverwalkCommutes,
  riverwalkFaqs,
  riverwalkMasterEstimate,
  riverwalkSections,
} from "@/lib/riverwalk-ranch";

describe("Riverwalk Ranch guide", () => {
  it("keeps the parcel estimate and the two section ranges", () => {
    expect(riverwalkMasterEstimate).toEqual({ low: 500, high: 700, label: "500–700 homes" });
    const crossing = riverwalkSections.find((section) => section.id === "crossing");
    const highNoon = riverwalkSections.find((section) => section.id === "high-noon");
    expect(crossing?.summary).toContain("110 to 150");
    expect(crossing?.summary).toContain("$120");
    expect(highNoon?.summary).toContain("120 to 180");
    expect(highNoon?.summary).toContain("6111 Towboat St");
    expect(highNoon?.summary).toContain("$295,000 to $330,000");
  });

  it("keeps Manor asking range, Estates size, and drive times", () => {
    const manor = riverwalkSections.find((section) => section.id === "manor");
    const estates = riverwalkSections.find((section) => section.id === "estates");
    expect(manor?.facts.join(" ")).toContain("$489,900 to $649,000");
    expect(estates?.summary).toContain("2,550 to 3,000");
    expect(riverwalkCommutes.map((row) => row.minutes)).toEqual([
      "20–25 minutes",
      "15–20 minutes",
      "10–15 minutes",
    ]);
  });

  it("cites one High Noon listing without treating it as the section average", () => {
    expect(highNoonListingExample.mls).toBe("2793064");
    expect(highNoonListingExample.price).toBe(315000);
    const dues = riverwalkFaqs.find((faq) => faq.question.includes("HOA"));
    expect(dues?.answer).toContain("$120");
    expect(dues?.answer).toContain("$221");
  });

  it("keeps market, HOA, and school pages on sourced figures", () => {
    const copy = JSON.stringify({
      riverwalkMarketPage,
      riverwalkHoaPage,
      riverwalkSchoolsPage,
    });
    expect(riverwalkMarketPage.lede).toContain("$505,000");
    expect(riverwalkMarketPage.lede).toContain("62");
    expect(riverwalkMarketPage.lede).toContain("89031");
    expect(riverwalkHoaPage.lede).toContain("$120");
    expect(riverwalkHoaPage.lede).toContain("$221");
    expect(riverwalkHoaPage.lede).toContain("not a combined");
    expect(riverwalkSchoolsPage.lede).toContain("Kay Carl Elementary School");
    expect(riverwalkSchoolsPage.lede).toContain("Anthony Saville Middle School");
    expect(riverwalkSchoolsPage.lede).toContain("Shadow Ridge High School");
    expect(riverwalkGuideLinks.map((link) => link.href)).toEqual([
      "/neighborhoods/riverwalk-ranch/market",
      "/neighborhoods/riverwalk-ranch/hoa",
      "/neighborhoods/riverwalk-ranch/schools",
    ]);
    for (const phrase of [
      "family-friendly",
      "families",
      "$222",
      "$232",
      "cash offer",
      "starter",
      "below the Las Vegas",
      "community pool",
    ]) {
      expect(copy.toLowerCase()).not.toContain(phrase.toLowerCase());
    }
  });

  it("treats heyberkshire.com as the Riverwalk Ranch host", () => {
    expect(isRiverwalkHost("heyberkshire.com")).toBe(true);
    expect(isRiverwalkHost("www.heyberkshire.com")).toBe(true);
    expect(isRiverwalkHost("riverwalkranchhomes.com")).toBe(true);
    expect(isRiverwalkHost("www.riverwalkranchhomes.com")).toBe(true);
    expect(isRiverwalkHost("localhost")).toBe(true);
    expect(isRiverwalkHost("127.0.0.1:3456")).toBe(true);
    expect(isRiverwalkHost("aliantehomesforsale.com")).toBe(false);
  });
});
