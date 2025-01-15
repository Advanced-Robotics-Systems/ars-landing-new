import aboutInfoImage3 from "@/../../public/about/about pic 3.jpeg";
import Image from "next/image";

const CompanyInfo = () => {
  return (
    <section className="bg-ice-blue w-full padding-responsive 2xl:px-[12%] 3xl:px-[20%] 4xl:px-[25%]">
      <div className="flex flex-col lg:flex-row max-lg:gap-y-6 items-center lg:justify-between">
        <Image
          className="lg:basis-1/2 h-60 lg:h-96 max-xs:w-full xs:max-lg:w-96 rounded-lg object-cover object-top"
          src={aboutInfoImage3}
          alt="Robot Image"
        />
        <div className="lg:basis-[45%] flex flex-col gap-y-2">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-ars-cyan font-medium">
              About Us
            </h1>
            <p className="text-justify text-xs leading-normal sm:text-sm sm:leading-normal lg:text-base lg:leading-normal 2xl:text-lg 2xl:leading-normal 4xl:text-xl 4xl:leading-normal">
              Advanced Robotics Systems (ARS) is the up-and-coming provider of
              robotic automation solutions in the GCC, revolutionizing
              industrial processes with innovative technology. Our autonomous
              mobile robot (AMR) fleet and automation systems reduce dependency
              on manual operations, enhancing efficiency and productivity.
              Designed to meet the rigorous GCC standards, our solutions are
              engineered to perform reliably even in extreme heat and dusty
              environments. Our user-friendly, no-code software platform allows
              operators to seamlessly integrate automation systems without
              requiring specialized expertise or production downtime.
            </p>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-ars-cyan font-medium">
              Vision
            </h1>
            <p className="text-justify text-xs leading-normal sm:text-sm sm:leading-normal lg:text-base lg:leading-normal 2xl:text-lg 2xl:leading-normal 4xl:text-xl 4xl:leading-normal">
              We at ARS envision a future where you can operate all your
              facilities with fully automated systems that work together
              seamlessly to produce flawless results. With this vision in mind
              ARS is dedicated to producing the highest quality Autonomous
              Mobile Robots (AMR) that you can implement into your facilities
              with ease using our no-code integration platform.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-lg:gap-y-6 items-center lg:justify-between mt-20 lg:mt-24">
        <div className="lg:basis-[46%]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-ars-cyan">
            Our Mission
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#67829E] font-semibold tracking-tighter">
            Full House Automation
          </h1>
          <p className="text-justify text-xs leading-normal sm:text-sm sm:leading-normal lg:text-base lg:leading-normal 2xl:text-lg 2xl:leading-normal 4xl:text-xl 4xl:leading-normal mt-2">
            At ARS, our mission is to deliver cutting-edge Full House Automation
            solutions designed to transform the way factories operate. By
            seamlessly integrating three powerful systems, we empower businesses
            to achieve remarkable advancements in production output, reduce
            labor costs, and maximize operational efficiency. With ARS,
            innovation meets simplicity, driving progress and profitability for
            our clients.
          </p>
        </div>
        <div className="lg:basis-[47%] flex flex-col items-center gap-y-3 xxs:gap-y-5 lg:gap-y-10">
          <div className="text-sm xxs:text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl text-white font-semibold w-fit px-3 py-1.5 xs:px-6 xs:py-3 lg:px-12 lg:py-6 rounded-full bg-cyan-blue/90">
            Autonomous
            <br />
            Mobile Robots
          </div>
          <div className="translate-x-10 xxs:translate-x-12 xs:translate-x-20 text-sm xxs:text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl text-white font-semibold w-fit px-3 py-1.5 xs:px-6 xs:py-3 lg:px-12 lg:py-6 rounded-full bg-cyan-blue/70">
            Automation System
          </div>
          <div className="text-sm xxs:text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl text-white font-semibold w-fit px-3 py-1.5 xs:px-6 xs:py-3 lg:px-12 lg:py-6 rounded-full bg-cyan-blue/50">
            arsFM & arsOS
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
