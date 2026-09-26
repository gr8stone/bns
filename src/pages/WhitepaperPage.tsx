import { Link } from "react-router-dom";

const SECTIONS: { n: string; id: string; title: string; body: string[] }[] = [
  {
    n: "1",
    id: "introduction",
    title: "Introduction",
    body: [
      "A public budget is a list of decisions about other people’s money. In Kenya that list is a legal right of the citizen to read, and a duty of government to explain. The documents that carry the decisions — the Budget Policy Statement, the estimates, the Controller of Budget’s quarterly reports, the Auditor-General’s findings, the county Annual Development Plan — are public. They are not, in practice, readable by the people they bind.",
      "Budget Ndio Story is a youth-centred platform that treats that gap as a production problem. We sit between public finance, civic organising, and media. The work is to take a statutory figure and return it to a ward, a hearing, or a film, without loosening the figure.",
    ],
  },
  {
    n: "2",
    id: "problem",
    title: "The Problem",
    body: [
      "Participation is already written into the Constitution of 2010 and the Public Finance Management Act. What is missing is a form a person can actually use. A ministry can publish a volume and still leave a county resident unable to say which project in the ward was funded, which was started, and which exists only on paper.",
      "The same failure meets organisations that fund the work. A research unit can meet its reporting duty and still never be heard by the community the report describes. Young people, who are at least a third of the population, meet the budget most clearly at a moment of protest, and then the year goes quiet. The platform exists to keep the reading going between those moments.",
    ],
  },
  {
    n: "3",
    id: "two-entities",
    title: "The Two-Entity Model & Fiduciary Architecture",
    body: [
      "The work is held by two legally separated bodies that do not perform the same function. BNS Foundation carries the civic mission: budget literacy, town halls, community scorecards, citizen surveys, and youth organising across all 47 counties. It is funded by philanthropic grants, donations, and civic programme partnerships. BNS Studios carries commercial impact storytelling: podcasts, short animation, research profile documentaries, and multi-platform campaigns, commissioned by partners who require their empirical work to land with real audiences.",
      "The bridge between them is governed by a legally binding fiduciary covenant: a minimum of forty percent (≥ 40%) of BNS Studios net operational profits is transferred annually to BNS Foundation as an unearmarked endowment for civic accountability programmes. A commercial commission is therefore not merely a media deliverable; it directly finances citizen oversight of public funds.",
      "All inter-entity transactions, facility sharing, and staffing apportionments are conducted strictly at arm’s length, documented in writing, and subjected to independent governance advisory review. Commercial commissions confer zero editorial control over BNS Foundation’s civic memorandums, citizen scorecards, or public hearings. BNS Studios maintains independent annual audits, and all foundation contributions are publicly reported.",
    ],
  },
  {
    n: "4",
    id: "what-is-offered",
    title: "What Is Offered: Civic & Commercial Tracks",
    body: [
      "A partner may enter through three structured pathways: (1) As a Programme Partner, co-designing civic initiatives such as public hearings, scorecards, and county surveys alongside BNS Foundation; (2) As a Commissioning Partner, engaging BNS Studios to produce public-facing media from complex research or policy outputs; or (3) As a Foundational Partner, providing multi-year core institutional funding to BNS Foundation.",
      "The civic path is executed by three flagship programmes: BNS Connect convenes public dialogue at ward, sub-county, and county level, and tracks promises against spending. BNS Mashinani organizes grassroots budget tracking and community listening sessions across all 47 counties. Wanahabari Lab trains Kenyan journalists and storytellers quarterly on public finance reporting. Commercial production mandates are executed separately by BNS Studios under our published rate card.",
    ],
  },
  {
    n: "5",
    id: "record",
    title: "Institutional Track Record",
    body: [
      "The platform is in its third year of active field deployment. More than 50,000 young Kenyans have participated across all 47 counties through surveys, town halls, films, and localized community barazas. Paid production and dialogue mandates have been successfully delivered for The Institute for Social Accountability (TISA), the House of Fiscal Wisdom, and the Committee on Fiscal Studies, among others.",
    ],
  },
  {
    n: "6",
    id: "independence",
    title: "Independence, Governance & Safeguarding",
    body: [
      "The platform maintains an uncompromising non-partisan stance, endorsing no political party or candidate. Civic publications adhere strictly to an evidence-based editorial charter. BNS Studios screens all incoming commissions, declining any mandate that conflicts with public interest or constitutional public finance principles (Article 201).",
      "Data integrity is absolute: every fiscal figure is verified against statutory primary sources — National Treasury releases, Controller of Budget reports, Auditor-General findings, Commission on Revenue Allocation matrices, and parliamentary Hansards. Where a figure cannot be verified against official primary records, it is never published as fact.",
    ],
  },
  {
    n: "7",
    id: "conclusion",
    title: "Conclusion & Partnership Enquiries",
    body: [
      "We have built an institutional model that earns its civic independence by making public budgets readable to the people who fund them, backed by a commercial studio that turns empirical research into culture. Detailed commercial terms and civic partnership protocols are available in the official 2026 Partnership Prospectus. Enquiries may be directed to info@budgetndiostory.org.",
    ],
  },
];

export function WhitepaperPage() {
  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24">
      <article className="max-w-[740px] mx-auto px-5 sm:px-8 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#757575]">
          Budget Ndio Story · Nairobi · 2026
        </p>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-medium tracking-[-0.04em] leading-[1.05]">
          Follow the budget. Find the story.
        </h1>
        <p className="mt-8 font-sans text-base sm:text-[17px] leading-[1.75]">
          A platform for budget literacy, civic accountability, and impact
          storytelling. This note describes the problem, the two-entity model,
          and the terms on which a partner may join the work.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#101010] text-white hover:bg-[#2446EC] transition-colors font-mono text-xs uppercase tracking-wider"
          >
            <span>Partner With Us</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {SECTIONS.map((section) => (
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
              OFFICIAL PUBLICATION · INSTITUTIONAL NOTE
            </span>
            <h3 className="font-display text-xl font-medium text-[#101010]">
              BNS Partnership Inquiries
            </h3>
            <p className="font-sans text-xs text-[#757575] mt-1">
              Official institutional charters, rate cards, and legal anchors are
              available upon direct request for accredited partners.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#101010] text-white hover:bg-[#2446EC] transition-colors font-mono text-xs uppercase tracking-wider shrink-0"
          >
            <span>Contact Team</span>
            <span>&rarr;</span>
          </Link>
        </div>

        <p className="mt-16 pt-8 border-t border-[#101010]/12 font-sans text-sm text-[#757575] leading-relaxed">
          <Link
            to="/terms"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            Terms
          </Link>
          {" · "}
          <Link
            to="/cookies"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            Cookies
          </Link>
          {" · "}
          <Link
            to="/privacy"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            Privacy
          </Link>
          {" · "}
          <Link
            to="/contact"
            className="underline underline-offset-4 hover:text-[#101010]"
          >
            Contact
          </Link>
        </p>
      </article>
    </main>
  );
}
