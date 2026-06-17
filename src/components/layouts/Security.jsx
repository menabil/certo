import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import SecBg from "/src/assets/secBg.png";

const Security = () => {
  return (
    <section>
      <Container>
        <Flex className={"md:py-[84px] py-15 justify-between flex-col md:flex-row gap-y-10"}>
          <div className="md:w-1/2 text-center md:text-left px-3 md:px-0">
            <h3 className="md:w-[440px] md:text-4xl text-3xl text-[#02033B] font-extrabold">
              At Certo, mobile security is not an afterthought, it’s what we do.
            </h3>
            <p className="md:w-md md:text-xl text-sm text-[#02033B] md:pt-[43px] md:pb-[76px] py-5">
              With years of experience in mobile security and spyware detection,
              our products have helped countless people safeguard their devices
              and find peace of mind.
            </p>
            {/* Button */}
            <Button btnText={"Get Certo for iPhone"} className={"md:mb-6 mb-2 block mx-auto"} />
            <Button btnText={"Get Certo for Android"} className={"mx-auto"} />
            {/* Button */}
          </div>
          <div className="md:w-1/2 md:pl-22">
            <Images imgSrc={SecBg} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Security;
