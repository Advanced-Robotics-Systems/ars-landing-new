import { blogsResourcesData } from "@/data";
import { Careers, Contacts, Faq, Header, LatestResources } from "@/sections";

const Contact = () => {
  const Blogs = blogsResourcesData;
  return (
    <>
      <Header />
      <main>
        <Contacts />
        <Careers />
        <Faq />
        <LatestResources blogs={Blogs} />
      </main>
    </>
  );
};

export default Contact;
