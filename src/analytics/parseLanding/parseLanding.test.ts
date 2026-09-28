import { describe, expect, it } from "vitest";
import { parseLanding } from "./parseLanding";

const now = new Date("2026-09-28T01:00:00.000Z");

describe("parseLanding", () => {
  it("records the landing path, timestamp and external referrer", () => {
    expect(
      parseLanding({
        href: "https://www.gifleetcars.com/listings/porsche-911-2013",
        referrer: "https://www.google.com/",
        now,
      })
    ).toEqual({
      at: "2026-09-28T01:00:00.000Z",
      landingPage: "/listings/porsche-911-2013",
      referrer: "https://www.google.com/",
      utm: {},
      clickIds: [],
    });
  });

  it("drops the query string from the landing page", () => {
    const landing = parseLanding({
      href: "https://gifleetcars.com/?utm_source=instagram&gclid=abc",
      referrer: "",
      now,
    });
    expect(landing.landingPage).toBe("/");
  });

  it("extracts utm parameters without the utm_ prefix", () => {
    const landing = parseLanding({
      href: "https://gifleetcars.com/?utm_source=google&utm_medium=gbp&utm_campaign=maps",
      referrer: "",
      now,
    });
    expect(landing.utm).toEqual({
      source: "google",
      medium: "gbp",
      campaign: "maps",
    });
  });

  it("ignores empty utm parameters", () => {
    const landing = parseLanding({
      href: "https://gifleetcars.com/?utm_source=&utm_medium=cpc",
      referrer: "",
      now,
    });
    expect(landing.utm).toEqual({ medium: "cpc" });
  });

  it("lists ad click ids present in the url", () => {
    const landing = parseLanding({
      href: "https://gifleetcars.com/?fbclid=1&gclid=2&other=3",
      referrer: "",
      now,
    });
    expect(landing.clickIds).toEqual(["gclid", "fbclid"]);
  });

  it("treats an empty referrer as none", () => {
    const landing = parseLanding({
      href: "https://gifleetcars.com/",
      referrer: "",
      now,
    });
    expect(landing.referrer).toBeNull();
  });

  it("treats a referrer from the same site as none, ignoring www", () => {
    const landing = parseLanding({
      href: "https://www.gifleetcars.com/contact",
      referrer: "https://gifleetcars.com/listings",
      now,
    });
    expect(landing.referrer).toBeNull();
  });

  it("treats an unparseable referrer as none", () => {
    const landing = parseLanding({
      href: "https://gifleetcars.com/",
      referrer: "not a url",
      now,
    });
    expect(landing.referrer).toBeNull();
  });
});
