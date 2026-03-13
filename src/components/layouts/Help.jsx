import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import { FaArrowRightLong } from "react-icons/fa6";

const Help = () => {
  return (
    <section>
      <Container className={"py-[84px] px-9"}>
        <Flex className={"justify-center"}>
          <div className="rounded-[48px] bg-linear-to-b from-[#F7C95F] to-[#FDB235] p-12">
            <h5 className="font-extrabold text-[#02033B] text-2xl">
              Read our story
            </h5>
            <p className="text-[16px] text-[#02033B] w-[360px] pt-6 pb-12">
              Find out why thousands trust Certo to secure their mobile world.
            </p>
            <div className="bg-[#4335DE] rounded-[42px] w-[134px] px-6 py-3.5 text-white text-sm font-extrabold flex items-center">
              About us <FaArrowRightLong className="ml-2" />
            </div>
          </div>
          <div className="pl-[72px]">
            <h3 className="text-2xl text-[#02033B] font-extrabold">
              Help Center
            </h3>
            <p className="text-[#02033B] pt-6 pb-12 w-[200px]">
              Help topics, getting started guides and FAQs.
            </p>
            <Button btnText={"Visit help center"} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Help;
