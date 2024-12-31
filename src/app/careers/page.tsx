import { CareerHero, CareerJobs, Header, JoinOurTeam } from "@/sections";

export default function Career() {
	return (
		<>
			<Header />
			<main>
				<CareerHero />
				<CareerJobs />
				<JoinOurTeam largeTitle />
			</main>
		</>
	);
}
