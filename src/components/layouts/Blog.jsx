import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import One from "/src/assets/spy.png";
import Two from "/src/assets/key.png";
import Thr from "/src/assets/find.png";
import For from "/src/assets/os.png";
import Fiv from "/src/assets/thr.png";
import Six from "/src/assets/eas.png";
import Button from "../Button";

const Blog = () => {
  return (
    <div className="bg-linear-to-b from-[#F3F8FF] to-[#E7EFFA] py-[84px]">
      <Container>
        <h3 className="text-center text-[#02033B] text-4xl font-extrabold w-[650px] leading-[45px] pb-[72px] mx-auto">
          Get your freedom back, stop mobile spyware today
        </h3>
        <div className="p-[72px] bg-white rounded-[48px] w-[840px] mx-auto">
          <Flex className={"gap-x-12 justify-center"}>
            <div className="w-[200px] text-center">
              <Images imgSrc={One} className={"mx-auto"} />
              <h6 className="py-6 text-xl text-[#02033B] font-extrabold">
                Spyware detection
              </h6>
              <p className="w-[200px]">
                Our advanced spyware detection engine can identify if a device
                contains spyware or bugging software.
              </p>
            </div>
            <div className="w-[200px] text-center">
              <Images imgSrc={Two} className={"mx-auto"} />
              <h6 className="py-6 text-xl text-[#02033B] font-extrabold">
                Keylogger detection
              </h6>
              <p className="w-[200px]">
                Find malicious keyboards installed on your device that could
                allow someone to record things you type (e.g. passwords).
              </p>
            </div>
            <div className="w-[200px] text-center">
              <Images imgSrc={Thr} className={"mx-auto"} />
              <h6 className="py-6 text-xl text-[#02033B] font-extrabold">
                Find tracking apps
              </h6>
              <p className="w-[200px]">
                Check which apps can access your location, microphone or camera.
                Get alerted if a known tracking app is installed.
              </p>
            </div>
          </Flex>
          <Flex className={"gap-x-12 my-[72px] justify-center"}>
            <div className="w-[200px] text-center">
              <Images imgSrc={For} className={"mx-auto"} />
              <h6 className="py-6 text-xl text-[#02033B] font-extrabold">
                OS integrity check
              </h6>
              <p className="w-[200px]">
                Analyze your operating system for signs of tampering that could
                compromise security, such as Jailbreaking.
              </p>
            </div>
            <div className="w-[200px] text-center">
              <Images imgSrc={Fiv} className={"mx-auto"} />
              <h6 className="py-6 text-xl text-[#02033B] font-extrabold">
                Threat removal
              </h6>
              <p className="w-[200px]">
                Our intelligent scan will either safely remove threats for you
                or provide easy-to-follow instructions.
              </p>
            </div>
            <div className="w-[200px] text-center">
              <Images imgSrc={Six} className={"mx-auto"} />
              <h6 className="py-6 text-xl text-[#02033B] font-extrabold">
                Easy to use
              </h6>
              <p className="w-[200px]">
                We create easy to use apps that can check your device for
                vulnerabilities in a matter of minutes.
              </p>
            </div>
          </Flex>
          <Flex className={"gap-x-6 justify-center"}>
            <Button btnText={"Get Certo for iPhone"} />
            <Button btnText={"Get Certo for Android"} />
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
