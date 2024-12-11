import React from "react";
import Logo from "@/assets/images/ARS_2_cropped.png";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { footerLinks, footerSocials } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-primary padding-responsive md:px-36 text-white">
      <div className="w-[100%] flex max-lg:flex-col gap-16 items-center justify-between mb-16 lg:mb-40">
        <div className="flex flex-col items-center justify-between lg:items-start lg:justify-start gap-4 w-[80%] lg:w-80">
          <div className="flex items-center justify-center">
            <Image
              src={Logo}
              width={0}
              height={0}
              alt="White Code"
              className="w-60"
            />
          </div>
        </div>

        <div className="flex items-start justify-between gap-48">
          {/* Navigation */}
          <div className="max-w-sm">
            <div className="text-accent  mb-8 lg:mb-12 tracking-widest text-medium md:text-lg">
              Menu
            </div>
            <ul id="menu" className="list-none flex flex-col gap-4">
              {footerLinks.navigation.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-accent  font-[300] text-sm md:text-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div className="max-w-sm">
            <div className="text-accent mb-8 lg:mb-12 tracking-widest text-medium md:text-lg">
              Contact
            </div>
            <ul id="contact" className="list-none flex flex-col gap-4">
              {footerLinks.helpfulLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-accent font-[300] text-sm md:text-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/*Resources  */}
          <div className="max-w-sm">
            <div className="text-accent mb-8 lg:mb-12 tracking-widest text-medium md:text-lg">
              Contact
            </div>
            <ul id="contact" className="list-none flex flex-col gap-4">
              {footerLinks.resources.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-accent font-[300] text-sm md:text-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright and socials */}
      <div className="flex max-md:flex-col-reverse max-md:gap-8 items-center justify-between w-[100%]">
        <div className="flex items-center justify-between gap-5 w-36 max-md:m-auto">
          {footerSocials.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              size="lg"
              className="text-accent"
            >
              {item.icon}
            </Link>
          ))}
        </div>
        <div className="text-xs">&copy;2024 ARS. All rights reserved.</div>
        <div className="list-none flex gap-8">
          {footerLinks.policyLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="text-sm md:text-medium">
                {item.name}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
