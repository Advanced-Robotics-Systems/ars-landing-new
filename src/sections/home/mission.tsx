"use client";

import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const OurMission = () => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center h-[300px] md:h-[500px] lg:h-screen ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0"
        src="/videos/home-mission-cropped.mp4"
        height={"100%"}
        width={"100%"}
        autoPlay
        loop
        muted
      />
      <div
        className="absolute top-0 left-0 w-full h-full z-10 text-white"
        style={{
          background: `linear-gradient(9deg, rgba(0, 0, 0, 0.00) 10.28%, rgba(0, 0, 0, 0.53) 85.02%, rgba(0, 0, 0, 0.67) 125.34%, #000 172.89%), linear-gradient(280deg, rgba(0, 0, 0, 0.00) 14.76%, rgba(0, 0, 0, 0.25) 75.1%, rgba(0, 0, 0, 0.67) 107.65%, #000 146.04%), linear-gradient(180deg, #0590C899 5%, rgba(130, 130, 126, 0.00) 100%)`,
        }}
      >
        <div className="h-full bg-gradient-to-tl from-[#FFFFFF00] to-[#000000CC] padding-responsive flex flex-col justify-center gap-1 md:gap-3 lg:gap-7">
          <h5 className="text-sm md:text-xl lg:text-2xl">Our Mission</h5>
          <h2 className="text-lg md:text-3xl lg:text-4xl xl:text-5xl font-medium">
            Revolutionizing Industries with <br /> Cutting-Edge Robotics for an
            IR 4.0 <br />
            Future!
          </h2>
          <p className="w-full md:w-2/3 lg:w-1/2 text-xs md:text-sm lg:text-base xl:text-lg mt-2 md:mt-4 lg:mt-5">
            Advanced Robotics System is an Industrial Automation & Robotic
            company focused on the R&D and deployment aspects of Industrial
            Automation. Using our in-house Industrial AMR and automation, we
            target to streamline the factory floor to IR 4.0 category.
          </p>
          <div className="flex gap-2 items-center mt-4 md:mt-6 lg:mt-8">
            <p className="font-semibold">Learn About Us</p>
            <Button
              as={Link}
              href="/company"
              isIconOnly
              radius="full"
              className="bg-ars-cyan-60 text-xs md:text-sm text-white font-medium "
            >
              {ICONS.arrow_right}
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="bg-gradient-to-t from-ice-blue via-[#0590C866] to-ars-cyan-60 h-full text-white">
      </div> */}
    </section>
  );
};

export default OurMission;
