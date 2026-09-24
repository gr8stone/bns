import { SolumHero } from '../components/solum/SolumHero';
import { SolumAboutStatement } from '../components/solum/SolumAboutStatement';
import { SolumProspectusDossier } from '../components/solum/SolumProspectusDossier';
import { SolumMediaBreak } from '../components/solum/SolumMediaBreak';
import { SolumServices } from '../components/solum/SolumServices';
import { SolumRecentProjects } from '../components/solum/SolumRecentProjects';
import { SolumFAQ } from '../components/solum/SolumFAQ';

export function HomePage() {
  return (
    <main className="w-full bg-paper text-text-base">
      {/* 01: Signature Civic Hero */}
      <SolumHero />

      {/* 02: Statement & Mission */}
      <SolumAboutStatement />

      {/* 03: Interactive Partnership Prospectus Dossier */}
      <SolumProspectusDossier />

      {/* 04: Cinematic Monochrome Marquee Break */}
      <SolumMediaBreak />

      {/* 05: What We Do (02 // PROGRAMMES — Stacking sequence) */}
      <SolumServices />

      {/* 05: Selected Productions (Asymmetric Exhibition) */}
      <SolumRecentProjects />

      {/* 06: Operational Protocols & FAQ */}
      <SolumFAQ />
    </main>
  );
}
