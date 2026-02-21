import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import LatestOne from "/src/assets/latestOne.png";
import LatestTwo from "/src/assets/latestTwo.png";
import LatestThr from "/src/assets/latestThr.png";
import Button from "../Button";

const Latest = () => {
  return (
    <div className="py-[84px] bg-[#F3F8FF]">
      <Container>
        <h3 className="text-[#02033B] text-[56px] font-extrabold text-center">
          Latest insights
        </h3>
        <Flex className={"gap-x-12 justify-center my-[72px] items-start"}>
          <div className="rounded-[48px] overflow-hidden bg-white w-[320px] relative">
            <div className="bg-[#F3F8FF] rounded-[48px] text-sm text-[#02033B] font-extrabold py-3 px-5 absolute top-6 left-6">
              Expertise
            </div>
            <Images imgSrc={LatestOne} />
            <div className="p-12">
              <h6 className="text-2xl font-bold text-[#02033B] w-[180px]">
                Signs Your Ex Is Spying On You
              </h6>
              <p className="pt-[25px] pb-[54px] text-[16px] text-[#02033B] w-[225px]">
                In an ideal world, after a relationship ends both you and your
                ex will move on. But what if they can’t let go, and start spying
                on your...
              </p>
            </div>
          </div>
          <div className="rounded-[48px] overflow-hidden bg-white w-[320px] relative">
            <div className="bg-[#F3F8FF] rounded-[48px] text-sm text-[#02033B] font-extrabold py-3 px-5 absolute top-6 left-6">
              Guides
            </div>
            <Images imgSrc={LatestTwo} />
            <div className="p-12">
              <h6 className="text-2xl font-bold text-[#02033B] w-[200px]">
                How to Remove a Hacker from Your Samsung Phone
              </h6>
              <p className="pt-[25px] text-[16px] text-[#02033B] w-[225px]">
                Samsung is the second most popular manufacturer of smartphones
                in the world, with a market share of 28.19% compared to Apple’s
                28.43% as...
              </p>
            </div>
          </div>
          <div className="rounded-[48px] overflow-hidden bg-white w-[320px] relative">
            <div className="bg-[#F3F8FF] rounded-[48px] text-sm text-[#02033B] font-extrabold py-3 px-5 absolute top-6 left-6">
              Expertise
            </div>
            <Images imgSrc={LatestThr} />
            <div className="p-12">
              <h6 className="text-2xl font-bold text-[#02033B] w-[200px]">
                Is Your Cell Phone Under Surveillance?
              </h6>
              <p className="py-[25px]  text-[16px] text-[#02033B] w-[225px]">
                In today’s surveillance state, it can feel like your every move
                is being watched. Although your mind may be conjuring up images
                of CCTV...
              </p>
            </div>
          </div>
        </Flex>
        <Button btnText={"View all insights"} className={"mx-auto"} />
      </Container>
    </div>
  );
};

export default Latest;
