import React from "react";

const WarehouseRef = () => {
  return (
    <div
      className="bg-cover bg-center w-full min-h-screen lg:min-h-[135vh] flex items-start px-6 lg:px-24 py-12 md:py-36 lg:py-48"
      style={{ backgroundImage: "url('/warehouse-ref.jpg')" }}
    >
      {/* Content Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-96 mx-auto text-white">
        {/* Left Column: Title */}
        <div className="flex items-center">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Take it to the next level on-site.
          </h1>
        </div>

        {/* Right Column: Description */}
        <div className="flex items-center">
          <p className="text-sm lg:text-lg leading-relaxed text-justify">
            A robot alone is just a tool, but when fully integrated into your
            operations, it becomes a transformative solution. Imagine seamless
            autonomous material flows powering your efficiency, smart Fleet
            Master Control software optimizing every move, and end-to-end 24/7
            support ensuring peak performance around the clock. With our
            advanced robotics and intelligent systems, your intralogistics can
            go beyond limits—unlocking new levels of productivity and
            innovation.
						<br/ >
            The sky isn&apos;t the limit; it&apos;s just the beginning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarehouseRef;
