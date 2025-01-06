import { Careers, Contacts, Header, LatestResources } from "@/sections";

const Contact = () => {
	return (
		<>
			<Header />
			<main>
				<Contacts />
				<Careers />
				<LatestResources />
			</main>
		</>
	);
};

export default Contact;
