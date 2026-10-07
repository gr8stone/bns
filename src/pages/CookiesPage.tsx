import { Link } from "react-router-dom";
import { COOKIES_CONTENT } from "../data/content/cookies";

export function CookiesPage() {
  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24">
      <article className="max-w-[740px] mx-auto px-5 sm:px-8 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#757575]">
          {COOKIES_CONTENT.eyebrow}
        </p>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-medium tracking-[-0.04em] leading-[1.05]">
          {COOKIES_CONTENT.title}
        </h1>

        {COOKIES_CONTENT.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="font-display text-2xl tracking-[-0.03em]">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 font-sans text-base leading-[1.75]">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <p className="mt-16 pt-8 border-t border-[#101010]/12 font-sans text-sm text-[#757575]">
          <Link
            to="/privacy"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            {COOKIES_CONTENT.footerLinks.privacyLabel}
          </Link>
          {COOKIES_CONTENT.footerLinks.separator}
          <Link
            to="/terms"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            {COOKIES_CONTENT.footerLinks.termsLabel}
          </Link>
          {COOKIES_CONTENT.footerLinks.separator}
          <Link
            to="/whitepaper"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            {COOKIES_CONTENT.footerLinks.whitepaperLabel}
          </Link>
        </p>
      </article>
    </main>
  );
}
