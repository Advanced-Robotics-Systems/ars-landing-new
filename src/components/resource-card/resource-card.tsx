import { ICONS } from "@/utils/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
} from "@nextui-org/react";
import React from "react";

const ResourceCard = ({
  title,
  img,
  category,
  time,
}: {
  title: string;
  img: string;
  category: string;
  time: string;
}) => {
  return (
    <Card
      radius="sm"
      shadow="sm"
      className="hover:scale-105 h-full duration-200 border-b border-ars-cyan pb-10 max-w-96"
    >
      <Image
        radius="lg"
        width="100%"
        alt={title}
        className="object-cover object-top h-[10rem] rounded-t-xl "
        src={`${img}`}
      />
      <CardBody className="mt-2">
        <div className="flex gap-3 mb-2">
          <Chip
            color="warning"
            size="sm"
            variant="dot"
            className="bg-white text-[#67829E] uppercase text-sm"
          >
            {category}
          </Chip>
          <Chip
            color="warning"
            variant="dot"
            size="sm"
            className="text-cyan-blue-50 uppercase text-sm"
          >
            {time}
          </Chip>
        </div>
        <h2 className="text-lg text-indigo font-medium">{title}</h2>
      </CardBody>

      <CardFooter>
        <div className="flex gap-4 items-center">
          <p className="font-medium">Read More</p>
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

export default ResourceCard;
