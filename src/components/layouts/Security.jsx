import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import SecBg from "/src/assets/secBg.png";

const Security = () => {
  return (
    <div>
      <Container>
        <Flex className={"py-[84px] justify-between"}>
          <div className="w-1/2">
            <h3 className="w-[440px] text-4xl text-[#02033B] font-extrabold">
              At Certo, mobile security is not an afterthought, it’s what we do.
            </h3>
            <p className="w-md text-xl text-[#02033B] pt-[43px] pb-[76px]">
              With years of experience in mobile security and spyware detection,
              our products have helped countless people safeguard their devices
              and find peace of mind.
            </p>
            <Button btnText={"Get Certo for iPhone"} className={"mb-6 block"} />
            <Button btnText={"Get Certo for Android"} />
          </div>
          <div className="w-1/2 pl-22">
            <Images imgSrc={SecBg} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Security;
