import { Button, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

const CareerJob = ({
  title,
  jobType,
  linkTo = "/",
}: {
  title: string;
  jobType: string;
  linkTo?: string;
}) => {
  return (
    <Card
      isBlurred
      className="bg-white/60 rounded-3xl px-3 py-1.5 xs:px-6 xs:py-3"
      shadow="sm"
    >
      <CardBody>
        <div className="flex flex-col xs:flex-row xs:justify-between items-center max-xs:gap-y-3">
          <div className="flex flex-col gap-y-1 xs:gap-y-3">
            <h1 className="text-lg xxs:text-xl sm:text-2xl lg:text-3xl text-center text-[#0D2426]">
              {title}
            </h1>
            <p className="text-base xxs:text-lg sm:text-xl lg:text-lg text-center text-[#979797] font-medium">
              | {jobType}
            </p>
          </div>
          <Button
            as={Link}
            href={linkTo}
            className="bg-cyan-blue/50 text-xs xxs:text-sm sm:text-base font-medium"
            size="md"
            radius="full"
          >
            View Role
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default CareerJob;
