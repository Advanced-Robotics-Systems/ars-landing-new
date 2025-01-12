import aboutHeroImage from "@/../../public/about/about-hero.png";

const CompanyHero = () => {
  return (
    <section
      className="flex items-center justify-center h-[300px] md:h-[450px] lg:h-screen w-full padding-x"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${aboutHeroImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 60%",
      }}
    >
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-white font-medium">
        Our <span className="text-cyan-blue">Company</span>
      </h1>
    </section>
  );
};

export default CompanyHero;
