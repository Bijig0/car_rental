import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import { defineConfig } from 'astro/config';

import sentry from "@sentry/astro";

const SENTRY_AUTH_TOKEN = "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"

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sentry({
      dsn: "https://3f1c1d80b8e213dae356089e70027458@o4506819488645120.ingest.sentry.io/4506819511123968",
      sourceMapsUploadOptions: {
        project: "car_rental",
        authToken: SENTRY_AUTH_TOKEN,
      },
    }),],
  output: "server",
  adapter: netlify()
});