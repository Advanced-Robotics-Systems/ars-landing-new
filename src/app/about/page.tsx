import {
  AboutBacking,
  AboutHero,
  AboutInfo,
  AboutValues,
  JoinOurTeam,
} from "@/sections";

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutInfo />
      <AboutValues />
      <AboutBacking />
      <JoinOurTeam showButton />
    </main>
  );
}
