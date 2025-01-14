import FeaturesCard from "@/components/features-card/features-card";
import { featuresData } from "@/data";

const KeyFeatures = () => {
  return (
    <section id="features" className=" padding-responsive">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-midnight-blue mb-5">
        Key Features
      </h2>
      <p className="text-sm leading-normal md:text-base md:leading-normal w-full lg:w-2/3 xl:w-1/2">
        The A-Series is a compact Industrial Mobile Robot. Its compact design
        allows it to navigate through narrow paths and makes it very versatile.
      </p>
      <div className="flex flex-wrap gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-end justify-center mt-16">
        {featuresData.map((feature, index) => (
          <FeaturesCard key={index} img={feature.img} title={feature.title} />
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
