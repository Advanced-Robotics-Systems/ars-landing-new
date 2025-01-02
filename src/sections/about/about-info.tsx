import aboutInfoImage from "@/../../public/about/about-info.png";
import Image from "next/image";

const AboutInfo = () => {
  return (
    <section className="bg-ice-blue w-full padding md:px-24 2xl:px-[12%] 3xl:px-[20%] 4xl:px-[25%]">
      <div className="flex flex-col lg:flex-row max-lg:gap-y-6 items-center lg:justify-between">
        <Image
          className="lg:basis-1/2 h-60 lg:h-96 max-xs:w-full xs:max-lg:w-96 rounded-lg"
          src={aboutInfoImage}
          alt="Robot Image"
        />
        <div className="lg:basis-[45%] flex flex-col gap-y-2">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-ars-cyan font-medium">
              About Us
            </h1>
            <p className="text-justify text-xs leading-normal sm:text-sm sm:leading-normal lg:text-base lg:leading-normal 2xl:text-lg 2xl:leading-normal 4xl:text-xl 4xl:leading-normal">
              Advanced Robotics System was established by a team of passionate
              robot enthusiasts dedicated to leveraging cutting-edge
              technologies to create machines and robots that meet clients&apos;
              needs in various industrial sectors. The startup was founded in
              2020, focusing on industrial robot development and production.
            </p>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-ars-cyan font-medium">
              Vision
            </h1>
            <p className="text-justify text-xs leading-normal sm:text-sm sm:leading-normal lg:text-base lg:leading-normal 2xl:text-lg 2xl:leading-normal 4xl:text-xl 4xl:leading-normal">
              Advanced Robotics System is an Industrial Automation & Robotic
              company focused on the R&D and deployment aspects of Industrial
              Automation. Using our in-house robotics and automation system, we
              target to streamline the factory floor to IR 4.0 category.
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
            Revolutionising Automation with ARS
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
        <div className="lg:basis-[47%] flex flex-col gap-y-3 xxs:gap-y-5 lg:gap-y-10">
          <div className="text-sm xxs:text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl text-white font-semibold w-fit px-3 py-1.5 xs:px-6 xs:py-3 lg:px-12 lg:py-6 rounded-full bg-cyan-blue/50">
            Intralogistics,
            <br />
            Transportation Systems
          </div>
          <div className="translate-x-10 xxs:translate-x-12 xs:translate-x-20 text-sm xxs:text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl text-white font-semibold w-fit px-3 py-1.5 xs:px-6 xs:py-3 lg:px-12 lg:py-6 rounded-full bg-cyan-blue/70">
            Automation System
          </div>
          <div className="text-sm xxs:text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl text-white font-semibold w-fit px-3 py-1.5 xs:px-6 xs:py-3 lg:px-12 lg:py-6 rounded-full bg-cyan-blue/90">
            Monitoring Software,
            <br />
            eg. MES
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
