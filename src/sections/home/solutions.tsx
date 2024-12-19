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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 md:gap-16 xl:gap-20">
        {solutionsData.map((solution, index) => (
          <article key={index} className="w-4/5 md:w-full">
            <h1 className="text-5xl font-bold text-ars-cyan">
              {solution.icon}
            </h1>
            <h2 className="text-xl font-bold mt-5">{solution.title}</h2>
            <p className="text-lg mt-3 ">{solution.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
