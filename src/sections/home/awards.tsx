"use client";
import { AwardCard } from "@/components";
import { awardsData } from "@/data";
import React from "react";

const Awards = () => {
  return (
    <section className="padding-responsive bg-ice-blue flex flex-col items-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
        {awardsData.map((award, idx) => (
          <AwardCard key={idx} title={award.title} img={award.img} />
        ))}
      </div>
    </section>
  );
};

export default Awards;
