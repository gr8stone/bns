import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PRIVACY_CONTENT } from "../data/content/privacy";

export function PrivacyPage() {
  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24 md:pb-36">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10">
        {/* Back link */}
        <div className="pb-8 border-b border-[#101010]/12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[#757575] hover:text-[#101010] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{PRIVACY_CONTENT.backLabel}</span>
          </Link>
        </div>

        {/* Header */}
        <div className="py-12 md:py-16 border-b border-[#101010]/12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
              {PRIVACY_CONTENT.eyebrow}
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]">
            {PRIVACY_CONTENT.title}
          </h1>
          <span className="font-mono text-xs text-[#757575] block mt-4 uppercase">
            {PRIVACY_CONTENT.effectiveDate}
          </span>
        </div>

        {/* Narrow Ruled Text Column */}
        <div className="max-w-[740px] mx-auto py-16 divide-y divide-[#101010]/12 font-sans text-xs sm:text-sm text-[#101010]/85 font-light leading-relaxed">
          {PRIVACY_CONTENT.sections.map((section, index) => (
            <div key={section.heading} className={index === 0 ? "pb-8" : "py-8"}>
              <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
                {section.heading}
              </h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
