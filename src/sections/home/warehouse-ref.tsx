import React from "react";

const WarehouseRef = () => {
  return (
    <div
      className="bg-cover bg-center w-full min-h-screen lg:min-h-[135vh] flex items-start padding-responsive"
      style={{ backgroundImage: "url('/warehouse-ref.jpg')" }}
    >
      {/* Content Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-96 mx-auto text-white">
        {/* Left Column: Title */}
        <div className="flex">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl ">
            Take it to the next level on-site.
          </h1>
        </div>

        {/* Right Column: Description */}
        <div className="flex ">
          <p className="text-xs leading-normal md:text-sm md:leading-normal lg:text-base lg:leading-normal xl:text-lg xl:leading-normal">
            A robot alone is just a tool, but when fully integrated into your
            operations, it becomes a transformative solution. Imagine seamless
            autonomous material flows powering your efficiency, smart Fleet
            Management Control software optimizing every move, and end-to-end
            24/7 support ensuring peak performance around the clock. With our
            advanced robotics and intelligent systems, your intralogistics can
            go beyond limits—unlocking new levels of productivity and
            innovation.
            <br />
            The sky isn&apos;t the limit; it&apos;s just the beginning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarehouseRef;
