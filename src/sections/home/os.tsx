"use client";

import OsImage from "@/../../public/home-os.jpeg";
import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";

const OS = () => {
  return (
    <section
      className="h-[500px] md:h-[600px] lg:h-screen "
      style={{
        background: `url(${OsImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full bg-[#000000B3] padding-responsive flex flex-col justify-center gap-1 md:gap-3 lg:gap-5 text-white">
        <h5 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-cyan-blue">
          ARS OS
        </h5>
        <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl w-full md:w-4/5 lg:w-3/4 xl:w-3/5 2xl:w-1/2">
          A versatile and user-friendly operating system designed to streamline
          robotic functionalities
        </h2>
        <p className="w-full md:w-2/3 lg:w-1/2 text-xs md:text-sm lg:text-base xl:text-lg mt-2 md:mt-4 lg:mt-5">
          arsOS is designed to enable operational independence, empowering
          robots to function autonomously with minimal human intervention. arsOS
          allows robots to make real-time decisions, adapt to changing
          environments, and perform complex tasks with high precision. Built-in
          self-monitoring and diagnostic tools ensure that robots can identify
          and resolve issues proactively, minimizing downtime and maintenance
          needs.
        </p>
        <div className="flex gap-4 items-center mt-4 md:mt-8 lg:mt-10">
          <p className="font-medium">Learn About ARS OS</p>
          <Button
            isIconOnly
            radius="full"
            className="bg-ars-cyan-60 text-xs md:text-sm text-white font-medium "
          >
            {ICONS.arrow_right}
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <p className="font-medium">Learn About ARS OS</p>
          <Button
            isIconOnly
            radius="full"
            className="bg-ars-cyan-60 text-xs md:text-sm text-white font-medium "
          >
            {ICONS.arrow_right}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OS;
