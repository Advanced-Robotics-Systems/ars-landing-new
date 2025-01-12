import {
  CompanyBacking,
  CompanyHero,
  CompanyInfo,
  CompanyValues,
  GetInTouch,
  Header,
  JoinOurTeam,
} from "@/sections";

export default function Company() {
  return (
    <>
      <Header />
      <main>
        <CompanyHero />
        <CompanyInfo />
        <CompanyValues />
        <CompanyBacking />
        <JoinOurTeam showButton />
        <GetInTouch />
      </main>
    </>
  );
}
