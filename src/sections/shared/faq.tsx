"use client";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { ICONS } from "@/utils/icons";
import { faqContents } from "@/data";

const Faq = () => {
  const faqData = faqContents;

  return (
    <section className="px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 3xl:px-44 pt-10 lg:pt-14 xl:pt-20 bg-ice-blue font-poppins">
      <div className="px-0 lg:px-16 xl:px-28 2xl:px-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-cyan-blue text-center">
          FAQ
        </h1>
        <h5 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black text-center mt-4 md:mt-6 lg:mt-8">
          Our Automation{" "}
          <span className="text-cyan-blue font-semibold">evolves</span>
        </h5>
        <div className="mt-6 md:mt-8 lg:mt-10 px-0 md:px-2 lg:px-4">
          <Accordion isCompact showDivider={false}>
            {faqData.map((item) => (
              <AccordionItem
                className="mb-4 md:mb-6 lg:mb-8 border-2 border-[#152329] pl-4 md:pl-6 lg:pl-8 pr-2 rounded-lg"
                key={item.id}
                title={
                  <p className=" text-[#272727] text-sm md:text-base lg:text-lg xl:text-xl font-medium">
                    {item?.question}
                  </p>
                }
                content={item?.answer}
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <div className="text-lg md:text-2xl lg:text-3xl xl:text-4xl p-2 lg:p-3 bg-cyan-blue rounded-b-md text-[#272727]">
                      {ICONS.minus_vertical}
                    </div>
                  ) : (
                    <div className="text-lg md:text-2xl lg:text-3xl xl:text-4xl p-2 lg:p-3 bg-deep-blue-35 rounded-r-md text-[#272727]">
                      {ICONS.plus}
                    </div>
                  )
                }
              >
                <div className=" pr-8 md:pr-11 lg:pr-14 py-4 md:py-6 lg:py-8  text-sm md:text-base lg:text-lg font-light leading-5  lg:leading-6 xl:leading-7 text-cyan-blue">
                  {item?.answer}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className=" flex justify-center items-center border-b border-ars-cyan">
          <Button
            variant="bordered"
            radius="full"
            size="sm"
            className="text-deep-blue bg-cyan-blue-30 border border-ars-cyan text-base md:text-lg font-normal md:font-medium md:py-4 md:px-6 lg:py-5 lg:px-7  mb-4 md:mb-6 lg:mb-8"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
