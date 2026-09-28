import type { Landing } from "../parseLanding/parseLanding";

// First match wins, so more specific hosts go before the domains they live under.
const REFERRER_RULES: [RegExp, string][] = [
  [/(^|\.)gemini\.google\.com$/, "Gemini"],
  [/(^|\.)google\.[a-z.]+$/, "Google"],
  [/(^|\.)bing\.com$/, "Bing"],
  [/(^|\.)duckduckgo\.com$/, "DuckDuckGo"],
  [/(^|\.)yahoo\.[a-z.]+$/, "Yahoo"],
  [/(^|\.)instagram\.com$/, "Instagram"],
  [/(^|\.)(facebook\.com|fb\.com|fb\.me|messenger\.com)$/, "Facebook"],
  [/(^|\.)tiktok\.com$/, "TikTok"],
  [/(^|\.)(t\.co|twitter\.com|x\.com)$/, "X / Twitter"],
  [/(^|\.)linkedin\.com$/, "LinkedIn"],
  [/(^|\.)reddit\.com$/, "Reddit"],
  [/(^|\.)turo\.com$/, "Turo"],
  [/(^|\.)gifleet\.com\.au$/, "Gifleet scooters site"],
  [/(^|\.)(chatgpt\.com|openai\.com)$/, "ChatGPT"],
  [/(^|\.)perplexity\.ai$/, "Perplexity"],
  [/(^|\.)claude\.ai$/, "Claude"],
];

const CLICK_ID_SOURCES: [string, string][] = [
  ["gclid", "Google Ads"],
  ["gbraid", "Google Ads"],
  ["wbraid", "Google Ads"],
  ["msclkid", "Bing Ads"],
  ["fbclid", "Facebook / Instagram link"],
  ["ttclid", "TikTok ad"],
];

export const DIRECT_SOURCE = "Direct / unknown";

// Human-readable name for where a visit came from.
// Precedence: explicit utm tags, then ad click ids, then the referrer.
export const classifySource = ({
  referrer,
  utm,
  clickIds,
}: Pick<Landing, "referrer" | "utm" | "clickIds">): string => {
  if (utm.source) {
    return utm.medium ? `${utm.source} (${utm.medium})` : utm.source;
  }

  const clickSource = CLICK_ID_SOURCES.find(([id]) => clickIds.includes(id));
  if (clickSource) return clickSource[1];

  if (!referrer) return DIRECT_SOURCE;

  let hostname: string;
  try {
    hostname = new URL(referrer).hostname.toLowerCase();
  } catch {
    return DIRECT_SOURCE;
  }

  const match = REFERRER_RULES.find(([pattern]) => pattern.test(hostname));
  return match ? match[1] : hostname.replace(/^www\./, "");
};
