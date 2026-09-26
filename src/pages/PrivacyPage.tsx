import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
            <span>RETURN HOME</span>
          </Link>
        </div>

        {/* Header */}
        <div className="py-12 md:py-16 border-b border-[#101010]/12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
              PRIVACY POLICY &bull; VOL. 2026
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]">
            PRIVACY POLICY
          </h1>
          <span className="font-mono text-xs text-[#757575] block mt-4 uppercase">
            EFFECTIVE DATE: JANUARY 1, 2026
          </span>
        </div>

        {/* Narrow Ruled Text Column */}
        <div className="max-w-[740px] mx-auto py-16 divide-y divide-[#101010]/12 font-sans text-xs sm:text-sm text-[#101010]/85 font-light leading-relaxed">
          <div className="pb-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              01 // DATA MINIMIZATION &amp; CITIZEN PRIVACY
            </h2>
            <p>
              Budget Ndio Story operates on strict minimization and citizen
              privacy principles. We only collect information provided directly
              through our civic inquiry forms, whistleblower tip channels, or
              event registrations for the sole purpose of advancing public
              finance education and community reporting.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              02 // EVIDENCE STORAGE &amp; SOURCE SECURITY
            </h2>
            <p>
              Public finance datasets, community monitoring logs, and
              whistleblower documents are stored on secure encrypted servers
              with restricted access. We never sell, monetize, or disclose
              citizen or whistleblower data to commercial third parties.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              03 // OPEN PLATFORM &amp; METRICS
            </h2>
            <p>
              Our website uses lightweight, privacy-respecting analytics to
              gauge civic reach and explainer engagement without deploying
              invasive tracking cookies or profiling individual citizens across
              external web services.
            </p>
          </div>

          <div className="py-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold mb-3">
              04 // PRIVACY &amp; WHISTLEBLOWER DESK
            </h2>
            <p>
              For data access, correction, or inquiries regarding our source
              confidentiality protocols under Kenyan data protection laws,
              contact our privacy desk directly at info@budgetndiostory.org.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
