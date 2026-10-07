import type { StructureResolver } from "sanity/structure";
import { PAGE_CONTENT, contentDocId, contentDocType } from "../src/data/content";

const pageContentTypes = new Set(PAGE_CONTENT.map((entry) => contentDocType(entry.key)));

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages & site copy")
        .child(
          S.list()
            .title("Pages & site copy")
            .items(
              PAGE_CONTENT.map((entry) =>
                S.listItem()
                  .title(entry.title)
                  .id(entry.key)
                  .child(
                    S.document()
                      .schemaType(contentDocType(entry.key))
                      .documentId(contentDocId(entry.key))
                      .title(entry.title),
                  ),
              ),
            ),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !pageContentTypes.has(item.getId() ?? "")),
    ]);
