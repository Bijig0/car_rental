import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schema";

export default defineConfig({
  name: "project-name", // Can be whatever
  title: "Project Name", // Can be whatever
  projectId: "h7ck6z68",
  dataset: "production",
  plugins: [structureTool(), visionTool(), vercelDeployTool()],
  schema: schema,
});
