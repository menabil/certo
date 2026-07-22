

import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "/src/assets/logo.png";
import { FaChevronDown, FaBars, FaTimes } from "react-[#02033B]/80 react-icons/fa6"; // React icons
import { FaBars as FaBarsIcon, FaTimes as FaTimesIcon } from "react-icons/fa";
import { useMobileMenu } from "../utils/navigation";

const Header = () => {
  const { isOpen, toggleMenu } = useMobileMenu();

  return (
    <section className="bg-[#F3F8FF] relative">
      <Container>
        <Flex className="py-4 md:py-6 items-center justify-between">
          {/* Logo Section */}
          <div className="w-32 sm:w-36 lg:w-[20%]">
            <Images imgSrc={Logo} className="w-full h-auto" />
          </div>

          {/* Hamburger Icon for Mobile (320px+) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-[#02033B] p-2 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <FaTimesIcon /> : <FaBarsIcon />}
          </button>

          {/* Desktop & Mobile Menu Area */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row absolute lg:relative top-full left-0 w-full lg:w-[80%] bg-[#F3F8FF] lg:bg-transparent p-6 lg:p-0 border-b lg:border-none border-gray-200 shadow-lg lg:shadow-none items-center justify-between z-50 gap-y-6 lg:gap-y-0 duration-300 transition-all`}
          >
            {/* Menu Links */}
            <ul className="flex flex-col lg:flex-row items-center gap-y-4 lg:gap-y-0 lg:gap-x-8 xl:gap-x-12 w-full lg:w-auto text-center">
              <li className="font-extrabold text-base xl:text-xl text-[#02033B] hover:text-[#4335DE] cursor-pointer transition-colors">
                iPhone
              </li>
              <li className="font-extrabold text-base xl:text-xl text-[#02033B] hover:text-[#4335DE] cursor-pointer transition-colors">
                Android
              </li>
              <li className="font-extrabold text-base xl:text-xl text-[#02033B] hover:text-[#4335DE] cursor-pointer transition-colors">
                Help
              </li>
              <li className="font-extrabold text-base xl:text-xl text-[#02033B] hover:text-[#4335DE] cursor-pointer transition-colors flex items-center justify-center gap-x-2">
                Company
                <FaChevronDown className="text-sm xl:text-base" />
              </li>
            </ul>

            {/* Action Button */}
            <button
              className="w-full sm:w-auto font-extrabold lg:ml-6 xl:ml-12 py-2.5 px-6 xl:py-3.5 xl:px-8 rounded-full bg-[#4335DE] text-white border-2 border-[#4335DE] hover:bg-transparent hover:text-[#4335DE] duration-300 cursor-pointer text-sm xl:text-base"
            >
              Sign in
            </button>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Header;





















