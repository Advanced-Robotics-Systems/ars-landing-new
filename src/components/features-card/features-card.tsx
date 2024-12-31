import Image from "next/image";

const FeaturesCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="flex flex-col items-center text-center gap-5 border-gray-800">
      <Image
        width={0}
        height={0}
        src={img}
        alt="Safe 360 LIDAR"
        className={`${title === "Safe 360 LIDAR" ? "w-32" : "w-20"}`}
      />
      <h4 className="text-xl font-semibold max-w-[250px]">{title} </h4>
    </div>
  );
};

export default FeaturesCard;
