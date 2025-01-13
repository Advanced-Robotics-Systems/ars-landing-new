import { privacyPolicy } from "@/data";
import React from "react";

const PrivacyPolicy = () => {
  const policy = privacyPolicy;

  return (
    <div
      className=" w-full padding md:px-16 lg:px-44"
      style={{
        background: `
        linear-gradient(10deg, rgba(5, 144, 200, 0.02) 81.31%, #0D242673 114.45%), 
        linear-gradient(10deg, #D7EFF9 71.31%, #0590C8B3 114.45%)`,
      }}
    >
      <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-deep-blue font-medium mb-5 md:mb-8 lg:mb-10 xl:mb-12">
        {policy.title}
      </h1>

      <div className="space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-7">
        {policy.sections.map((section, index) => (
          <div key={index}>
            {
              <div className="space-y-5 md:space-y-6 lg:space-y-7">
                {/* section title */}
                <h3 className="text-deep-blue text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  {section.title}
                </h3>
                {/* section unordered list if exist */}
                <div className="text-midnight-purple text-xs md:text-sm lg:text-base">
                  <p>{section.list?.title}</p>
                  <ul className="list-disc pl-7 md:pl-8 lg:pl-9 mb-1 md:mb-2 leading-4 md:leading-5 lg:leading-6">
                    {section.list?.listItem.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                {/* section introduction */}
                <div className="space-y-2 md:space-y-3 lg:space-y-4 text-midnight-purple text-xs md:text-sm lg:text-base">
                  {section.introduction.map((content, index) => (
                    <p
                      className="leading-4 md:leading-5 lg:leading-6"
                      key={index}
                    >
                      {content}
                    </p>
                  ))}
                </div>
                {/* section subsections if exist */}
                <div className="space-y-4 md:space-y-5 lg:space-y-6 text-midnight-purple text-xs md:text-sm lg:text-base">
                  {section.subSections?.map((subSection, index) => (
                    <div key={index} className="">
                      <h4 className=" text-sm md:text-base lg:text-lg font-bold">
                        {subSection.title}
                      </h4>
                      <div className=" space-y-4 md:space-y-5 lg:space-y-6">
                        <p className="text-xs md:text-sm lg:text-base mt-[2px] md:mt-[3px] lg:mt-[4px] ">
                          {subSection.subtitle}
                        </p>
                        <div className="space-y-1 md:space-y-2 lg:space-y-3">
                          {subSection.content.map((content, index) => (
                            <p
                              className="leading-2 md:leading-3 lg:leading-4"
                              key={index}
                            >
                              {content}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
