import Image from "next/image";
import careerHeroImage1 from "@/../../public/careers/career-hero-1.jpg";
import careerHeroImage2 from "@/../../public/careers/career-hero-2.jpg";
import careerHeroImage3 from "@/../../public/careers/career-hero-3.jpg";
import careerHeroImage4 from "@/../../public/careers/career-hero-4.jpg";
import careerHeroImage5 from "@/../../public/careers/career-hero-5.jpg";
import careerHeroImage6 from "@/../../public/careers/career-hero-6.jpg";

const CareerHero = () => {
  return (
    <section
      className="padding md:px-24 2xl:px-[12%] 3xl:px-[20%] 4xl:px-[25%]"
      style={{
        background:
          "linear-gradient(to bottom, rgba(34, 169, 225, 0.5), rgba(215, 239, 249, 1)), linear-gradient(to right top, rgba(5, 144, 200, 0.02), rgba(13, 36, 38, 1))",
      }}
    >
      <h1 className="text-4xl xxs:text-5xl sm:text-6xl lg:text-7xl text-white max-sm:text-center font-medium max-sm:mt-8">
        Work With Us
      </h1>
      <div className="flex flex-col max-sm:gap-y-3 sm:flex-row max-sm:items-center sm:justify-between mt-5">
        <p className="max-sm:text-center sm:basis-1/2 lg:basis-2/5 text-lg sm:text-xl lg:text-2xl text-[#0D2426]">
          Ready to join an exciting, fast-growing fintech scaleup? We&apos;ve
          been waiting for you.
        </p>
        <p className="sm:basis-2/5 lg:basis-1/3 text-deep-blue text-xs sm:text-sm lg:text-base text-justify">
          We&apos;re an international team working across various business
          areas. Roles with Recharge focus on our Group Business and
          Recharge.com brands. Startselect roles focus on our prepaid gaming
          brand Startselect.
        </p>
      </div>
      <div className="flex flex-col md:flex-wrap md:flex-row gap-2 w-full mt-10">
        <Image
          className="rounded-lg object-cover w-full md:w-[49%] h-40 sm:h-60"
          src={careerHeroImage1}
          alt="Image"
        />
        <div className="flex gap-x-2 w-full max-md:justify-center md:w-[49%]">
          <Image
            className="rounded-lg object-cover w-[49%] h-40 sm:h-60"
            src={careerHeroImage2}
            alt="Image"
          />
          <Image
            className="rounded-lg object-cover w-[49%] h-40 sm:h-60"
            src={careerHeroImage3}
            alt="Image"
          />
        </div>
        <div className="flex gap-x-2 w-full max-md:justify-center md:w-[49%]">
          <Image
            className="rounded-lg object-cover w-[49%] h-40 sm:h-60"
            src={careerHeroImage4}
            alt="Image"
          />
          <Image
            className="rounded-lg object-cover w-[49%] h-40 sm:h-60"
            src={careerHeroImage5}
            alt="Image"
          />
        </div>
        <Image
          className="rounded-lg object-cover w-full md:w-[49%] h-40 sm:h-60"
          src={careerHeroImage6}
          alt="Image"
        />
      </div>
    </section>
  );
};

export default CareerHero;
