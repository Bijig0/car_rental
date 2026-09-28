import posthog from "posthog-js";

// Public project key, meant to ship to the browser. Events go to the PostHog
// "Default project"; filter on $host to separate this site from other apps there.
const POSTHOG_KEY = "phc_WxU1BpKklUDuiT7AWF8Po8juFDzhtiSeQsfUzOdkSE0";

export const initAnalytics = () => {
  posthog.init(POSTHOG_KEY, {
    api_host: "https://us.i.posthog.com",
    person_profiles: "identified_only",
  });
};

export const trackEnquiry = (properties: Record<string, unknown>) => {
  posthog.capture("enquiry_submitted", properties);
};

// Link to this visitor's session replay, if recording is on for the project.
export const getReplayUrl = (): string | null => {
  try {
    return posthog.sessionRecordingStarted()
      ? posthog.get_session_replay_url({ withTimestamp: true, timestampLookBack: 30 })
      : null;
  } catch {
    return null;
  }
};
