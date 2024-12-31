"use client";
import { blogsResourcesData, resourcesCategories } from "@/data";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useState } from "react";
import { BlogCard } from "@/components";

const Resources = () => {
  const [resources, setResources] = useState(blogsResourcesData);
  const [activeTab, setActiveTab] = useState(resourcesCategories[0]);

  const filterResources = (category: string) => {
    if (category === "All") {
      setResources(blogsResourcesData);
    } else {
      setResources(
        blogsResourcesData.filter((resource) => resource.category === category)
      );
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveTab(category);
    filterResources(category);
  };
  return (
    <section className="bg-ice-blue padding-responsive">
      <div className="bg-[#FFFFFFD9] px-3 py-7 md:px-7 md:py-10 lg:px-8 lg:py-12 xl:px-10 xl:py-14 rounded-3xl ">
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
        <div>
          {resources.map((resource, index) => (
            <BlogCard
              key={index}
              title={resource.title}
              img={resource.img}
              category={resource.category}
              description={resource.description}
              time={resource.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;