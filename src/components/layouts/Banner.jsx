import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Phone from "/src/assets/bannerPhone.png";

const Banner = () => {
  return (
    <div className="bg-[url(/src/assets/banner.png)] py-45 bg-no-repeat bg-cover bg-center">
      <Container>
        <Flex>
          <div className="w-1/2">
            <h1 className="text-[#02033B] text-6xl font-extrabold w-[600px]">
              Your mobile privacy is our mission
            </h1>
            <p className="text-xl text-[#02033B] w-[600px] pt-[52px] pb-24">
              Think your phone has been hacked? Our trusted apps make it easy
              for you to scan, detect and remove threats from your iPhone and
              Android devices.
            </p>
            <Flex className="gap-x-12">
              <Button btnText={"Get Certo for iPhone"} />
              <Button btnText={"Get Certo for Android"} />
            </Flex>
          </div>
          <div className="w-1/2">
            <Images imgSrc={Phone} className={"ml-25 w-[50%]"} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
