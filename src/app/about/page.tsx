import {
  AboutBacking,
  AboutHero,
  AboutInfo,
  AboutValues,
  GetInTouch,
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
      <GetInTouch />
    </main>
  );
}
