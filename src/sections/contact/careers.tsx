import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import React from "react";

const Careers = () => {
  return (
    <section className="bg-ice-blue padding-responsive ">
      <div className="text-center space-y-5 md:space-y-6 lg:space-y-7 border-b border-cyan-blue-50 pb-8 lg:pb-12">
        <h2 className="text-ars-cyan font-medium text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          Careers
        </h2>
        <p className="text-sm md:text-base">
          If you&apos;re ready to challenge the conventions of post- <br />
          production, we want to hear from you.
        </p>
        <Button
          className="bg-white text-ars-cyan font-medium"
          radius="full"
          endContent={ICONS.arrow_right}
        >
          View Careers
        </Button>
      </div>
    </section>
  );
};

export default Careers;
