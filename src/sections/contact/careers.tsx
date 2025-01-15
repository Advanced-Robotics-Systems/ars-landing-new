import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Careers = () => {
  return (
    <section className="bg-ice-blue padding-responsive ">
      <div className="text-center space-y-5 md:space-y-6 lg:space-y-7 border-b border-cyan-blue-50 pb-8 lg:pb-12">
        <h2 className="text-ars-cyan font-medium text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          Careers
        </h2>
        <p className="text-sm md:text-base mx-auto max-w-[400px] md:max-w-[475px]">
          Join ARS and be part of a culturally diverse team shaping the future
          of automation with innovation and purpose!
        </p>
        <Button
          as={Link}
          href="/careers"
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
