import {
  ARSIndustry,
  Clients,
  Hero,
  LatestResources,
  MobileRobot,
  OS,
  OurMission,
  Solutions,
} from "@/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurMission />
      <Solutions />
      <MobileRobot />
      <OS />
      <ARSIndustry />
      <Clients />
      <LatestResources />
    </main>
  );
}
