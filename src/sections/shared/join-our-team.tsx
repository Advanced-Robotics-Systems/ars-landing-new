import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import joinTeamImage from "@/../../public/team-picture.png";
import arsBgImage from "@/../../public/ars-background.svg";

const JoinOurTeam = ({
  largeTitle = false,
  showButton = false,
}: {
  largeTitle?: boolean;
  showButton?: boolean;
}) => {
  return (
    <section className="flex flex-col items-center gap-y-4 bg-ice-blue padding-x pb-2 sm:pb-4 md:px-24 2xl:px-[12%] 3xl:px-[20%] 4xl:px-[25%]">
      <h1
        className={`${
          largeTitle
            ? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            : "text-3xl sm:text-4xl lg:text-5xl"
        } text-center text-ars-cyan font-semibold`}
      >
        Join Our Team
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-center max-w-[425px] sm:max-w-[475px] lg:max-w-[525px]">
        Join ARS and be part of a culturally diverse team shaping the future of
        automation with innovation and purpose!
      </p>
      {showButton && (
        <Button
          as={Link}
          href="/careers"
          radius="full"
          size="lg"
          endContent={ICONS.arrow_right}
          className="bg-white text-sm text-ars-cyan font-semibold w-fit px-8"
        >
          View Careers
        </Button>
      )}
      <div
        className="pt-[8.5%] mt-10"
        style={{
          backgroundImage: `url(${arsBgImage.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-ice-blue to-transparent to-15% z-10" />
          <Image src={joinTeamImage} alt="Team Picture" className="w-10/12" />
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
