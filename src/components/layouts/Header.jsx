import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "/src/assets/logo.png";
import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className={"bg-[#F3F8FF]"}>
      <Container>
        <Flex className={"py-6"}>
          <div className="w-[20%]">
            <Images imgSrc={Logo} />
          </div>
          <Flex className={"w-[80%] justify-end"}>
            <ul className="flex gap-x-12">
              <li className="font-extrabold text-xl text-[#02033B]">iPhone</li>
              <li className="font-extrabold text-xl text-[#02033B]">Android</li>
              <li className="font-extrabold text-xl text-[#02033B]">Help</li>
              <li className="font-extrabold text-xl text-[#02033B] flex items-center">
                Company
                <div className="pl-2 text-xl font-bold">
                  <FaChevronDown />
                </div>
              </li>
            </ul>
            <div
              className={
                "font-extrabold ml-24 py-3.5 px-6 rounded-[100px] bg-[#4335DE] text-white border-2 border-[#4335DE] hover:bg-transparent hover:border-2-[#4335DE] hover:text-[#4335DE] duration-500 cursor-pointer"
              }
            >
              Sign in
            </div>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
