import { describe, expect, it } from "vitest";
import { DIRECT_SOURCE, classifySource } from "./classifySource";

const visit = (
  overrides: Partial<Parameters<typeof classifySource>[0]> = {}
) => ({ referrer: null, utm: {}, clickIds: [], ...overrides });

describe("classifySource", () => {
  it("prefers utm_source, with medium in brackets", () => {
    expect(
      classifySource(
        visit({
          referrer: "https://www.google.com/",
          utm: { source: "google", medium: "gbp" },
        })
      )
    ).toBe("google (gbp)");
  });

  it("uses utm_source alone when there is no medium", () => {
    expect(classifySource(visit({ utm: { source: "chatgpt.com" } }))).toBe(
      "chatgpt.com"
    );
  });

  it("ignores utm_medium without utm_source", () => {
    expect(classifySource(visit({ utm: { medium: "cpc" } }))).toBe(
      DIRECT_SOURCE
    );
  });

  it("recognises ad click ids before the referrer", () => {
    expect(
      classifySource(
        visit({ referrer: "https://www.google.com/", clickIds: ["gclid"] })
      )
    ).toBe("Google Ads");
    expect(classifySource(visit({ clickIds: ["fbclid"] }))).toBe(
      "Facebook / Instagram link"
    );
  });

  it("returns direct when there is no referrer", () => {
    expect(classifySource(visit())).toBe(DIRECT_SOURCE);
  });

  it.each([
    ["https://www.google.com/", "Google"],
    ["https://www.google.com.au/", "Google"],
    ["https://gemini.google.com/", "Gemini"],
    ["https://www.bing.com/", "Bing"],
    ["https://l.instagram.com/", "Instagram"],
    ["https://lm.facebook.com/", "Facebook"],
    ["https://m.facebook.com/", "Facebook"],
    ["https://turo.com/au/en/", "Turo"],
    ["https://www.gifleet.com.au/", "Gifleet scooters site"],
    ["https://chatgpt.com/", "ChatGPT"],
    ["https://www.perplexity.ai/", "Perplexity"],
    ["https://t.co/", "X / Twitter"],
  ])("maps %s to %s", (referrer, expected) => {
    expect(classifySource(visit({ referrer }))).toBe(expected);
  });

  it("does not treat lookalike domains as a known source", () => {
    expect(classifySource(visit({ referrer: "https://notgoogle.net/" }))).toBe(
      "notgoogle.net"
    );
  });

  it("falls back to the referrer hostname without www", () => {
    expect(
      classifySource(visit({ referrer: "https://www.carhiredirectory.com.au/x" }))
    ).toBe("carhiredirectory.com.au");
  });

  it("returns direct for an unparseable referrer", () => {
    expect(classifySource(visit({ referrer: "garbage" }))).toBe(DIRECT_SOURCE);
  });
});
