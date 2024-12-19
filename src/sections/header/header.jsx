"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (globalThis.scrollY > 20) {
        setIsScrolled(true);
        setIsExpanded(false);
      } else {
        setIsScrolled(false);
      }
    };

    globalThis.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="hidden md:block">
        <div className="fixed top-3 right-0 flex justify-end items-center h-16 bg-transparent text-white font-medium z-50 ">
          <div
            className={` ${
              isExpanded
                ? "bg-red-500 md:w-[600px] lg:w-[650px] h-14  duration-1000"
                : `${
                    isScrolled
                      ? "bg-red-500 w-28 h-14  duration-1000 "
                      : "bg-red-500 w-0 h-14 duration-1000 "
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
                    <Button className="bg-transparent px-2 md:text-xl  lg:text-2xl hover:text-gray-300 duration-200 ">
                      <Link href={item.link}>{item.name}</Link>
                    </Button>
                  </li>
                ))}
              </ul>

              <Button
                onClick={toggleMenu}
                className="bg-transparent px-2 pr-6 md:text-xl lg:text-2xl hover:text-gray-300 duration-200 "
              >
                Menu
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Navbar
        shouldHideOnScroll
        height="3rem"
        onMenuOpenChange={setIsMenuOpen}
        className="md:hidden  bg-transparent fixed  py-3"
      >
        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden bg-red-500 w-24 text-white"
          />
        </NavbarContent>

        <NavbarMenu>
          {navLinks.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full text-white" href={item.link} size="lg">
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default Header;
