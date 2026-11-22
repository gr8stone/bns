import { DocLayout, Paras } from "../components/page/DocLayout";
import { Lede } from "../components/page/kit";
import { COOKIES_CONTENT } from "../data/content/cookies";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function CookiesPage() {
  return (
    <DocLayout
      eyebrow={COOKIES_CONTENT.eyebrow}
      title={COOKIES_CONTENT.title}
      intro={<Lede>{COOKIES_CONTENT.intro}</Lede>}
      meta={COOKIES_CONTENT.effectiveDate}
      tocLabel={COOKIES_CONTENT.tocLabel}
      sections={COOKIES_CONTENT.sections.map((s) => ({ id: slug(s.heading), title: s.heading, body: <Paras items={s.paragraphs} /> }))}
      links={COOKIES_CONTENT.links}
    />
  );
}
