import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";

const Find = () => {
  return (
    <section className="bg-linear-to-b from-[#2925CC] to-[#4B48E5] md:py-[84px] py-15">
      <Container className={"text-center"}>
        <h3 className="text-white text-3xl md:w-full w-[280px] md:mx-0 mx-auto md:text-[34px] font-extrabold">
          Is someone spying on your phone?
        </h3>
        <p className="text-white text-[18px] py-10 md:pt-[50px] md:pb-[60px]">
          Find out with Certo
        </p>
        <Flex className={"gap-6 flex-col md:flex-row justify-center"}>
          {/* Button */}
          <Button
            btnText={"Get Certo for iPhone"}
            className={
              "bg-transparent text-white border-2 border-white hover:bg-[#FFC247] hover:border-[#FFC247] hover:text-[#02033B]"
            }
          />
          <Button
            btnText={"Get Certo for Android"}
            className={
              "bg-transparent text-white border-2 border-white hover:bg-[#FFC247] hover:border-[#FFC247] hover:text-[#02033B]"
            }
          />
          {/* Button */}
        </Flex>
      </Container>
    </section>
  );
};

export default Find;
