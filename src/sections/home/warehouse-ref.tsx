import Image from "next/image";
import { WarehouseAccordion } from "@/components";

const WarehouseRef = () => {
  return (
    <div
      className="relative isolate w-full xl::min-h-screen flex flex-col justify-between gap-0 md:gap-14 lg:gap-16 xl:gap-20 px-3 xxs:px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 3xl:px-44 pt-10 lg:pt-14 xl:pt-20"
      style={{
        backgroundImage: "url('/warehouse-black-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 lg:gap-20 xl:gap-24 2xl:gap-36 3xl:gap-40 mx-auto text-white">
        {/* Left Column: Title */}
        <div className="flex">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
            Take it to the next level on-site.
          </h1>
        </div>

        {/* Right Column: Description */}
        <div className="flex">
          <p
            className="text-sm md:text-base lg:text-lg xl:text-xl"
            style={{ lineHeight: 1.5 }}
          >
            A robot alone is just a tool, but when fully integrated into your
            operations, it becomes a transformative solution. Imagine seamless
            autonomous material flows powering your efficiency, smart Fleet
            Management Control software optimizing every move, and end-to-end
            24/7 support ensuring peak performance around the clock. Unlocking
            new levels of productivity and innovation.
            <br />
            The sky isn&apos;t the limit; it&apos;s just the beginning.
          </p>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <Image
          width={1500}
          height={1500}
          src="/Warehouse-No-Text-No-Background.png"
          alt="Warehouse Picture"
          className=" w-full"
        />
      </div>
      <WarehouseAccordion />
    </div>
  );
};

export default WarehouseRef;
