import { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "/src/assets/logo.png";
import { FaChevronDown, FaBars, FaXmark } from "react-icons/fa6";

// Mobile menu toggling custom hook
const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return { isOpen, toggleMenu, closeMenu };
};

const Header = () => {
  // custom hook use kora hocche
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <section className="bg-[#F3F8FF] relative">
      <Container>
        <Flex className="py-4 md:py-6 items-center justify-between">
          {/* Logo Section */}
          <div className="w-32 sm:w-36 pl-3 sm:pl-0">
            <Images imgSrc={Logo} className="w-full h-auto" />
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-[#02033B] p-2 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>

          {/* Desktop & Mobile Menu Area */}
          <div
            className={`${isOpen ? "flex" : "hidden"
              } lg:flex flex-col lg:flex-row absolute lg:relative top-full left-0 w-full lg:w-[80%] bg-[#F3F8FF] lg:bg-transparent p-6 lg:p-0 border-b lg:border-none border-gray-200 shadow-lg lg:shadow-none items-center justify-between z-50 gap-y-6 lg:gap-y-0 duration-300 transition-all`}
          >
            {/* Menu Links */}
            <ul className="flex flex-col lg:flex-row items-center gap-y-4 lg:gap-y-0 lg:gap-x-8 xl:gap-x-12 w-full lg:w-auto text-center">
              <li
                onClick={closeMenu}
                className="font-extrabold text-base xl:text-xl text-[#02033B] hover:text-[#4335DE] cursor-pointer transition-colors"
              >
                iPhone
              </li>
              <li
                onClick={closeMenu}
                className="font-extrabold text-base xl:text-xl text-[#02033B] hover:text-[#4335DE] cursor-pointer transition-colors"
              >
                Android
              </li>
              <li
                onClick={closeMenu}
                className="font-extrabold text-base xl:text-xl text-[#02033B] hover:text-[#4335DE] cursor-pointer transition-colors"
              >
                Help
              </li>
              <li
                onClick={closeMenu}
                className="font-extrabold text-base xl:text-xl text-[#02033B] hover:text-[#4335DE] cursor-pointer transition-colors flex items-center justify-center gap-x-2"
              >
                Company
                <FaChevronDown className="text-sm xl:text-base" />
              </li>
            </ul>

            {/* Action Button */}
            <button
              onClick={closeMenu}
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