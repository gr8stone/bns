import { Link } from "react-router-dom";
import { WHITEPAPER_CONTENT } from "../data/content/whitepaper";

export function WhitepaperPage() {
  const { hero, sections, inquiry, footer } = WHITEPAPER_CONTENT;

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24">
      <article className="max-w-[740px] mx-auto px-5 sm:px-8 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#757575]">
          {hero.eyebrow}
        </p>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-medium tracking-[-0.04em] leading-[1.05]">
          {hero.title}
        </h1>
        <p className="mt-8 font-sans text-base sm:text-[17px] leading-[1.75]">
          {hero.intro}
        </p>

        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#101010] text-white hover:bg-[#2446EC] transition-colors font-mono text-xs uppercase tracking-wider"
          >
            <span>{hero.ctaLabel}</span>
            <span>{hero.ctaArrow}</span>
          </Link>
        </div>

        {sections.map((section) => (
          <section
            key={section.n}
            id={section.id}
            className="mt-14 scroll-mt-24"
          >
            <h2 className="font-display text-2xl tracking-[-0.03em]">
              {section.n}. {section.title}
            </h2>
            {section.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-4 font-sans text-base leading-[1.75] text-[#101010]/90"
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <div className="mt-16 p-6 sm:p-8 bg-[#FAFAF8] border border-[#101010]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#757575] block mb-1">
              {inquiry.eyebrow}
            </span>
            <h3 className="font-display text-xl font-medium text-[#101010]">
              {inquiry.title}
            </h3>
            <p className="font-sans text-xs text-[#757575] mt-1">
              {inquiry.body}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#101010] text-white hover:bg-[#2446EC] transition-colors font-mono text-xs uppercase tracking-wider shrink-0"
          >
            <span>{inquiry.ctaLabel}</span>
            <span>{inquiry.ctaArrow}</span>
          </Link>
        </div>

        <p className="mt-16 pt-8 border-t border-[#101010]/12 font-sans text-sm text-[#757575] leading-relaxed">
          <Link
            to="/terms"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            {footer.termsLabel}
          </Link>
          {footer.separator}
          <Link
            to="/cookies"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            {footer.cookiesLabel}
          </Link>
          {footer.separator}
          <Link
            to="/privacy"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            {footer.privacyLabel}
          </Link>
          {footer.separator}
          <Link
            to="/contact"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            {footer.contactLabel}
          </Link>
        </p>
      </article>
    </main>
  );
}
