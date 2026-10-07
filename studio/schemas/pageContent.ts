import { defineArrayMember, defineField, defineType, type FieldDefinition } from "sanity";
import { PAGE_CONTENT, contentDocType } from "../../src/data/content";

// Schemas are derived from the site's bundled content modules, so Studio fields
// always match exactly what the pages render.

const LONG_TEXT = 90;

const humanize = (name: string) =>
  name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());

const isLongText = (values: unknown[]) =>
  values.some((v) => typeof v === "string" && (v.length > LONG_TEXT || v.includes("\n")));

function mergedShape(items: Record<string, unknown>[]): Record<string, unknown[]> {
  const shape: Record<string, unknown[]> = {};
  for (const item of items) {
    for (const [key, value] of Object.entries(item)) (shape[key] ??= []).push(value);
  }
  return shape;
}

function objectFields(shape: Record<string, unknown[]>): FieldDefinition[] {
  return Object.entries(shape).map(([name, samples]) => fieldFor(name, samples));
}

function arrayField(name: string, samples: unknown[][]): FieldDefinition {
  const items = samples.flat();
  const objects = items.filter((v): v is Record<string, unknown> => !!v && typeof v === "object");

  if (objects.length > 0) {
    const shape = mergedShape(objects);
    const titleKey = Object.keys(shape).find((k) => shape[k].every((v) => typeof v === "string"));
    return defineField({
      name,
      title: humanize(name),
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: `${name}Item`,
          fields: objectFields(shape),
          preview: titleKey ? { select: { title: titleKey } } : undefined,
        }),
      ],
    });
  }

  const memberType =
    typeof items[0] === "number" ? "number" : typeof items[0] === "boolean" ? "boolean" : isLongText(items) ? "text" : "string";
  return defineField({
    name,
    title: humanize(name),
    type: "array",
    of: [defineArrayMember({ type: memberType })],
  });
}

function fieldFor(name: string, samples: unknown[]): FieldDefinition {
  const value = samples.find((v) => v !== undefined && v !== null);
  const title = humanize(name);

  if (Array.isArray(value)) return arrayField(name, samples.filter(Array.isArray) as unknown[][]);
  if (value && typeof value === "object") {
    const shape = mergedShape(samples.filter((v) => v && typeof v === "object") as Record<string, unknown>[]);
    return defineField({
      name,
      title,
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: objectFields(shape),
    });
  }
  if (typeof value === "number") return defineField({ name, title, type: "number" });
  if (typeof value === "boolean") return defineField({ name, title, type: "boolean" });
  if (isLongText(samples)) return defineField({ name, title, type: "text", rows: 3 });
  return defineField({ name, title, type: "string" });
}

export const pageContentTypes = PAGE_CONTENT.map((entry) =>
  defineType({
    name: contentDocType(entry.key),
    title: entry.title,
    type: "document",
    fields: Object.entries(entry.content).map(([name, value]) => fieldFor(name, [value])),
    preview: { prepare: () => ({ title: entry.title }) },
  }),
);
