import { blogsResourcesData } from "@/data";
import {
  CareerHero,
  CareerJobs,
  Header,
  JoinOurTeam,
  LatestResources,
} from "@/sections";

export default function Career() {
  const Blogs = blogsResourcesData;
  return (
    <>
      <Header />
      <main>
        <CareerHero />
        <CareerJobs />
        <JoinOurTeam largeTitle />
        <LatestResources blogs={Blogs} />
      </main>
    </>
  );
}
