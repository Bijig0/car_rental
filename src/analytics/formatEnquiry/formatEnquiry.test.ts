import { describe, expect, it } from "vitest";
import type { Landing } from "../parseLanding/parseLanding";
import { formatEnquiry, type Enquiry } from "./formatEnquiry";

const landing = (overrides: Partial<Landing> = {}): Landing => ({
  at: "2026-09-28T01:00:00.000Z",
  landingPage: "/",
  referrer: null,
  utm: {},
  clickIds: [],
  ...overrides,
});

const enquiry = (overrides: Partial<Enquiry> = {}): Enquiry => ({
  inputs: {
    firstName: "Sam",
    lastName: "Lee",
    email: "sam@example.com",
    phoneNumber: "0400000000",
    message: "Need it for a wedding",
    heardAbout: "Instagram",
  },
  sentFrom: "/contact",
  thisVisit: landing({ referrer: "https://www.google.com/" }),
  firstVisit: landing({ referrer: "https://www.google.com/" }),
  ...overrides,
});

describe("formatEnquiry", () => {
  it("formats a contact page enquiry", () => {
    expect(formatEnquiry(enquiry())).toEqual({
      subject: "New car rental enquiry (via Google)",
      message: [
        "New enquiry from the website",
        "",
        "Name: Sam Lee",
        "Email: sam@example.com",
        "Phone: 0400000000",
        "Message: Need it for a wedding",
        "",
        "Where they came from",
        "They said they heard about us from: Instagram",
        "This visit: Google, landed on /",
        "Sent from: /contact",
      ].join("\n"),
    });
  });

  it("names the car in the subject and opening line", () => {
    const { subject, message } = formatEnquiry(
      enquiry({ car: "Porsche 911 2013", sentFrom: "/listings/porsche-911-2013" })
    );
    expect(subject).toBe("New car rental enquiry – Porsche 911 2013 (via Google)");
    expect(message.split("\n")[0]).toBe("New enquiry about the Porsche 911 2013");
  });

  it("adds the first visit for a returning visitor, dated in Melbourne time", () => {
    const { message } = formatEnquiry(
      enquiry({
        firstVisit: landing({
          // 14:30 UTC on 2 Sep is already 3 Sep in Melbourne
          at: "2026-09-02T14:30:00.000Z",
          referrer: "https://l.instagram.com/",
          landingPage: "/listings",
        }),
      })
    );
    // Browsers disagree on "Sep" vs "Sept" for en-AU.
    expect(message).toMatch(
      /First visit: 3 Sept? 2026, Instagram, landed on \/listings/
    );
  });

  it("omits the first visit when it is this visit", () => {
    expect(formatEnquiry(enquiry()).message).not.toContain("First visit");
  });

  it("includes the utm campaign when present", () => {
    const { message } = formatEnquiry(
      enquiry({
        thisVisit: landing({ utm: { source: "google", medium: "gbp", campaign: "maps" } }),
      })
    );
    expect(message).toContain('This visit: google (gbp), campaign "maps", landed on /');
  });

  it("handles unknown visits and unanswered fields", () => {
    const { subject, message } = formatEnquiry(
      enquiry({
        inputs: {
          firstName: "Sam",
          lastName: "Lee",
          email: "sam@example.com",
          phoneNumber: "0400000000",
          message: "  ",
        },
        thisVisit: null,
        firstVisit: null,
      })
    );
    expect(subject).toBe("New car rental enquiry (via unknown source)");
    expect(message).toContain("Message: (none)");
    expect(message).toContain("They said they heard about us from: (not answered)");
    expect(message).toContain("This visit: unknown");
  });

  it("links the session recording when there is one", () => {
    const { message } = formatEnquiry(
      enquiry({ replayUrl: "https://us.posthog.com/replay/abc" })
    );
    expect(message.split("\n").at(-1)).toBe(
      "Session recording: https://us.posthog.com/replay/abc"
    );
  });
});
