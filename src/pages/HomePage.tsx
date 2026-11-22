import { StoryBridge } from "../components/story/StoryBridge";
import { StoryHero } from "../components/story/StoryHero";
import { StoryModel } from "../components/story/StoryModel";
import { StoryProductions } from "../components/story/StoryProductions";
import { StoryProgrammes } from "../components/story/StoryProgrammes";
import { StoryProof } from "../components/story/StoryProof";
import { StoryWhy } from "../components/story/StoryWhy";

/**
 * Homepage v2: one narrative, read top to bottom.
 * Promise → 01 Problem → Stakes → 02 Work → 03 Record → 04 Model → (Footer) Ask
 */
export function HomePage() {
  return (
    <main className="w-full bg-paper text-text-base">
      <StoryHero />
      <StoryWhy />
      <StoryBridge />
      <StoryProgrammes />
      <StoryProof />
      <StoryProductions />
      <StoryModel />
    </main>
  );
}
