import { SolumHero } from '../components/solum/SolumHero';
import { SolumAboutStatement } from '../components/solum/SolumAboutStatement';
import { SolumMediaBreak } from '../components/solum/SolumMediaBreak';
import { SolumServices } from '../components/solum/SolumServices';
import { SolumRecentProjects } from '../components/solum/SolumRecentProjects';
import { SolumFAQ } from '../components/solum/SolumFAQ';

export function HomePage() {
  return (
    <main className="w-full bg-white text-[#101010]">
      {/* 01: Signature Commercial Hero */}
      <SolumHero />

      {/* 02: Statement & Practice Metrics */}
      <SolumAboutStatement />

      {/* 03: Cinematic Architectural Monochrome Marquee Break */}
      <SolumMediaBreak />

      {/* 04: What We Do (02 // PROGRAMMES - Stacking sequence) */}
      <SolumServices />

      {/* 05: Showcasing Projects (Selected Projects Asymmetric Exhibition) */}
      <SolumRecentProjects />

      {/* 06: Operational Protocols & FAQ */}
      <SolumFAQ />
    </main>
  );
}
