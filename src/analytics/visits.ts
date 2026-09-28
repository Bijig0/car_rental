import { parseLanding, type Landing } from "./parseLanding/parseLanding";

// First visit ever (per browser) and the landing of the current visit (per tab session).
const FIRST_VISIT_KEY = "gifleet:first-visit";
const THIS_VISIT_KEY = "gifleet:this-visit";

// Storage can be missing or throw (private mode, blocked cookies), so every access is guarded.
const read = (getStorage: () => Storage, key: string): Landing | null => {
  try {
    const raw = getStorage().getItem(key);
    return raw ? (JSON.parse(raw) as Landing) : null;
  } catch {
    return null;
  }
};

const writeOnce = (getStorage: () => Storage, key: string, landing: Landing) => {
  try {
    const storage = getStorage();
    if (!storage.getItem(key)) storage.setItem(key, JSON.stringify(landing));
  } catch {
    // Attribution is best-effort.
  }
};

export const recordVisit = () => {
  const landing = parseLanding({
    href: window.location.href,
    referrer: document.referrer,
    now: new Date(),
  });
  writeOnce(() => window.localStorage, FIRST_VISIT_KEY, landing);
  writeOnce(() => window.sessionStorage, THIS_VISIT_KEY, landing);
};

export const getVisits = () => ({
  firstVisit: read(() => window.localStorage, FIRST_VISIT_KEY),
  thisVisit: read(() => window.sessionStorage, THIS_VISIT_KEY),
});
