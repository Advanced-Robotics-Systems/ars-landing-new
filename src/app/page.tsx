import { blogsResourcesData } from "@/data";
import {
	Faq,
	// ARSIndustry,
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
// import { client } from "@/utils/contentful/contentful";

// const fetchBlogs = async () => {
//   const result = await client.getEntries({
//     content_type: "blog", // Replace with your actual content type ID
//   });
//   return result.items || []; // Ensure an array is returned
// };

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.arsystems.org"),
	title:
		"Advanced Robotics Systems (ARS) | Revolutionizing Automation & Robotics",
	description:
		"Advanced Robotics Systems (ARS) is a leading robotics and automation company based in Riyadh, Saudi Arabia. We specialize in cutting-edge autonomous systems, warehouse robotics, and industrial automation tailored to modern industries.",
	keywords:
		"Advanced Robotics Systems, ARS, robotics company Saudi Arabia, automation solutions, warehouse robots, autonomous mobile robots, industrial robotics, robotics engineering, AI-driven automation, robotic systems Riyadh",
	openGraph: {
		title: "Advanced Robotics Systems | Robotics & Automation Experts",
		description:
			"Explore next-generation robotics and automation with ARS. We deliver innovative warehouse robotics, mobile platforms, and intelligent automation solutions.",
		url: "https://www.arsystems.org",
		siteName: "Advanced Robotics Systems",
		images: [
			{
				url: "/banner.png",
				width: 1200,
				height: 630,
				alt: "Advanced Robotics Systems - Robotics & Automation Experts",
				type: "image/png",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Advanced Robotics Systems | Leading the Future of Automation",
		description:
			"ARS is revolutionizing industries with cutting-edge robotics and AI-powered automation solutions tailored for operational excellence.",
		images: ["/banner.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://www.arsystems.org",
	},
};

export default async function Home() {
	// const Blogs = await fetchBlogs();
	const Blogs = blogsResourcesData;

	return (
		<>
			<Script
				id="json-ld-organization"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "Advanced Robotics Systems",
						url: "https://www.arsystems.org",
						logo: "https://www.arsystems.org/favicon.png",
						sameAs: [
							"https://www.instagram.com/arsystemsofficial/",
							"https://www.facebook.com/profile.php?id=61562469073840",
							"https://www.linkedin.com/company/advanced-robotics-systems/",
						],
						description:
							"Advanced Robotics Systems (ARS) pioneers intelligent robotics and automation solutions, empowering industries with autonomous mobile robots and smart systems.",
						address: {
							"@type": "PostalAddress",
							streetAddress: "7012 Al Farazdaq St",
							addressLocality: "Ad Dhubbat",
							addressRegion: "Riyadh",
							postalCode: "12627",
							addressCountry: "SA",
						},
						contactPoint: {
							"@type": "ContactPoint",
							telephone: "+966 55 305 3804",
							email: "inquiries@arsystems.org",
							contactType: "Customer Service",
							areaServed: "Worldwide",
							availableLanguage: ["English"],
						},
					}),
				}}
			/>

			<Header />
			<main>
				<Hero />
				<OurMission />
				<Solutions />
				<MobileRobot />
				<OS />
				<WarehouseRef />
				{/* <ARSIndustry /> */}
				{/* <Clients /> */}
				<Faq />
				<LatestResources blogs={Blogs} />
			</main>
		</>
	);
}
