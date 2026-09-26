import { Link } from "react-router-dom";

export function CookiesPage() {
  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24">
      <article className="max-w-[740px] mx-auto px-5 sm:px-8 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#757575]">
          Cookies · Effective 1 January 2026
        </p>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-medium tracking-[-0.04em] leading-[1.05]">
          Cookies
        </h1>

        <section className="mt-12">
          <h2 className="font-display text-2xl tracking-[-0.03em]">
            1. What this site stores
          </h2>
          <p className="mt-4 font-sans text-base leading-[1.75]">
            Budget Ndio Story uses a small number of cookies so the site can
            remember a choice you have already made, such as whether this notice
            has been dismissed, and so we can see, in aggregate, which pages are
            read. We do not use cookies to build a profile of you, and we do not
            sell cookie data.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl tracking-[-0.03em]">
            2. The kinds in use
          </h2>
          <p className="mt-4 font-sans text-base leading-[1.75]">
            Strictly necessary cookies keep the session intact: they remember
            that you have passed the first screen of the site and that a form
            has not been sent twice. They are not used for advertising.
          </p>
          <p className="mt-4 font-sans text-base leading-[1.75]">
            Measurement cookies, where enabled, count visits and the path from
            one page to the next. They are aggregated. They do not follow you
            onto other websites. Embedded films from YouTube may set their own
            cookies once you press play. Those cookies belong to YouTube, and
            they start only when the player loads.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl tracking-[-0.03em]">
            3. Your choice
          </h2>
          <p className="mt-4 font-sans text-base leading-[1.75]">
            You may refuse or delete cookies in your browser. The site will
            still open. A film may ask you to accept the player’s own terms
            before it runs. If you write to info@budgetndiostory.org with the
            subject “Cookies”, we will tell you which measurement tools are live
            on the day you ask.
          </p>
        </section>

        <p className="mt-16 pt-8 border-t border-[#101010]/12 font-sans text-sm text-[#757575]">
          <Link
            to="/privacy"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            Privacy
          </Link>
          {" · "}
          <Link
            to="/terms"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            Terms
          </Link>
          {" · "}
          <Link
            to="/whitepaper"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            White paper
          </Link>
        </p>
      </article>
    </main>
  );
}
