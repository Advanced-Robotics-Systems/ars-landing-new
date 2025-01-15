"use client";

import industryImageBg from "@/../../public/home-industry-bg.jpeg";
import industryImage from "@/../../public/home-industry.png";
import { Image } from "@nextui-org/react";

const ARSIndustry = () => {
  return (
    <section
      className=" "
      style={{
        background: `url(${industryImageBg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full bg-deep-blue-70 px-5 md:px-10 lg:px-24 xl:px-32 2xl:px-44 3xl:px-52 pt-10 lg:pt-14 xl:pt-20 flex flex-col justify-center gap-1 md:gap-3 lg:gap-5 text-white">
        <div className="flex flex-col lg:flex-row gap-5 md:gap-8 lg:gap-20 xl:gap-24 2xl:gap-36 3xl:gap-40 ">
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl  ">
            Shaping Smarter <br /> Industries, Together.
          </h2>
          <p className=" text-sm leading-normal md:text-base md:leading-normal lg:text-lg lg:leading-normal xl:text-xl xl:leading-normal 2xl:text-2xl 2xl:leading-normal w-full lg:w-[390px] xl:w-[490px] 2xl:w-[600px] mt-1">
            ArsOS is designed to enable operational independence, empowering
            robots to function autonomously with minimal human intervention.
            arsOS allows robots to make real-time decisions, adapt to changing
            environments, and perform complex tasks with high precision.
          </p>
        </div>
        <Image
          className=""
          height="100%"
          width="100%"
          alt="industry"
          src={industryImage.src}
        />
      </div>
    </section>
  );
};

export default ARSIndustry;
