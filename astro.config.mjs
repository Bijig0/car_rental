import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sentry()],
  output: "server",
  adapter: netlify()
});