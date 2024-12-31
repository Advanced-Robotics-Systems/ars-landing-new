import Image from "next/image";
import heroImg from "@/../public/home-hero.jpeg";
import { Button } from "@nextui-org/react";
import { ICONS } from "@/utils/icons";
const BlogsHero = () => {
  return (
    <section className="bg-gradient-to-tr from-white to-ars-cyan  ">
      <div className="bg-gradient-to-tr from-ice-blue to-[#FFFFFF33] h-full padding-responsive">
        <div className="mt-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-medium">
            Resources
          </h1>
          <div className="flex flex-col md:flex-row justify-between gap-8 mt-4 md:mt-6 lg:mt-8">
            <h5 className="max-w-xs text-xl font-medium text-[#0D2426]">
              Ready to join an exciting, fast- growing fintech scaleup?
              We&pos;ve been waiting for you.
            </h5>
            <p className="max-w-sm text-deep-blue">
              We&apos;re an international team working across various business
              areas. Roles with Recharge focus on our Group Business and
              Recharge.com brands. Startselect roles focus on our prepaid gaming
              brand Startselect.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center lg:gap-5 xl:gap-8 mt-12 ">
          <Button
            isIconOnly
            className="hidden lg:block bg-white text-cyan-blue-50 font-medium rounded-l-lg border-r-4 border-cyan-blue-30 hover:bg-deep-blue-20 duration-300"
          >
            {ICONS.arrow_left}
          </Button>
          <div className="bg-[#FFFFFF33] p-4 md:p-6 lg:p-8 rounded-3xl ">
            <Image
              src={heroImg}
              alt="hero image"
              className="rounded-3xl border-t-4 border-ars-cyan h-[200px] md:h-[350px] lg:h-[450px] xl:h-[500px] w-full"
            />
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-deep-blue mt-5 md:mt-6 mb-3 md:mb-4">
              Testing UX: Best Practices and Strategies
            </h1>
            <div className="flex flex-col lg:flex-row gap-10 justify-between items-end">
              <p className="text-[#1D2227] text-sm md:text-base w-full lg:w-3/4">
                This article explores the vital role of UX testing in delivering
                exceptional user experiences in software products. By
                identifying usability issues and optimizing user interactions,
                effective UX testing is key to success in today&apos;s digital
                world. We&apos;ll cover best practices and strategies used by QA
                testers, offering real-world examples and actionable insights to
                help readers improve their UX testing skills and enhance their
                project&apos;s success.
              </p>
              <div className="flex gap-10 items-center justify-between w-full lg:w-1/4">
                <p className="text-deep-blue font-medium">
                  Case Study <br />
                  <span className="text-[#67829E]">3 min read</span>
                </p>
                <Button
                  isIconOnly
                  radius="full"
                  className="bg-ars-cyan-60 text-deep-blue font-medium "
                >
                  {ICONS.arrow_right}
                </Button>
              </div>
            </div>
          </div>
          <Button
            isIconOnly
            className="hidden lg:block bg-white text-cyan-blue-50 font-medium rounded-r-lg border-l-4 border-cyan-blue-30 hover:bg-deep-blue-20 duration-300"
          >
            {ICONS.arrow_right}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;
