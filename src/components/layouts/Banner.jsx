import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Phone from "/src/assets/bannerPhone.png";

const getBannerButtonConfig = () => {
  return [
    { text: "Get Certo for iPhone", primary: true },
    { text: "Get Certo for Android", primary: false },
  ];
};

const Banner = () => {
  const buttonList = getBannerButtonConfig();

  return (
    <section className="bg-[url(/src/assets/banner.png)] py-8 sm:py-15 md:py-20 lg:py-25 xl:py-25 bg-no-repeat bg-cover bg-center">
      <Container>
        <Flex className="flex-col lg:flex-row items-center justify-between gap-y-10 lg:gap-y-0">
          {/* Text Content Area */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-[#02033B] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-full lg:max-w-[600px] leading-tight sm:leading-tight">
              Your mobile privacy is our mission
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#02033B] max-w-[280px] mx-auto sm:mx-0 lg:max-w-[600px] pt-4 sm:pt-8 pb-8 sm:pb-12 lg:pb-10">
              Think your phone has been hacked? Our trusted apps make it easy
              for you to scan, detect and remove threats from your iPhone and
              Android devices.
            </p>

            {/* CTA Buttons */}
            <Flex className="flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-x-6 lg:gap-x-12">
              {buttonList.map((btn, index) => (
                <Button
                  key={index}
                  btnText={btn.text}
                  primary={btn.primary}
                  className="w-auto"
                />
              ))}
            </Flex>
          </div>

          {/* Image Area */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Images
              imgSrc={Phone}
              className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-[50%] lg:max-w-none h-auto ml-0"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
