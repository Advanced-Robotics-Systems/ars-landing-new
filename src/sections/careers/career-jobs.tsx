import { CareerJob } from "@/components";
import { careersJobList } from "@/data";

const CareerJobs = () => {
  return (
    <section className="bg-ice-blue flex flex-col gap-y-5 padding-x md:px-24 2xl:px-[12%] 3xl:px-[20%] 4xl:px-[25%] pb-12 sm:pb-24">
      {careersJobList.map((item, index) => (
        <CareerJob
          title={item.title}
          jobType={item.jobType}
          linkTo={item.linkTo}
          key={index}
        />
      ))}
    </section>
  );
};

export default CareerJobs;
