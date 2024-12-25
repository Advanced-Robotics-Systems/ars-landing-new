import { Button } from "@nextui-org/react";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center xs:justify-between max-sm:gap-y-4 bg-[#030D2D] padding md:px-24 2xl:px-[12%] 3xl:px-[20%] 4xl:px-[25%]">
      <div className="flex flex-col sm:gap-y-2">
        <h1 className="text-4xl xxs:text-5xl sm:text-6xl lg:text-7xl text-cyan-blue text-center">
          Get In Touch
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-white text-center">
          Have questions about our Automations?
        </p>
      </div>
      <Button
        as={Link}
        href="/contact"
        size="lg"
        radius="full"
        className="text-sm sm:text-base lg:text-lg text-white font-semibold border-2 border-ars-cyan px-10"
        style={{
          background:
            "linear-gradient(0deg, rgba(34, 169, 225, 0.13), rgba(34, 169, 225, 0.13)), linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
        }}
      >
        Contact Us
      </Button>
    </section>
  );
};

export default GetInTouch;
