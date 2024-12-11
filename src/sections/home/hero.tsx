"use client";

import heroImage from "@/../../public/home-hero.jpeg";
import { Button } from "@nextui-org/react";

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
        <p className="text-xs lg:text-sm">An ARS Robot Development</p>
        <p className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
          Revolutionising Automation <br /> Driving Innovation
        </p>
        <Button
          size="sm"
          radius="full"
          className="bg-cyan-blue w-32 md:w-40 text-xs md:text-sm text-black font-medium mt-2"
        >
          Our Company
        </Button>
      </div>
    </section>
  );
};

export default Hero;
