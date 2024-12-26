import { Image, Link } from "@nextui-org/react";
import jarisLogo from "@/../../public/about/jaris-logo.svg";
import inLogo from "@/../../public/about/in-logo.svg";

const AboutBacking = () => {
  return (
    <section className="bg-ice-blue padding">
      <div className="flex flex-col items-center gap-y-10">
        <h1 className="text-3xl xxs:text-4xl sm:text-5xl lg:text-6xl text-ars-cyan text-center font-medium">
          BACKED UP BY
        </h1>
        <div className="flex w-full xxs:w-4/5 md:w-3/5 xl:w-2/5 max-w-[600px] justify-between">
          <Link href="https://jawahirschool.com/" isExternal>
            <Image
              src={jarisLogo.src}
              alt="JARIS Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-28"
            />
          </Link>
          <Image
            src={inLogo.src}
            alt="IN Logo"
            className="h-16 sm:h-20 md:h-24 lg:h-28"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutBacking;
