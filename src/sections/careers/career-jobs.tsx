import { CareerJob, ResumeButton } from "@/components";
import { careersJobList } from "@/data";
import { Card, CardBody } from "@nextui-org/react";

const CareerJobs = () => {
  return (
    <section className="bg-ice-blue flex flex-col gap-y-5 padding-responsive 2xl:px-[12%] 3xl:px-[20%] 4xl:px-[25%] pb-12 sm:pb-24">
      {careersJobList.map((item, index) => (
        <CareerJob
          title={item.title}
          jobType={item.jobType}
          linkTo={item.linkTo}
          key={index}
        />
      ))}
      <Card
        isBlurred
        className="bg-white/60 rounded-3xl px-3 py-1.5 xs:px-6 xs:py-3"
        shadow="sm"
      >
        <CardBody>
          <div className="flex flex-col items-center gap-y-3">
            <p className="text-base xxs:text-lg sm:text-xl lg:text-2xl text-justify">
              Don&apos;t see a job posting that matches you skills? No problem!
              We&apos;re always on the lookout for passionate talent. Send us
              your resume, and we&apos;ll reach out if there&apos;s a fit.
            </p>
            <ResumeButton />
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default CareerJobs;
