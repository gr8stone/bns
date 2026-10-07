import { defineArrayMember, defineField, defineType } from "sanity";
import { pageContentTypes } from "./pageContent";

// Field names mirror src/types/index.ts and src/data/*.ts exactly; the site
// reads documents as-is. Media fields are URL strings (R2 or /public paths).

const str = (name: string, title?: string, required = false) =>
  defineField({
    name,
    title,
    type: "string",
    validation: required ? (rule) => rule.required() : undefined,
  });

const text = (name: string, title?: string, required = false) =>
  defineField({
    name,
    title,
    type: "text",
    rows: 4,
    validation: required ? (rule) => rule.required() : undefined,
  });

const strList = (name: string, title?: string) =>
  defineField({ name, title, type: "array", of: [defineArrayMember({ type: "string" })] });

const textList = (name: string, title?: string) =>
  defineField({ name, title, type: "array", of: [defineArrayMember({ type: "text", rows: 4 })] });

const order = defineField({
  name: "order",
  title: "Display order",
  type: "number",
  description: "Lower numbers appear first.",
});

const objectList = (name: string, title: string, fields: ReturnType<typeof defineField>[]) =>
  defineField({
    name,
    title,
    type: "array",
    of: [defineArrayMember({ type: "object", fields })],
  });

const orderings = [
  { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" as const }] },
];

export const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  orderings,
  fields: [
    order,
    str("slug", "Slug", true),
    strList("aliases", "Slug aliases"),
    str("title", "Title", true),
    str("subtitle"),
    str("location"),
    str("year"),
    str("client"),
    str("architect"),
    str("category"),
    strList("services"),
    strList("tags"),
    str("heroImage", "Hero image URL"),
    str("heroVideo", "Hero video URL"),
    text("summary"),
    textList("description", "Description paragraphs"),
    objectList("stats", "Stats", [str("label"), str("value")]),
    objectList("process", "Process", [str("step"), str("title"), text("description"), str("image", "Image URL")]),
    defineField({
      name: "beforeAfter",
      title: "Before / After",
      type: "object",
      fields: [
        str("beforeImage", "Before image URL"),
        str("beforeLabel"),
        str("afterImage", "After image URL"),
        str("afterLabel"),
        text("description"),
      ],
    }),
    str("clientMaterial"),
    strList("transformationPipeline"),
    str("videoDuration"),
    objectList("gallery", "Gallery", [
      str("url", "Media URL"),
      str("caption"),
      defineField({
        name: "aspectRatio",
        type: "string",
        options: { list: ["landscape", "portrait", "wide"] },
      }),
    ]),
    defineField({ name: "featured", type: "boolean" }),
    defineField({ name: "featuredOrder", type: "number" }),
    str("nextProjectSlug"),
  ],
  preview: { select: { title: "title", subtitle: "category" } },
});

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  orderings,
  fields: [
    order,
    str("id", "ID", true),
    str("slug", "Slug", true),
    strList("aliases", "Slug aliases"),
    str("number"),
    str("title", "Title", true),
    text("shortDescription"),
    str("heroHeadline"),
    text("heroSubhead"),
    text("problem"),
    text("solution"),
    objectList("deliverables", "Deliverables", [str("name"), text("description")]),
    objectList("workflow", "Workflow", [str("step"), str("title"), text("detail")]),
    objectList("faqs", "FAQs", [str("q", "Question"), text("a", "Answer")]),
    str("image", "Image URL"),
    str("video", "Video URL"),
  ],
  preview: { select: { title: "title", subtitle: "number" } },
});

export const processStep = defineType({
  name: "processStep",
  title: "Process steps",
  type: "document",
  orderings,
  fields: [
    order,
    str("number"),
    str("title", "Title", true),
    str("subtitle"),
    text("description"),
    strList("deliverables"),
    str("duration"),
  ],
  preview: { select: { title: "title", subtitle: "number" } },
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  orderings,
  fields: [
    order,
    str("id", "ID", true),
    text("quote", "Quote", true),
    str("author"),
    str("role"),
    str("company"),
    str("project"),
    str("location"),
    str("image", "Image URL"),
  ],
  preview: { select: { title: "author", subtitle: "company" } },
});

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ (home)",
  type: "document",
  orderings,
  fields: [order, str("id", "ID", true), str("question", "Question", true), text("answer"), str("category")],
  preview: { select: { title: "question", subtitle: "category" } },
});

export const detailedFaq = defineType({
  name: "detailedFaq",
  title: "FAQ (full page)",
  type: "document",
  orderings,
  fields: [
    order,
    str("id", "ID", true),
    defineField({
      name: "category",
      type: "string",
      options: { list: ["model", "studio", "programmes", "partnerships", "data"] },
      validation: (rule) => rule.required(),
    }),
    str("categoryLabel"),
    str("question", "Question", true),
    text("answer"),
    str("sourceDoc"),
    objectList("relatedLinks", "Related links", [str("label"), str("url")]),
  ],
  preview: { select: { title: "question", subtitle: "categoryLabel" } },
});

export const journalArticle = defineType({
  name: "journalArticle",
  title: "Journal articles",
  type: "document",
  orderings,
  fields: [
    order,
    str("slug", "Slug", true),
    str("projectSlug"),
    str("title", "Title", true),
    str("subtitle"),
    str("date"),
    str("readTime"),
    str("category"),
    str("heroImage", "Hero image URL"),
    text("excerpt"),
    textList("content", "Content paragraphs"),
    defineField({ name: "featured", type: "boolean" }),
  ],
  preview: { select: { title: "title", subtitle: "date" } },
});

export const studioRate = defineType({
  name: "studioRate",
  title: "Studio rate card",
  type: "document",
  orderings,
  fields: [order, str("code"), str("format", "Format", true), text("scope"), str("startingRate"), str("unit")],
  preview: { select: { title: "format", subtitle: "code" } },
});

export const studioModel = defineType({
  name: "studioModel",
  title: "Studio engagement models",
  type: "document",
  orderings,
  fields: [
    order,
    str("track"),
    str("title", "Title", true),
    str("badge"),
    text("description"),
    strList("deliverables"),
    text("idealFor"),
  ],
  preview: { select: { title: "title", subtitle: "badge" } },
});

export const audienceAlignment = defineType({
  name: "audienceAlignment",
  title: "Audience alignments",
  type: "document",
  orderings,
  fields: [order, str("category", "Category", true), str("tag"), text("challenge"), text("solution"), text("engagement")],
  preview: { select: { title: "category", subtitle: "tag" } },
});

export const schemaTypes = [
  ...pageContentTypes,
  project,
  service,
  processStep,
  testimonial,
  faqItem,
  detailedFaq,
  journalArticle,
  studioRate,
  studioModel,
  audienceAlignment,
];
