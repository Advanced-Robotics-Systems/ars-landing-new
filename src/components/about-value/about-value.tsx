import { JSX } from "react";

const AboutValue = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) => {
  return (
    <div className="md:basis-[48%] lg:basis-[45%] flex items-center gap-x-4">
      <div className="min-w-12 h-12 sm:min-w-16 sm:h-16 lg:min-w-20 lg:h-20 rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center text-2xl sm:text-4xl lg:text-5xl text-ars-cyan bg-white">
        {icon}
      </div>
      <div>
        <h4 className="text-ice-blue text-xs sm:text-sm lg:text-base 2xl:text-lg 4xl:text-xl font-bold">
          {title}
        </h4>
        <p className="text-ice-blue text-xs sm:text-sm lg:text-base 2xl:text-lg 4xl:text-xl mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutValue;
