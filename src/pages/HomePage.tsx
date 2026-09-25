import { SolumAboutStatement } from "../components/solum/SolumAboutStatement";
import { SolumHero } from "../components/solum/SolumHero";
import { SolumMediaBreak } from "../components/solum/SolumMediaBreak";
import { SolumRecentProjects } from "../components/solum/SolumRecentProjects";
import { SolumServices } from "../components/solum/SolumServices";

export function HomePage() {
  return (
    <main className="w-full bg-paper text-text-base">
      <SolumHero />
      <SolumAboutStatement />
      <SolumMediaBreak />
      <SolumServices />
      <SolumRecentProjects />
      {/* <SolumFAQ /> */}
    </main>
  );
}
