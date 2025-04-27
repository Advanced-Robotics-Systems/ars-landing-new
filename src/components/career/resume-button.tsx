"use client";

import { ICONS } from "@/utils/icons";
import { Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";

const ResumeButton = ({ link }: { link: string }) => {
  return (
    <Tooltip
      content="Send us your Resume"
      placement="right"
      showArrow
      radius="full"
      classNames={{
        base: ["before:bg-ars-cyan"],
        content: [
          "px-4 py-2 shadow-lg",
          "bg-gradient-to-r from-ars-cyan to-ars-cyan-60 text-sm text-white font-medium",
        ],
      }}
    >
      <Button
        as={Link}
        href={link}
        className="bg-cyan-blue/50 text-xs xxs:text-sm sm:text-base font-medium"
        size="md"
        radius="full"
        isIconOnly
      >
        {ICONS.arrow_right_big}
      </Button>
    </Tooltip>
  );
};

export default ResumeButton;
