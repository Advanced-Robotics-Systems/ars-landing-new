"use client";

import { ICONS } from "@/utils/icons";
import { Button, Tooltip } from "@nextui-org/react";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

const MobileRobotButton = ({
  title,
  link,
}: {
  title: string;
  link: string;
}) => {
  const t = useTranslations("homepage.mobileRobot.mobileRobotButton");
  const locale = useLocale();

  return (
    <Tooltip
      content={
        title === "A Series"
          ? t("learnTip", { robotTitle: title })
          : t("developmentTip", { robotTitle: title })
      }
      placement={locale === "en" ? "right" : "left"}
      showArrow
      radius="full"
      classNames={{
        base: ["before:bg-ars-gray"],
        content: [
          "px-4 py-2 shadow-lg",
          "bg-ars-gray text-sm text-white font-medium",
        ],
      }}
    >
      <Button
        as={Link}
        href={title == "A Series" ? link : "#mobile-robot-section"}
        isIconOnly
        radius="full"
        className="text-white bg-transparent text-2xl md:text-3xl font-bold -ml-1 hover:bg-ars-cyan-60"
      >
        {ICONS.arrow_right_big}
      </Button>
    </Tooltip>
  );
};

export default MobileRobotButton;
