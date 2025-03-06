import { Careers, Contacts, Faq, Header, LatestResources } from "@/sections";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <Contacts />
        <Careers />
        <Faq />
        <LatestResources />
      </main>
    </>
  );
};

export default Contact;
