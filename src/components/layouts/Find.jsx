import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";

const Find = () => {
  return (
    <div className="bg-linear-to-b from-[#2925CC] to-[#4B48E5] py-[84px]">
      <Container className={"text-center"}>
        <h3 className="text-white text-[34px] font-extrabold">
          Is someone spying on your phone?
        </h3>
        <p className="text-white text-[18px] pt-[50px] pb-[60px]">
          Find out with Certo
        </p>
        <Flex className={"gap-x-6 justify-center"}>
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
    </div>
  );
};

export default Find;
