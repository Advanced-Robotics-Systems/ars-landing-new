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
  title: "Advanced Robotics Systems",
  description: "Revolutionising Automation, Driving Innovation",
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
