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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data";
import Image from "next/image";
import { ICONS } from "@/utils/icons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
        setIsExpanded(false);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

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
      <div className=" hidden lg:block">
        <div className="fixed flex top-3 items-center h-16 text-white font-medium z-50 w-full lg:px-16 xl:px-24 2xl:px-36 3xl:px-44">
          <div className="flex justify-between w-full items-center ">
            <div
              className={`${
                isScrolled
                  ? "opacity-0 duration-1000"
                  : "opacity-100 duration-1000"
              }`}
            >
              <Link href="/">
                <Image src={Logo} alt="ARS" className="w-28" />
              </Link>
            </div>
            <div
              className={`relative ${
                isExpanded
                  ? "bg-red-500 lg:w-[760px] xl:w-[840px] h-12  duration-1000"
                  : `${
                      isScrolled
                        ? "bg-red-500 w-20 h-12  duration-1000 "
                        : "bg-red-500 w-0 h-12 duration-1000 "
                    }`
              } `}
            >
              <div className="flex lg:gap-2 xl:gap-4 absolute right-0 top-1/2 transform -translate-y-1/2">
                <ul
                  className={`flex lg:gap-8 xl:gap-10 ${
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
                      {item.name === "Get in Touch" ? (
                        <Button
                          radius="full"
                          className="bg-cyan-blue-30 border border-ars-cyan font-medium lg:px-5 xl:px-6 lg:text-lg hover:text-gray-300 duration-200 "
                        >
                          <Link href={item.link}>{item.name}</Link>
                        </Button>
                      ) : item.name === "Products" ? (
                        <Dropdown>
                          <DropdownTrigger endContent={ICONS.chevron}>
                            <Button className="pr-0" variant="bordered">
                              Products
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu
                            aria-label="Product Categories"
                            variant="solid"
                            className="!rounded-xl shadow-lg"
                          >
                            {/* Section 1: Industrial Mobile Robot */}
                            <DropdownSection
                              title="Industrial Mobile Robot"
                              className="bg-ars-cyan text-white pt-1"
                              classNames={{
                                heading: "py-2 px-4",
                              }}
                            >
                              <DropdownItem
                                key="a-series"
                                className="bg-ars-gray hover:bg-ars-gray/80 text-white py-2 px-4"
                              >
                                <Link href="/products">A Series</Link>
                              </DropdownItem>
                              <DropdownItem
                                key="b-series"
                                className="bg-ars-gray hover:bg-ars-gray/80 text-white py-2 px-4"
                              >
                                <Link href="/products">
                                  B Series (Coming Soon)
                                </Link>
                              </DropdownItem>
                              <DropdownItem
                                key="f-series"
                                className="bg-ars-gray hover:bg-ars-gray/80 text-white py-2 px-4"
                              >
                                F Series (Coming Soon)
                              </DropdownItem>
                            </DropdownSection>
                            {/* Section 2: No Code Software Platform */}
                            <DropdownSection
                              title="No Code Software Platform "
                              className="bg-ars-cyan text-white pt-1"
                              classNames={{
                                heading: "py-2 px-4",
                              }}
                            >
                              <DropdownItem
                                key="arsfm"
                                className="bg-ars-gray hover:bg-ars-gray/80 text-white py-2 px-4"
                              >
                                <Link href="/products/arsFM">arsFM</Link>
                              </DropdownItem>
                              <DropdownItem
                                key="arsos"
                                className="bg-ars-gray hover:bg-ars-gray/80 text-white py-2 px-4"
                              >
                                arsOs (Coming Soon)
                              </DropdownItem>
                            </DropdownSection>
                          </DropdownMenu>
                        </Dropdown>
                      ) : (
                        <Button className="bg-transparent lg:px-1 xl:px-2 lg:text-lg font-medium hover:text-gray-300 duration-200 ">
                          <Link href={item.link}>{item.name}</Link>
                        </Button>
                      )}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={toggleMenu}
                  size="sm"
                  className="bg-transparent my-auto lg:pr-5 xl:pr-7 lg:text-xl hover:text-gray-300 duration-200  "
                >
                  {isExpanded ? ICONS.close : ICONS.menu}
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
        className="lg:hidden fixed py-2"
      >
        <NavbarContent justify="start">
          <NavbarBrand>
            <Link href="/">
              <Image src={Logo} alt="ARS" className="w-16" />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarMenu className="z-50 mt-4">
          {navLinks.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full text-white" href={item.link}>
                {item.name === "Products" ? (
                  <Dropdown>
                    <DropdownTrigger endContent={ICONS.chevron}>
                      <Button className="pl-0" variant="bordered">
                        Products
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Product Categories"
                      variant="solid"
                      className="!rounded-xl shadow-lg"
                    >
                      {/* Section 1: Industrial Mobile Robot */}
                      <DropdownSection
                        title="Industrial Mobile Robot"
                        className="bg-ars-cyan text-white pt-1"
                        classNames={{
                          heading: "py-2 px-4",
                        }}
                      >
                        <DropdownItem
                          key="a-series"
                          className="bg-ars-gray hover:bg-ars-gray/80 text-white py-2 px-4"
                        >
                          <Link href="/products">A Series</Link>
                        </DropdownItem>
                        <DropdownItem
                          key="b-series"
                          className="bg-ars-gray hover:bg-ars-gray/80 text-white py-2 px-4"
                        >
                          <Link href="/products">B Series (Coming Soon)</Link>
                        </DropdownItem>
                        <DropdownItem
                          key="f-series"
                          className="bg-ars-gray hover:bg-ars-gray/80 text-white py-2 px-4"
                        >
                          F Series (Coming Soon)
                        </DropdownItem>
                      </DropdownSection>
                      {/* Section 2: No Code Software Platform */}
                      <DropdownSection
                        title="No Code Software Platform "
                        className="bg-ars-cyan text-white pt-1"
                        classNames={{
                          heading: "py-2 px-4",
                        }}
                      >
                        <DropdownItem
                          key="arsfm"
                          className="bg-ars-gray hover:bg-ars-gray/80 text-white py-2 px-4"
                        >
                          <Link href="/products/arsFM">arsFM</Link>
                        </DropdownItem>
                        <DropdownItem
                          key="arsos"
                          className="bg-ars-gray hover:bg-ars-gray/80 text-white py-2 px-4"
                        >
                          arsOs (Coming Soon)
                        </DropdownItem>
                      </DropdownSection>
                    </DropdownMenu>
                  </Dropdown>
                ) : (
                  item.name
                )}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Header;
