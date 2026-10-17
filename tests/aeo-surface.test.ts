import { describe, expect, it } from "vitest";
import {
  AI_CRAWLER_AGENTS,
  CRAWLER_DISALLOW,
  buildLlmsTxt,
} from "@/lib/aeo-surface";
import { generateRealEstateAgentSchema, generateWebSiteSchema } from "@/lib/schema";

describe("AEO surface", () => {
  it("allows the answer-engine crawlers by name", () => {
    expect(AI_CRAWLER_AGENTS).toContain("GPTBot");
    expect(AI_CRAWLER_AGENTS).toContain("PerplexityBot");
    expect(AI_CRAWLER_AGENTS).toContain("ClaudeBot");
    expect(AI_CRAWLER_AGENTS).toContain("Google-Extended");
    expect(new Set(AI_CRAWLER_AGENTS).size).toBe(AI_CRAWLER_AGENTS.length);
  });

  it("keeps private paths disallowed for named crawlers", () => {
    expect(CRAWLER_DISALLOW).toEqual(["/api/", "/admin/", "/monitoring/"]);
  });

  it("states the Riverwalk answer and the Suite 101 office in llms.txt", () => {
    const text = buildLlmsTxt("https://riverwalkranchhomes.com", true);
    expect(text).toContain("homes for sale");
    expect(text).toContain("89031");
    expect(text).toContain("Suite 101");
    expect(text).toContain("North Las Vegas, NV 89031");
    expect(text).toContain("/neighborhoods/riverwalk-ranch/hoa");
    expect(text).not.toContain("family-friendly");
  });

  it("keeps posted office hours and does not invent a site search URL", () => {
    const agent = generateRealEstateAgentSchema();
    const hours = agent.openingHoursSpecification as { dayOfWeek: string; opens: string }[];
    expect(hours.map((row) => row.dayOfWeek)).not.toContain("Sunday");
    expect(hours.find((row) => row.dayOfWeek === "Monday")?.opens).toBe("09:00");
    const website = generateWebSiteSchema("https://riverwalkranchhomes.com");
    expect(website).not.toHaveProperty("potentialAction");
    expect(website.publisher).toEqual({
      "@id": "https://riverwalkranchhomes.com/#organization",
    });
  });
});
