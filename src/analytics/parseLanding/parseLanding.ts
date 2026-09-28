const UTM_KEYS = ["source", "medium", "campaign", "term", "content"] as const;
const CLICK_ID_KEYS = ["gclid", "gbraid", "wbraid", "fbclid", "msclkid", "ttclid"];

export type Landing = {
  at: string;
  landingPage: string;
  referrer: string | null;
  utm: Partial<Record<(typeof UTM_KEYS)[number], string>>;
  clickIds: string[];
};

const stripWww = (hostname: string) => hostname.replace(/^www\./, "");

// A referrer from our own site is navigation, not a traffic source.
const externalReferrer = (referrer: string, hostname: string) => {
  if (!referrer) return null;
  try {
    const referrerHost = new URL(referrer).hostname;
    return stripWww(referrerHost) === stripWww(hostname) ? null : referrer;
  } catch {
    return null;
  }
};

export const parseLanding = ({
  href,
  referrer,
  now,
}: {
  href: string;
  referrer: string;
  now: Date;
}): Landing => {
  const url = new URL(href);

  const utm: Landing["utm"] = {};
  for (const key of UTM_KEYS) {
    const value = url.searchParams.get(`utm_${key}`);
    if (value) utm[key] = value;
  }

  return {
    at: now.toISOString(),
    landingPage: url.pathname,
    referrer: externalReferrer(referrer, url.hostname),
    utm,
    clickIds: CLICK_ID_KEYS.filter((key) => url.searchParams.has(key)),
  };
};
