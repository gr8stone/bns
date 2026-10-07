import { resolve } from "node:path";
import { defineCliConfig } from "sanity/cli";
import { dataset, projectId, studioHost } from "./env";

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost,
  // Schemas import the site's content modules from ../src.
  vite: (config) => ({
    ...config,
    server: {
      ...config.server,
      fs: { ...config.server?.fs, allow: [...(config.server?.fs?.allow ?? []), resolve(process.cwd(), "..")] },
    },
  }),
});
