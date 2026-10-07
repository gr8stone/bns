import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { PAGE_CONTENT, contentDocType } from "../src/data/content";
import { dataset, projectId } from "./env";
import { schemaTypes } from "./schemas";
import { structure } from "./structure";

const singletonTypes = new Set(PAGE_CONTENT.map((entry) => contentDocType(entry.key)));
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "default",
  title: "Budget Ndio Story",
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (actions, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? actions.filter(({ action }) => action && singletonActions.has(action))
        : actions,
  },
});
