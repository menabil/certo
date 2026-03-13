import Container from "../Container";
import Flex from "../Flex";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const Footer = () => {
  return (
    <section className="py-24 bg-[#02033B]">
      <Container>
        <Flex className={"items-start justify-center gap-x-15"}>
          <div className="text-white">
            <h4 className="text-2xl font-extrabold">Scan. Detect. Remove.</h4>
            <Flex className={"gap-x-10 text-4xl py-12"}>
              <FaTwitterSquare />
              <FaFacebookSquare />
              <FaYoutubeSquare />
            </Flex>
            <Flex className={"gap-x-6 text-sm text-white"}>
              <u>Privacy Policy</u>
              <u>Terms of Service</u>
            </Flex>
            <p className="text-sm pt-9 pb-4.5 w-[380px]">
              Copyright © 2022 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </p>
            <p className="text-sm ">Designed & developed by Bigger Picture</p>
          </div>
          <div className="">
            <div className="text-white text-4xl font-extrabold pb-[25px] border-b border-white pr-[90px]">
              <h3>Certo</h3>
            </div>
            <div className="text-[#FFC247] mt-[60px]">
              <Flex className="font-extrabold text-xl gap-x-6 pb-6">
                <TfiLayoutLineSolid />
                <p>iPhone</p>
              </Flex>
              <Flex className="font-extrabold text-xl gap-x-6 pb-6">
                <TfiLayoutLineSolid />
                <p>Android</p>
              </Flex>
              <Flex className="font-extrabold text-xl gap-x-6 pb-6">
                <TfiLayoutLineSolid />
                <p>Help</p>
              </Flex>
              <Flex className="font-extrabold text-xl gap-x-6 pb-6">
                <TfiLayoutLineSolid />
                <p>About</p>
              </Flex>
              <Flex className="font-extrabold text-xl gap-x-6 pb-6">
                <TfiLayoutLineSolid />
                <p>Insights</p>
              </Flex>
            </div>
          </div>
          <div className="">
            <div className="bg-[url(/src/assets/footerOne.png)] p-10 bg-no-repeat bg-center bg-cover">
              <h4 className="font-extrabold text-2xl text-[#02033B] ">
                Sign up to our newsletter
              </h4>
              <p className="text-sm text-[#02033B] w-[360px] pt-5 pb-9 mr-6">
                Receive the latest mobile security news, exclusive discounts &
                offers straight to your inbox!
              </p>
              <Flex className="rounded-[48px] w-[367px] overflow-hidden ">
                <input
                  type="email"
                  placeholder="Email address"
                  className="outline-none bg-white py-2 px-4"
                />
                <p className="bg-[#02033B] py-2 px-7 text-white font-extrabold cursor-pointer">
                  Submit
                </p>
              </Flex>
            </div>
          </div>
        </Flex>
        <Flex className={"justify-end"}>
          <div className="mt-9 mb-12  py-13 rounded-xl bg-white w-[320px] mr-24"></div>
        </Flex>
        <p className="text-white w-[650px] text-sm ml-24">
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
