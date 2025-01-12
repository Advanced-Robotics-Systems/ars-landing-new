"use client";
import { swappableModulesData } from "@/data";
import { Button, Image } from "@nextui-org/react";
import React, { useState } from "react";

const SwappableModules = () => {
  const [activeButton, setActiveButton] = useState("Pallet Lifter");
  const [moduleData, setModuleData] = useState(swappableModulesData[0]);

  const filterModuleData = (title: string) => {
    const selectedModule = swappableModulesData.find(
      (module) => module.title === title
    );
    if (selectedModule) {
      setModuleData(selectedModule);
    } else {
      console.warn("Module not found, reverting to default.");
      setModuleData(swappableModulesData[0]);
    }
  };

  const handleButtonClick = (title: string) => {
    setActiveButton(title);
    filterModuleData(title);
  };
  return (
    <section className=" px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 3xl:px-44 pt-10 lg:pt-14 xl:pt-20">
      <h2 className="text-deep-blue text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-center mb-6 md:mb-8 lg:mb-10">
        Swappable Application <br /> Modules
      </h2>
      <div className="bg-midnight-blue padding-responsive rounded-t-3xl">
        <div className="w-full flex items-center text-white mb-8 lg:mb-10">
          {swappableModulesData.map((module, index) => (
            <Button
              key={index}
              size="sm"
              onPress={() => handleButtonClick(module.title)}
              className={`w-full text-[10px] xxs:text-[12px] xs:text-sm md:text-base ${
                activeButton === module.title
                  ? "border-b border-ars-cyan"
                  : "border-b border-gray-500"
              } `}
            >
              {module.title}
            </Button>
          ))}
        </div>
        <div className="text-white flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-full">
          <div className="">
            <Image
              src={moduleData.img}
              alt={moduleData.title}
              className="w-full"
            />
          </div>

          <div
            className="space-y-4
           md:space-y-5 lg:space-y-6 xl:space-y-8 w-full xl:w-1/3"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              {moduleData.title}
            </h2>
            <div>
              <h4 className="text-base md:text-lg font-medium mb-2">
                Max Payload
              </h4>
              <hr className="border border-[#2B2B2B]" />
              <p className="text-sm md:test-base font-medium mt-4 pl-5">
                Up to {moduleData.maxPayload}
              </p>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-medium mb-2">
                Key Use-Cases
              </h4>
              <hr className="border border-[#2B2B2B]" />
              <ul className="list-disc list-inside text-sm md:test-base font-medium mt-4 pl-5 space-y-2 lg:space-y-3">
                {moduleData.useCases.map((useCase, index) => (
                  <li key={index} className="marker:text-ars-cyan">
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwappableModules;
