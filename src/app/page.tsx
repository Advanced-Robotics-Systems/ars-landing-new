import {
  ARSIndustry,
  // Clients,
  Header,
  Hero,
  LatestResources,
  MobileRobot,
  OS,
  OurMission,
  Solutions,
  WarehouseRef,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurMission />
        <Solutions />
        <MobileRobot />
        <OS />
        <WarehouseRef />
        <ARSIndustry />
        {/* <Clients /> */}
        <LatestResources />
      </main>
    </>
  );
}
