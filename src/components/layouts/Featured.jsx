import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import LogoOne from "/src/assets/cnbc.png";
import LogoTwo from "/src/assets/newYork.png";
import LogoThr from "/src/assets/fT.png";
import LogoFor from "/src/assets/rD.png";
import LogoFiv from "/src/assets/zDnet.png";
import LogoSix from "/src/assets/wired.png";
import { IoStar } from "react-icons/io5";

const Featured = () => {
  return (
    <section className="bg-linear-to-b from-[#F7C95F] to-[#FDB235]">
      <Container className={"md:py-[84px] py-10"}>
        <h3 className="md:text-4xl text-[26px] text-[#02033B] md:w-[565px] w-[285px] font-extrabold md:mx-0 md:text-left mx-auto text-center">
          Loved by thousands of iPhone and Android users alike
        </h3>
        <Flex className="md:py-[72px] py-10 gap-7 md:flex-row flex-col">
          <div className="rounded-[48px] md:p-9 p-6 bg-white md:w-1/3 md:h-[336px] mx-4">
            <div className="flex gap-x-1 text-[#FFC247] md:text-2xl">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <p className="py-6 md:w-[320px]">
              Does exactly what it says. Clear to read and understand. This is
              now the second iPhone we’ve used it on and would certainly
              recommend this app.
            </p>
            <h6 className="text-[16px] text-[#02033B] font-extrabold">
              colinandmandy94
            </h6>
          </div>
          <div className="rounded-[48px] md:p-9 p-6 bg-white md:w-1/3 md:h-[336px] mx-4">
            <div className="flex gap-x-1 text-[#FFC247] md:text-2xl">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <p className="py-6 md:w-[320px]">
              Love the ease and efficiency. Awesome app. Very informative and
              insightful if wanting to know more about your device. The added
              breach check.is a great bonus. Check any email of they’ve ever
              been named in a data breach from years ago. Sweet tool. Love it
              highly recommend.
            </p>
            <h6 className="text-[16px] text-[#02033B] font-extrabold">
              Jennifer Black
            </h6>
          </div>
          <div className="rounded-[48px] md:p-9 p-6 bg-white md:w-1/3 md:h-[336px] mx-4">
            <div className="flex gap-x-1 text-[#FFC247] md:text-2xl">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
            <p className="py-6 md:w-[320px]">
              This app is good if you need to identify certain vulnerabilities
              on your iPhone. If you have any issues, their customer service was
              quite helpful and responsive.
            </p>
            <h6 className="text-[16px] text-[#02033B] font-extrabold">
              Phillip Colligan
            </h6>
          </div>
        </Flex>
        {/* Bottom part */}
        <Flex className={" flex-col md:flex-row"}>
          <p className="font-extrabold text-2xl text-[#02033B] md:pr-[75px]">
            Featured in:
          </p>
          <Flex className="py-10.5 gap-x-10 flex-col md:flex-row">
            <Images imgSrc={LogoOne} />
            <Images imgSrc={LogoTwo} />
            <Images imgSrc={LogoThr} />
            <Images imgSrc={LogoFor} />
            <Images imgSrc={LogoFiv} />
            <Images imgSrc={LogoSix} />
          </Flex>
        </Flex>
        {/* Bottom part */}
      </Container>
    </section>
  );
};

export default Featured;
