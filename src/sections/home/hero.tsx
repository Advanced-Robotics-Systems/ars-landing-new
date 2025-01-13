"use client";

import heroImage from "@/../../public/home-hero.jpeg";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="h-[300px] md:h-[450px] lg:h-screen w-full "
      style={{
        background: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-tl from-[#FFFFFF00] to-[#000000B3] h-full padding-responsive flex flex-col justify-center gap-2 md:gap-3 text-ars-primary">
        {/* <p className="text-xs lg:text-sm">An ARS Robot Development</p> */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
          Revolutionising Automation <br /> Driving Innovation
        </h2>
        <div>
          <Button
            as={Link}
            href="/company"
            size="md"
            radius="full"
            className="bg-cyan-blue px-9 md:px-12 py-5 md:py-6 font-medium text-ars-gray mt-2"
          >
            Our Company
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
