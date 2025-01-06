import {
	AboutBacking,
	AboutHero,
	AboutInfo,
	AboutValues,
	GetInTouch,
	Header,
	JoinOurTeam,
} from "@/sections";

export default function About() {
	return (
		<>
			<Header />
			<main>
				<AboutHero />
				<AboutInfo />
				<AboutValues />
				<AboutBacking />
				<JoinOurTeam showButton />
				<GetInTouch />
			</main>
		</>
	);
}
