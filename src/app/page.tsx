"use client";
import {
  ARSIndustry,
  Awards,
  Clients,
  Hero,
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
      <Awards />
    </main>
  );
}
