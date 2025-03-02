"use client";

import { homeAccordion } from "@/data";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

const WarehouseAccordion = () => {
  const [openKey, setOpenKey] = useState<Set<string>>(new Set(["0"]));

  const handleSelectionChange = (keys: Set<string>) => {
    if (keys.size === 0) return;
    setOpenKey(new Set([Array.from(keys)[0]]));
  };

  return (
    <div className="text-white w-full sm:hidden mt-4 mb-32 xxs:mb-40 xs:mb-56">
      <Accordion
        variant="splitted"
        selectedKeys={openKey}
        onSelectionChange={(keys) => handleSelectionChange(keys as Set<string>)}
        selectionMode="single"
        isCompact
      >
        {homeAccordion.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={item.title}
            title={item.title}
            className="border border-ars-cyan rounded-xl backdrop-blur"
            classNames={{
              indicator: "text-ars-cyan",
              title: "text-base text-ars-cyan font-semibold",
            }}
          >
            <div className="flex flex-col gap-y-3 text-sm">
              <div className="relative w-44 h-32 mx-auto">
                <Image
                  src={item.image}
                  alt={`Accordion Image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw"
                  className="object-contain"
                />
              </div>
              {item.description}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default WarehouseAccordion;
