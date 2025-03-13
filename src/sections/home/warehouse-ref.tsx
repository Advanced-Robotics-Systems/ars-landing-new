import Image from "next/image";
import { WarehouseAccordion } from "@/components";
import { getTranslations } from "next-intl/server";

const WarehouseRef = async () => {
  const t = await getTranslations("homepage.warehouseRef");

  return (
    <div
      className="relative isolate w-full min-h-screen lg:min-h-[135vh] flex max-md:flex-col items-start padding-responsive"
      style={{
        backgroundImage: "url('/warehouse-black-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        fill
        src="/warehouse-no-text-no-bg.png"
        alt="Warehouse Picture"
        className="absolute inset-0 object-contain object-bottom -z-10"
      />
      {/* Content Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 lg:gap-20 xl:gap-24 2xl:gap-36 3xl:gap-40 mx-auto text-white">
        {/* Left Column: Title */}
        <div className="flex">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
            {t("title")}
          </h1>
        </div>

        {/* Right Column: Description */}
        <div className="flex">
          <p
            className="text-sm md:text-base lg:text-lg xl:text-xl"
            style={{ lineHeight: 1.5 }}
          >
            {t("description.top")}
            <br />
            {t("description.bottom")}
          </p>
        </div>
      </div>
      <WarehouseAccordion />
    </div>
  );
};

export default WarehouseRef;
