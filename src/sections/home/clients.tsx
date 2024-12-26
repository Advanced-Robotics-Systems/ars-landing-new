"use client";
import { clientData } from "@/data";
import { Image } from "@nextui-org/react";

const Clients = () => {
  return (
    <section className="px-5 md:px-10 lg:px-24 xl:px-32 2xl:px-44 3xl:px-52 py-10 lg:py-14 xl:py-20 bg-ice-blue flex flex-col items-center gap-10">
      <h2 className="text-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
        Trusted By Industry Professionals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-7">
        {clientData.map((client, idx) => (
          <div className="w-60 h-20 flex items-center justify-center" key={idx}>
            <Image radius="md" src={client?.logo} alt="client" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
