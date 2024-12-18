import heroImage from "@/../../public/home-hero.jpeg";
import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const MobileRobot = () => {
  return (
    <section className="bg-ice-blue px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 3xl:px-44 pt-10 lg:pt-14 xl:pt-20 flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
      <h2 className="text-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
        Autonomous Mobile Robot <br /> Intralogistics
      </h2>
      <div className=" w-full">
        <div
          className=" w-full rounded-t-3xl"
          style={{
            background: `url(${heroImage.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-gradient-to-l from-[#FFFFFF00] to-[#000000B3] h-full rounded-t-3xl text-white flex flex-col justify-center w-72 md:w-80 lg:w-96 space-y-5 p-8 md:p-12 lg:p-16 xl:p-20">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
              Counter UAS
            </h3>
            <hr />
            <p className="text-sm md:text-base">
              No threat goes unseen. Anduril&apos;s open Counter UAS system is
              built to detect, track and intercept unmanned aircraft and
              autonomous drone systems.
            </p>
            <Link href="#">
              <Button
                isIconOnly
                radius="full"
                className="text-white bg-transparent text-xl md:text-2xl font-medium hover:bg-ars-cyan-60"
              >
                {ICONS.arrow_right}
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-around border-t border-ars-cyan">
          <div className="bg-black text-white hover:bg-ars-cyan text-center duration-200 p-2 w-full border-r border-ars-cyan">
            Counter UAS
          </div>
          <div className="bg-black text-white hover:bg-ars-cyan text-center duration-200 p-2 w-full border-r border-ars-cyan">
            Counter UAS
          </div>
          <div className="bg-black text-white hover:bg-ars-cyan text-center duration-200 p-2 w-full">
            Counter UAS
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileRobot;
