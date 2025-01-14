"use client";
import { ResourceCard } from "@/components";
import { resourcesData, resourcesCategories } from "@/data";
import { ICONS } from "@/utils/icons";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useState } from "react";

const LatestResources = () => {
  const [resources, setResources] = useState(resourcesData.slice(0, 4));
  const [activeTab, setActiveTab] = useState(resourcesCategories[0]);

  const filterResources = (category: string) => {
    if (category === "All") {
      setResources(resourcesData.slice(0, 4));
    } else {
      setResources(
        resourcesData.filter((resource) => resource.category === category)
      );
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveTab(category);
    filterResources(category);
  };

  const handleRightButton = () => {
    const currentIndex = resourcesCategories.indexOf(activeTab);
    const nextIndex = currentIndex + 1;
    const nextCategory = resourcesCategories[nextIndex];
    setActiveTab(nextCategory);
    filterResources(nextCategory);
  };

  const handleLeftButton = () => {
    const currentIndex = resourcesCategories.indexOf(activeTab);
    const prevIndex = currentIndex - 1;
    const prevCategory = resourcesCategories[prevIndex];
    setActiveTab(prevCategory);
    filterResources(prevCategory);
  };
  return (
    <section className="px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 3xl:px-44 pb-10 lg:pb-14 xl:pb-20 bg-ice-blue  ">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between mb-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-[#272727] font-medium">
          Latest resources
        </h2>

        <ButtonGroup
          radius="full"
          variant="bordered"
          size="sm"
          className="rounded-full border border-deep-blue-20"
        >
          {resourcesCategories.map((category) => (
            <Button
              key={category}
              className={`${
                activeTab === category && "bg-cyan-blue-30"
              } border-l border-deep-blue-20`}
              onPress={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div className="flex items-center md:gap-10 lg:gap-5 xl:gap-10 justify-center">
        <div className="hidden md:block">
          <Button
            isDisabled={activeTab === "All"}
            isIconOnly={true}
            className=" disabled:bg-deep-blue-5 bg-white text-cyan-blue-50 hover:text-white font-medium rounded-l-lg border-r-2 border-cyan-blue hover:bg-cyan-blue-30 duration-300"
            onPress={handleLeftButton}
          >
            {ICONS.arrow_left}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-5 xl:gap-8 2xl:gap-10 3xl:gap-12 4xl:gap-16">
          {resources.map((resource, idx) => (
            <ResourceCard
              key={idx}
              title={resource.title}
              img={resource.img}
              category={resource.category}
              time={resource.time}
            />
          ))}
        </div>
        <div className="hidden md:block">
          <Button
            isDisabled={activeTab === "Case Study"}
            isIconOnly
            className=" disabled:bg-deep-blue-5 bg-white text-cyan-blue-50 hover:text-white font-medium rounded-r-lg border-l-2 border-cyan-blue hover:bg-cyan-blue-30 duration-300"
            onPress={handleRightButton}
          >
            {ICONS.arrow_right}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestResources;
