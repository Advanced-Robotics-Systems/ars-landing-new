import aboutValuesImage from "@/../../public/about/about-values.jpeg";
import { AboutValue } from "@/components";
import { solutionsData } from "@/data";

const AboutValues = () => {
  return (
    <section
      className="padding md:px-24 2xl:px-[12%] 3xl:px-[20%] 4xl:px-[25%]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(39, 169, 225, 0), rgba(39, 169, 225, 0.2)),linear-gradient(0deg, rgba(3, 13, 45, 0.75), rgba(3, 13, 45, 0.75)), url(${aboutValuesImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-ice-blue font-semibold">
          Our Values
        </h1>
        <p className="text-ice-blue text-xs sm:text-sm lg:text-base 2xl:text-lg 4xl:text-xl text-justify max-w-[850px]">
          At ARS, we are dedicated to ensuring your industrial automation
          systems operate seamlessly, delivering optimal performance and
          reliability.
        </p>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row justify-between gap-y-5 xs:gap-y-10 md:gap-y-20 mt-10 lg:padding-x">
        {solutionsData.map((item, index) => (
          <AboutValue
            title={item.title}
            description={item.description}
            icon={item.icon}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutValues;
