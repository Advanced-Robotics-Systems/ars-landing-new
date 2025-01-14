import { ICONS } from "@/utils/icons";
import { productsData } from "@/data";
import { Image } from "@nextui-org/react";

const Product = () => {
  return (
    <section className=" padding-responsive flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10">
      {productsData.map((product, index) => (
        <div
          key={index}
          className="bg-[#F8F9FC80] rounded-3xl flex flex-col md:flex-row px-8 md:px-10 lg:px-16 xl:px-32 py-8 md:py-10 gap-8 md:gap-12 lg:gap-20 xl:gap-32 2xl:gap-40 items-center justify-center w-fit"
        >
          <div>
            <Image
              width={0}
              height={0}
              className="w-full md:w-80 lg:w-96"
              src={product.img}
              alt={product.title}
            />
            <h3 className="text-midnight-blue text-2xl md:text-3xl lg:text-4xl font-semibold text-center mt-2">
              {product.title}
            </h3>
          </div>
          <div className="text-midnight-blue text-sm md:text-base w-full md:w-2/3 xl:w-1/2 space-y-1 md:space-y-2 lg:space-y-3">
            <div className="flex justify-between gap-5">
              <p className="font-medium">Dimension:</p>
              <p className="font-semibold">{product.dimension}</p>
            </div>
            <div className="flex justify-between gap-5">
              <p className="font-medium">Max.Lifting Weight:</p>
              <p className="font-semibold">{product.maxLiftingWeight}</p>
            </div>
            <div className="flex justify-between gap-5">
              <p className="font-medium">Max.Towing Weight:</p>
              <p className="font-semibold">{product.maxTowingWeight}</p>
            </div>
            <div className="flex justify-between gap-5">
              <p className="font-medium">Drive type:</p>
              <p className="font-semibold">{product.driveType}</p>
            </div>
            <div className="flex justify-between gap-5">
              <p className="font-medium">Maximum Speed:</p>
              <p className="font-semibold">{product.maxSpeed}</p>
            </div>
            <div className="flex justify-between gap-5">
              <p className="font-medium">Navigation Method:</p>
              <p className="font-semibold">{product.navigationMethod}</p>
            </div>
            <div className="flex justify-between gap-5">
              <p className="font-medium">Runtime:</p>
              <p className="font-semibold">{product.runtime}</p>
            </div>
            <div className="flex justify-between gap-5">
              <p className="font-medium">Full Charge Time:</p>
              <p className="font-semibold">{product.fulChargeTime}</p>
            </div>
            {/* <div className="flex justify-between gap-5">
              <p className="font-medium">Drivers and APIs:</p>
              <p className="font-semibold">{product.driversAndApi}</p>
            </div> */}
            <div className="text-cyan-blue flex gap-1">
              <p className="text-xl">{ICONS.pdf}</p>
              <p>Download specs sheet</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Product;
