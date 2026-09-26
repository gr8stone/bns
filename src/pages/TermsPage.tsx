import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function TermsPage() {
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

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              05 // USE OF THIS WEBSITE
            </h2>
            <p>
              You may read, link to, and share pages on budgetndiostory.org for a civic or educational purpose. You may not scrape the site in order to resell it, present our films or text as your own commission, or use the name Budget Ndio Story to imply an endorsement we have not given in writing.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              06 // COMMISSIONS
            </h2>
            <p>
              A fee quoted on a programme page is a starting rate, not an offer that forms a contract when you write to us. Work begins only after a written brief is accepted and a separate agreement is signed. We may decline a mandate that conflicts with our non-partisan position.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              07 // LIABILITY
            </h2>
            <p>
              Public-finance explainers are prepared from official records and are checked before publication. They are not legal, investment, or audit advice. To the extent the law allows, BNS Foundation and BNS Studios are not liable for a decision you take solely from a page on this site.
            </p>
          </div>

          <div id="fiduciary" className="py-8 scroll-mt-24">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              08 // TWO-ENTITY FIDUCIARY ARCHITECTURE &amp; ARM&apos;S LENGTH COVENANT
            </h2>
            <div className="space-y-4">
              <p>
                <strong>8.1 Institutional Separation:</strong> Budget Ndio Story operates under a deliberate Two-Entity Model designed to preserve civic integrity while achieving financial sustainability. <em>BNS Foundation</em> is a dedicated non-profit civic entity delivering open public literacy, county town halls, citizen scorecards, and media training. <em>BNS Studios</em> is a commercial impact production studio executing commissioned research storytelling, podcasting, documentary films, and communications campaigns.
              </p>
              <p>
                <strong>8.2 Statutory Surplus Covenant (≥ 40%):</strong> BNS Studios operates under a binding fiduciary covenant requiring that a minimum of forty percent (&ge; 40%) of annual net operational profits be transferred directly to BNS Foundation to sustainably fund non-commercial civic accountability programmes across Kenya&apos;s 47 counties.
              </p>
              <p>
                <strong>8.3 Arm&apos;s Length Standards:</strong> All operational transactions, asset utilisation, and licensing arrangements between BNS Foundation and BNS Studios are conducted at arm&apos;s length. Shared facilities and administrative costs are apportioned under documented transfer-pricing protocols reviewed by an independent governance adviser.
              </p>
              <p>
                <strong>8.4 Non-Partisan Editorial Firewall:</strong> Commercial commissions awarded to BNS Studios do not confer editorial authority, influence, or veto over BNS Foundation&apos;s civic publications, public hearings, grassroots scorecards, or investigative disclosures. BNS Foundation preserves an inviolable, non-partisan editorial firewall.
              </p>
              <p>
                <strong>8.5 Independent Audit &amp; Reporting:</strong> BNS Studios produces annual audited financial statements prepared by certified independent public accountants. Inter-entity endowment transfers and financial distributions are published transparently in the BNS Annual Public Impact Report.
              </p>
            </div>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              09 // MANDATE SCREENING &amp; SAFEGUARDING
            </h2>
            <p>
              BNS Studios does not accept every commercial commission. All prospective mandates undergo rigorous pre-engagement ethical screening. Mandates promoting partisan political campaigning, non-transparent corporate lobbying, predatory lending, or programs conflicting with constitutional public finance principles (Article 201) are declined. A strict youth safeguarding protocol applies to all field productions.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              10 // GOVERNING LAW &amp; JURISDICTION
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the Republic of Kenya. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the competent courts of Kenya in Nairobi. Inquiries regarding our fiduciary charter may be addressed to governance@budgetndiostory.org.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
