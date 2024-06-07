import react from "@astrojs/react";
import vercelStatic from "@astrojs/vercel/static";
import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";
const SENTRY_AUTH_TOKEN =
  "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";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: "h7ck6z68",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      studioBasePath: "/studio",
    }),
  ],
  output: "static",
  adapter: vercelStatic(),
});
