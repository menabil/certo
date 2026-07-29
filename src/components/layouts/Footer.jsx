import Container from "../Container";
import Flex from "../Flex";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const Footer = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#02033B] px-4 sm:px-6 md:px-0">
      <Container>
        {/* Main Footer Content */}
        <Flex className="flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-8 text-center lg:text-left">
          {/* Column 1: Brand Info & Socials */}
          <div className="text-white w-full lg:w-1/3 flex flex-col items-center lg:items-start px-2 sm:px-0">
            <h4 className="text-xl sm:text-2xl font-extrabold">
              Scan. Detect. Remove.
            </h4>

            <Flex className="gap-x-6 sm:gap-x-8 text-3xl sm:text-4xl py-6 sm:py-8 lg:py-12 justify-center lg:justify-start">
              <FaTwitterSquare className="hover:text-[#FFC247] cursor-pointer transition-colors" />
              <FaFacebookSquare className="hover:text-[#FFC247] cursor-pointer transition-colors" />
              <FaYoutubeSquare className="hover:text-[#FFC247] cursor-pointer transition-colors" />
            </Flex>

            <Flex className="gap-x-6 text-sm text-white justify-center lg:justify-start">
              <a
                href="#"
                className="underline hover:text-[#FFC247] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="underline hover:text-[#FFC247] transition-colors"
              >
                Terms of Service
              </a>
            </Flex>

            <p className="text-xs sm:text-sm pt-6 sm:pt-9 pb-3 max-w-full lg:max-w-[380px] text-white/80">
              Copyright © 2026 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </p>
            <p className="text-xs sm:text-sm text-white/80">
              Designed & developed by Bigger Picture
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="w-full sm:w-auto flex flex-col items-center lg:items-start px-2 sm:px-0">
            <div className="text-white text-3xl sm:text-4xl font-extrabold pb-4 border-b border-white/30 w-full max-w-xs text-center lg:text-left">
              <h3>Certo</h3>
            </div>
            <div className="text-[#FFC247] mt-6 sm:mt-[60px] flex flex-col items-center lg:items-start">
              {["iPhone", "Android", "Help", "About", "Insights"].map(
                (item, index) => (
                  <Flex
                    key={index}
                    className="font-extrabold text-lg sm:text-xl gap-x-4 sm:gap-x-6 pb-4 sm:pb-6 items-center justify-center lg:justify-start hover:opacity-80 cursor-pointer"
                  >
                    <TfiLayoutLineSolid />
                    <p>{item}</p>
                  </Flex>
                ),
              )}
            </div>
          </div>

          {/* Column 3: Newsletter Box */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start px-2 sm:px-0">
            <div className="bg-[url(/src/assets/footerOne.png)] p-6 sm:p-8 md:p-10 bg-no-repeat bg-center bg-cover rounded-3xl flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-[400px]">
              <h4 className="font-extrabold text-xl sm:text-2xl text-[#02033B]">
                Sign up to our newsletter
              </h4>
              <p className="text-xs sm:text-sm text-[#02033B] max-w-full sm:max-w-[360px] pt-3 sm:pt-5 pb-6">
                Receive the latest mobile security news, exclusive discounts &
                offers straight to your inbox!
              </p>
              <Flex className="rounded-full w-full max-w-[367px] overflow-hidden bg-white border border-transparent focus-within:border-[#02033B]">
                <input
                  type="email"
                  placeholder="Email address"
                  className="outline-none bg-white py-2.5 px-4 text-sm w-full text-[#02033B]"
                />
                <button
                  type="button"
                  className="bg-[#02033B] py-2.5 px-5 sm:px-7 text-white text-sm font-extrabold cursor-pointer shrink-0 hover:bg-[#02033B]/90 transition-colors"
                >
                  Submit
                </button>
              </Flex>
            </div>
          </div>
        </Flex>

        {/* Extra Card Box */}
        <Flex className="justify-center lg:justify-end px-2 sm:px-0">
          <div className="mt-8 lg:mt-9 mb-8 lg:mb-12 py-10 sm:py-12 rounded-xl bg-white w-full max-w-[320px]"></div>
        </Flex>

        {/* Disclaimer Text */}
        <p className="text-white/70 max-w-full lg:max-w-[650px] text-xs sm:text-sm text-center lg:text-left mx-auto lg:mx-0 px-2 sm:px-0">
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
          registered in the U.S. and other countries. App Store is a service
          mark of Apple Inc. Android, Google Play and the Google Play logo are
          trademarks of Google LLC.
        </p>
      </Container>
    </section>
  );
};

export default Footer;
