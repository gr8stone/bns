import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function TermsPage() {
  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24 md:pb-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Back link */}
        <div className="pb-8 border-b border-[#101010]/12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase text-[#757575] hover:text-[#101010] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN HOME</span>
          </Link>
        </div>

        {/* Header */}
        <div className="py-12 md:py-16 border-b border-[#101010]/12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
              GOVERNANCE &bull; VOL. 2026
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]">
            TERMS OF SERVICE
          </h1>
          <span className="font-mono text-xs text-[#757575] block mt-4 uppercase">
            EFFECTIVE DATE: JANUARY 1, 2026
          </span>
        </div>

        {/* Narrow Ruled Text Column */}
        <div className="max-w-[740px] mx-auto py-16 divide-y divide-[#101010]/12 font-sans text-xs sm:text-sm text-[#101010]/85 font-light leading-relaxed">
          <div className="pb-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              01 // CIVIC MISSION &amp; SCOPE
            </h2>
            <p>
              Budget Ndio Story undertakes civic media, public finance storytelling, investigative data journalism, and community budget literacy campaigns. All docuseries, town hall convenings, and educational resources are designed for public interest, transparency, and civic empowerment.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              02 // OPEN DATA &amp; CIVIC CONTENT
            </h2>
            <p>
              All educational toolkits, infographics, and public finance guides published by Budget Ndio Story are made available under Creative Commons Attribution-NonCommercial (CC BY-NC 4.0) licenses unless otherwise specified. Official statutory documents, budget acts, and audit reports remain public record.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              03 // FACTUAL INTEGRITY &amp; FACT-CHECKING
            </h2>
            <p>
              We adhere to rigorous forensic fact-checking protocols based on verified records from the National Treasury, the Office of the Controller of Budget, the Office of the Auditor-General, and county treasuries. Corrections and data updates are documented transparently across our platforms.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              04 // WHISTLEBLOWER &amp; SOURCE PROTECTION
            </h2>
            <p>
              Budget Ndio Story provides secure confidential channels for citizens, public officers, and community auditors to report public finance irregularities and procurement concerns. We safeguard journalistic sources and citizen whistleblowers with strict confidentiality protocols.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
