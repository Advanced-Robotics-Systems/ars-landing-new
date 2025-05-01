import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/sections";
import NextUIWrapper from "./nextui-wrapper";

const montserrat = Montserrat({
	subsets: ["latin"],
	fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
	title:
		"Advanced Robotics Systems (ARS) | Revolutionizing Automation & Robotics",
	description:
		"Advanced Robotics Systems (ARS) is a leading robotics and automation company based in Riyadh, Saudi Arabia. We specialize in cutting-edge autonomous systems, warehouse robotics, and industrial automation tailored to modern industries.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<NextUIWrapper>
					{children}
					<Footer />
				</NextUIWrapper>
			</body>
		</html>
	);
}
