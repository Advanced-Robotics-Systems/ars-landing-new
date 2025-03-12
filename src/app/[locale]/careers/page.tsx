import { CareerHero, CareerJobs, Header, JoinOurTeam, LatestResources } from "@/sections";

export default function Career() {
	return (
		<>
			<Header />
			<main>
				<CareerHero />
				<CareerJobs />
				<JoinOurTeam largeTitle />
				<LatestResources />
			</main>
		</>
	);
}
