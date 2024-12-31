import {
	ARSIndustry,
	Clients,
	Header,
	Hero,
	LatestResources,
	MobileRobot,
	OS,
	OurMission,
	Solutions,
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
				<ARSIndustry />
				<Clients />
				<LatestResources />
			</main>
		</>
	);
}
