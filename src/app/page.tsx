import { blogsResourcesData } from "@/data";
import {
  Faq,
  // ARSIndustry,
  // Clients,
  Header,
  Hero,
  LatestResources,
  MobileRobot,
  OS,
  OurMission,
  Solutions,
  WarehouseRef,
} from "@/sections";
// import { client } from "@/utils/contentful/contentful";

// const fetchBlogs = async () => {
//   const result = await client.getEntries({
//     content_type: "blog", // Replace with your actual content type ID
//   });
//   return result.items || []; // Ensure an array is returned
// };

export default async function Home() {
  // const Blogs = await fetchBlogs();
  const Blogs = blogsResourcesData;

  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurMission />
        <Solutions />
        <MobileRobot />
        <OS />
        <WarehouseRef />
        {/* <ARSIndustry /> */}
        {/* <Clients /> */}
        <Faq />
        <LatestResources blogs={Blogs} />
      </main>
    </>
  );
}
