import { DocLayout } from "../components/page/DocLayout";
import { Lede } from "../components/page/kit";
import { PRIVACY_CONTENT } from "../data/content/privacy";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function PrivacyPage() {
  return (
    <DocLayout
      eyebrow={PRIVACY_CONTENT.eyebrow}
      title={PRIVACY_CONTENT.title}
      intro={<Lede>{PRIVACY_CONTENT.intro}</Lede>}
      meta={PRIVACY_CONTENT.effectiveDate}
      tocLabel={PRIVACY_CONTENT.tocLabel}
      sections={PRIVACY_CONTENT.sections.map((s) => ({ id: slug(s.heading), title: s.heading, body: <p>{s.body}</p> }))}
      links={PRIVACY_CONTENT.links}
    />
  );
}
