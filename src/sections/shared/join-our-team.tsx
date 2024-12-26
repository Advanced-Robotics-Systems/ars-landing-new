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
    <section className="flex flex-col items-center gap-y-4 bg-ice-blue padding-x">
      <h1
        className={`${
          largeTitle
            ? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            : "text-3xl sm:text-4xl lg:text-5xl"
        } text-center text-ars-cyan font-semibold`}
      >
        Join Our Team
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-center max-w-[500px]">
        If you&apos;re ready to challenge the conventions of post-production, we
        want to hear from you.
      </p>
      {showButton && (
        <Button
          as={Link}
          href="/career"
          radius="full"
          size="lg"
          endContent={ICONS.arrow_right}
          className="bg-white text-sm text-ars-cyan font-bold w-fit"
        >
          View Careers
        </Button>
      )}
      <div
        className="flex justify-center pt-[7%] xl:pt-[6%] 2xl:pt-[5.5%] 3xl:pt-[5%] 4xl:pt-20 mt-10"
        style={{
          backgroundImage: `url(${arsBgImage.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <Image src={joinTeamImage} alt="Team Picture" className="w-10/12" />
      </div>
    </section>
  );
};

export default JoinOurTeam;
