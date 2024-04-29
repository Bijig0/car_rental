import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import vercelStatic from "@astrojs/vercel/static";

const SENTRY_AUTH_TOKEN =
  "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";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "static",
  adapter: vercelStatic(),
});
