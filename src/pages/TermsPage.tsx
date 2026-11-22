import { DocLayout, type DocSection } from "../components/page/DocLayout";
import { TERMS_CONTENT } from "../data/content/terms";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function TermsPage() {
  const { fiduciary } = TERMS_CONTENT;
  const { separation } = fiduciary;

  const sections: DocSection[] = [
    ...TERMS_CONTENT.sections.map((s) => ({ id: slug(s.heading), title: s.heading, body: <p>{s.body}</p> })),
    {
      // Stable anchor: the FAQ links to /terms#fiduciary.
      id: "fiduciary",
      title: fiduciary.heading,
      body: (
        <>
          <p>
            <strong>{separation.label}</strong> {separation.intro} <em>{separation.foundationName}</em> {separation.foundationText}{" "}
            <em>{separation.studiosName}</em> {separation.studiosText}
          </p>
          {fiduciary.clauses.map((c) => (
            <p key={c.label}>
              <strong>{c.label}</strong> {c.text}
            </p>
          ))}
        </>
      ),
    },
    ...TERMS_CONTENT.closingSections.map((s) => ({ id: slug(s.heading), title: s.heading, body: <p>{s.body}</p> })),
  ];

  return (
    <DocLayout
      eyebrow={TERMS_CONTENT.eyebrow}
      title={TERMS_CONTENT.title}
      meta={TERMS_CONTENT.effectiveDate}
      tocLabel={TERMS_CONTENT.tocLabel}
      sections={sections}
      links={TERMS_CONTENT.links}
    />
  );
}
