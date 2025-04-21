import Image from "next/image";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import { footerLinks, footerSocials } from "@/data";
import Logo from "@/assets/images/ARS_2_cropped.png";
import { TermsModal } from "@/components";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-primary px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 3xl:px-44 pt-10 lg:pt-14 xl:pt-20 text-white">
      <div className="w-[100%] flex max-lg:flex-col gap-16 items-center justify-between pb-7 md:pb-10 lg:pb-14 border-b border-gray-900">
        <div className="flex flex-col items-center justify-between lg:items-start lg:justify-start gap-4 w-[80%] lg:w-80">
          <div className="flex items-center justify-center">
            <NextLink href="/">
              <Image
                src={Logo}
                width={0}
                height={0}
                alt="ARS"
                className="w-40"
              />
            </NextLink>
          </div>
        </div>

        <div className="flex items-start justify-between gap-7 md:gap-24 lg:gap-28 xl:gap-48">
          <div className="max-w-sm">
            <div className="text-accent  mb-6 lg:mb-8 font-medium text-base md:text-lg uppercase">
              Navigation
            </div>
            <ul id="menu" className="list-none flex flex-col gap-4">
              {footerLinks.navigation.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-accent text-sm md:text-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-sm">
            <div className="text-accent  mb-6 lg:mb-8 font-medium text-base md:text-lg uppercase">
              Helpful links
            </div>
            <ul id="contact" className="list-none flex flex-col gap-4">
              {footerLinks.helpfulLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-accent text-sm md:text-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-sm">
            <div className="text-accent  mb-6 lg:mb-8 font-medium text-base md:text-lg uppercase">
              Resources
            </div>
            <ul id="contact" className="list-none flex flex-col gap-4">
              {footerLinks.resources.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-accent text-sm md:text-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright & policy links */}
      <div className="flex flex-col-reverse lg:flex-row gap-5 md:gap-8 items-center justify-between w-full py-5 lg:py-10">
        <div className="flex items-center justify-between gap-5 w-36 max-md:m-auto">
          {footerSocials.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              isExternal
              size="lg"
              className="text-accent"
            >
              {item.icon}
            </Link>
          ))}
        </div>
        <div className="text-xs md:text-sm">
          &copy;2025 ARS. All rights reserved.
        </div>
        <div className="list-none flex gap-4 md:gap-8">
          {footerLinks.policyLinks.map((item, index) => (
            <li key={index}>
              {item.name.toLowerCase().includes("terms") ? (
                <TermsModal
                  name={item.name}
                  extraStyles="text-xs md:text-sm cursor-pointer"
                />
              ) : (
                <Link
                  href={item.link}
                  isExternal
                  className="text-xs md:text-sm"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
