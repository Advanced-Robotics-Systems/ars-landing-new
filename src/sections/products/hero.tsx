"use client";
import heroImage from "@../../../public/A300 Blink GIF.gif";
import { Button, Image } from "@nextui-org/react";
import { ICONS } from "@/utils/icons";
import { motion } from "framer-motion";
import Link from "next/link";

const ProductsHero = () => {
  return (
    <section className="px-5 md:px-10 lg:px-16 xl:px-40 2xl:px-64 3xl:px-96 py-16 md:py-20 lg:py-20">
      <div className="h-full flex flex-col md:flex-row items-center justify-center rounded-2xl mt-10 lg:mt-7">
        <div className="md:w-3/5 md:h-[470px] lg:h-[510px] xl:h-[550px] lg:w-2/3 bg-white flex items-center justify-center rounded-t-2xl md:rounded-r-none md:rounded-l-3xl">
          <Image
            className="lg:-mb-14 rounded-t-2xl md:rounded-l-3xl h-full w-full"
            src={heroImage.src}
            alt="ARS A300"
          />
        </div>
        <motion.div
          className="bg-[#F8F9FC80] text-midnight-blue md:w-2/5 lg:w-1/3 md:h-[470px] lg:h-[510px] xl:h-[550px] rounded-b-2xl md:rounded-l-none md:rounded-r-3xl p-5 lg:p-8 space-y-3 md:space-y-5 lg:space-y-8 xl:space-y-10 flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ars-cyan">
            A Series
          </h1>
          <p className="text-sm md:text-[16px] md:leading-6">
            Advanced Robotics System was established by a team of passionate
            robot enthusiasts dedicated to leveraging cutting-edge technologies
            to create machines and robots that meet client&apos;s needs in
            various industrial sectors. The startup was founded in 2020,
            focusing on industrial robot development and production.
          </p>
          <div className="flex gap-4 items-center group">
            <Button
              as={Link}
              href="#features"
              isIconOnly
              radius="full"
              className="bg-ars-cyan-60 text-xl group-hover:pt-2 duration-300 text-white font-medium"
            >
              {ICONS.arrow_bottom}
            </Button>
            <p className="opacity-0 group-hover:opacity-100 duration-300 font-semibold">
              See More
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsHero;
