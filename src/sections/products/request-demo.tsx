import { Button } from "@nextui-org/react";
import React from "react";

const RequestDemo = () => {
  return (
    <section className="bg-deep-blue">
      <div className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-44 3xl:px-56 py-10 lg:py-14 xl:py-20 flex flex-col lg:flex-row items-center justify-between  gap-6 md:gap-8 lg:gap-10 ">
        <div className="text-white">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-2">
            Ready to automate your supply chain?
          </h3>
          <p>Reach out to schedule a personalized demo</p>
        </div>
        <Button radius="full" className="bg-white text-ars-cyan font-semibold">
          Request a demo
        </Button>
      </div>
    </section>
  );
};

export default RequestDemo;
