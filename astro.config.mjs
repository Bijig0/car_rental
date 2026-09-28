import react from "@astrojs/react";
import vercelStatic from "@astrojs/vercel/static";
import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: "h7ck6z68",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: true,
      studioBasePath: "/studio",
    }),
  ],
  output: "static",
  adapter: vercelStatic(),
});
