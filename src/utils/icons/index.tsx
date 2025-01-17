import { AiOutlineClose, AiOutlineFilePdf } from "react-icons/ai";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaSquareFacebook,
} from "react-icons/fa6";
import { GiMeditation } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { HiOutlineArrowRight, HiOutlineSquare2Stack } from "react-icons/hi2";
import { LuUsers } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { TfiHome } from "react-icons/tfi";
import { FaChevronDown } from "react-icons/fa6";

export const ICONS = {
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  linkedin_test: <FaLinkedinIn />,
  facebook: <FaSquareFacebook />,
  facebook_test: <FaFacebookF />,
  arrow_right: <FaLongArrowAltRight />,
  arrow_left: <FaLongArrowAltLeft />,
  home: <TfiHome />,
  user: <LuUsers />,
  square: <HiOutlineSquare2Stack />,
  meditaion: <GiMeditation />,
  pdf: <AiOutlineFilePdf />,
  menu: <RiMenu3Fill />,
  close: <AiOutlineClose />,
  dot: <GoDotFill />,
  arrow_right_big: <HiOutlineArrowRight />,
  arrow_bottom: <HiOutlineArrowNarrowDown />,
  chevron: <FaChevronDown />,
};
