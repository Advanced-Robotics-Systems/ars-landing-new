import { ICONS } from "@/utils/icons";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";

const AwardCard = ({ title, img }: { title: string; img: string }) => {
  return (
    <Card
      radius="sm"
      shadow="sm"
      className=" w-full md:w-[20rem] lg:w-[18rem] xl:w-[22rem] hover:scale-105 h-full duration-200 border-b border-ars-cyan pb-16 max-w-96"
    >
      <Image
        radius="lg"
        width="100%"
        alt={title}
        className="object-cover object-top h-[10rem] rounded-t-xl "
        src={`${img}`}
      />
      <CardBody className="mt-2">
        <h2 className="text-lg text-indigo font-medium">{title}</h2>
      </CardBody>

      <CardFooter>
        <div className="flex gap-4 items-center">
          <p className="font-medium">Reade More</p>
          <Button
            isIconOnly
            radius="full"
            className="bg-ars-cyan-60 text-xs md:text-sm text-white font-medium "
          >
            {ICONS.arrow_right}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AwardCard;
