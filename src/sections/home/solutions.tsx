import { solutionsData } from "@/data";
import React from "react";

const Solutions = () => {
  return (
    <section className="bg-ice-blue padding-responsive space-y-8 md:space-y-12 lg:space-y-16">
      <header className="space-y-3 md:space-y-4 lg:space-y-5">
        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
          Dependable Solutions You Can Rely On
        </h3>
        <p className=" w-full lg:w-2/3 xl:w-1/2">
          At ARS, we are dedicated to ensuring your industrial automation
          systems operate seamlessly, delivering optimal performance and
          reliability.
        </p>
      </header>
      <div className="grid grid-cols-2 lg:grid-cols-4  gap-7 md:gap-16 xl:gap-20">
        {solutionsData.map((solution, index) => (
          <article key={index} className="w-full">
            <h1 className="text-3xl md:text-5xl text-ars-cyan">
              {solution.icon}
            </h1>
            <h2 className="text-lg md:text-xl font-semibold md:font-bold mt-3 md:mt-5">
              {solution.title}
            </h2>
            <p className="text-sm md:text-lg mt-2 md:mt-3 leading-normal">
              {solution.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
