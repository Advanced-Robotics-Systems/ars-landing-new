"use client";
import Link from "next/link";
import Logo from "@/assets/images/ARS_2_cropped.png";

import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
  NavbarBrand,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
        setIsExpanded(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className=" hidden md:block">
        <div className="fixed flex top-3 items-center h-16 text-white font-medium z-50 w-full px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 3xl:px-16  ">
          <div className="flex justify-between w-full items-center ">
            <div>
              <Link href="/">
                <Image src={Logo} alt="ARS" className="w-28" />
              </Link>
            </div>
            <div
              className={`relative ${
                isExpanded
                  ? "bg-red-500 md:w-[540px] lg:w-[570px] h-12  duration-1000"
                  : `${
                      isScrolled
                        ? "bg-red-500 w-24 h-12  duration-1000 "
                        : "bg-red-500 w-0 h-12 duration-1000 "
                    }`
              } `}
            >
              <div className="flex gap-4 absolute right-0 top-1/2 transform -translate-y-1/2">
                <ul
                  className={`flex gap-4 ${
                    isExpanded
                      ? "opacity-100 duration-1000"
                      : `${
                          isScrolled
                            ? "opacity-0 duration-1000"
                            : "opacity-100 duration-1000"
                        }`
                  }`}
                >
                  {navLinks.map((item, index) => (
                    <li key={index}>
                      <Button className="bg-transparent px-2 md:text-lg lg:text-xl hover:text-gray-300 duration-200 ">
                        <Link href={item.link}>{item.name}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={toggleMenu}
                  className="bg-transparent px-2 pr-6 md:text-lg lg:text-xl hover:text-gray-300 duration-200 "
                >
                  Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar
        shouldHideOnScroll
        height="2rem"
        onMenuOpenChange={setIsMenuOpen}
        className="md:hidden fixed py-2"
      >
        <NavbarContent justify="start">
          <NavbarBrand>
            <Link href="/">
              <Image src={Logo} alt="White Code" className="w-24" />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden bg-red-500 w-20 h-9 text-white"
          />
        </NavbarContent>

        <NavbarMenu className="z-50 mt-4">
          {navLinks.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full text-white" href={item.link}>
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Header;
