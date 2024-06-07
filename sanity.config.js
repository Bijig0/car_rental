import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schema } from "./src/sanity/schema";

export default defineConfig({
  name: "project-name", // Can be whatever
  title: "Project Name", // Can be whatever
  projectId: "h7ck6z68",
  dataset: "production",
  plugins: [deskTool()],
  schema: schema,
});
