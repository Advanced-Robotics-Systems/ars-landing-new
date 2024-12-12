"use client";

import missionImage from "@/../../public/home-mission.gif";
import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";

const OurMission = () => {
  return (
    <section
      className="h-[300px] md:h-[450px] lg:h-[calc(100vh-200px)]  "
      style={{
        background: `url(${missionImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-t from-[#FFFFFFC8] via-[#0590C866] to-ars-cyan-60 h-full text-white">
        <div className="h-full bg-gradient-to-tl from-[#FFFFFF00] to-[#000000CC] padding-responsive flex flex-col justify-center gap-1 md:gap-3 lg:gap-5">
          <h5 className="text-sm md:text-xl lg:text-2xl">Our Mission</h5>
          <h2 className="text-lg md:text-3xl lg:text-4xl xl:text-5xl font-medium">
            Revolutionizing Industries with <br /> Cutting-Edge Robotics for an
            IR 4.0 <br />
            Future!
          </h2>
          <p className="w-full md:w-2/3 lg:w-1/2 text-xs md:text-sm lg:text-base xl:text-lg mt-2 md:mt-4 lg:mt-5">
            Advanced Robotics System is an Industrial Automation & Robotic
            company focused on the R&D and deployment aspects of Industrial
            Automation. Using our in-house robotics and automation system, we
            target to streamline the factory floor to IR 4.0 category.
          </p>
          <div className="flex gap-2 items-center mt-4 md:mt-8 lg:mt-10">
            <p className="font-medium">Learn About Us</p>
            <Button
              isIconOnly
              radius="full"
              className="bg-ars-cyan-60 text-xs md:text-sm text-white font-medium "
            >
              {ICONS.arrow_right}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
