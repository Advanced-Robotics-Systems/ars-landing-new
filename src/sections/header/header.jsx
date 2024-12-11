"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
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
    <div className="fixed top-3 right-0 flex justify-end items-center h-10 text-xl bg-transparent text-white font-medium">
      <div
        className={` ${
          isExpanded
            ? "bg-red-500 w-[600px] h-7  duration-1000"
            : `${
                isScrolled
                  ? "bg-red-500 w-20 h-7  duration-1000 "
                  : "bg-red-500 w-0 h-7 duration-1000 "
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
                <Button className="bg-transparent px-2 text-xl hover:text-gray-300 duration-200 ">
                  <Link href={item.link}>{item.name}</Link>
                </Button>
              </li>
            ))}
          </ul>

          <Button
            onClick={toggleMenu}
            className="bg-transparent px-2 text-xl hover:text-gray-300 duration-200 "
          >
            Menu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
