// import Container from "../Container";
// import Flex from "../Flex";
// import Images from "../Images";
// import One from "/src/assets/spy.png";
// import Two from "/src/assets/key.png";
// import Thr from "/src/assets/find.png";
// import For from "/src/assets/os.png";
// import Fiv from "/src/assets/thr.png";
// import Six from "/src/assets/eas.png";
// import Button from "../Button";

// const Blog = () => {
//   return (
//     <section className="bg-linear-to-b from-[#F3F8FF] to-[#E7EFFA] py-[84px]">
//       <Container>
//         <h3 className="text-center text-[#02033B] text-4xl font-extrabold w-[650px] leading-[45px] pb-[72px] mx-auto">
//           Get your freedom back, stop mobile spyware today
//         </h3>
//         <div className="p-[72px] bg-white rounded-[48px] w-[840px] mx-auto">
//           <Flex className={"gap-x-12 justify-center"}>
//             <div className="w-[200px] text-center">
//               <Images imgSrc={One} className={"mx-auto"} />
//               <h6 className="py-6 text-xl text-[#02033B] font-extrabold">
//                 Spyware detection
//               </h6>
//               <p className="w-[200px]">
//                 Our advanced spyware detection engine can identify if a device
//                 contains spyware or bugging software.
//               </p>
//             </div>
//             <div className="w-[200px] text-center">
//               <Images imgSrc={Two} className={"mx-auto"} />
//               <h6 className="py-6 text-xl text-[#02033B] font-extrabold">
//                 Keylogger detection
//               </h6>
//               <p className="w-[200px]">
//                 Find malicious keyboards installed on your device that could
//                 allow someone to record things you type (e.g. passwords).
//               </p>
//             </div>
//             <div className="w-[200px] text-center">
//               <Images imgSrc={Thr} className={"mx-auto"} />
//               <h6 className="py-6 text-xl text-[#02033B] font-extrabold">
//                 Find tracking apps
//               </h6>
//               <p className="w-[200px]">
//                 Check which apps can access your location, microphone or camera.
//                 Get alerted if a known tracking app is installed.
//               </p>
//             </div>
//           </Flex>
//           <Flex className={"gap-x-12 my-[72px] justify-center"}>
//             <div className="w-[200px] text-center">
//               <Images imgSrc={For} className={"mx-auto"} />
//               <h6 className="py-6 text-xl text-[#02033B] font-extrabold">
//                 OS integrity check
//               </h6>
//               <p className="w-[200px]">
//                 Analyze your operating system for signs of tampering that could
//                 compromise security, such as Jailbreaking.
//               </p>
//             </div>
//             <div className="w-[200px] text-center">
//               <Images imgSrc={Fiv} className={"mx-auto"} />
//               <h6 className="py-6 text-xl text-[#02033B] font-extrabold">
//                 Threat removal
//               </h6>
//               <p className="w-[200px]">
//                 Our intelligent scan will either safely remove threats for you
//                 or provide easy-to-follow instructions.
//               </p>
//             </div>
//             <div className="w-[200px] text-center">
//               <Images imgSrc={Six} className={"mx-auto"} />
//               <h6 className="py-6 text-xl text-[#02033B] font-extrabold">
//                 Easy to use
//               </h6>
//               <p className="w-[200px]">
//                 We create easy to use apps that can check your device for
//                 vulnerabilities in a matter of minutes.
//               </p>
//             </div>
//           </Flex>
//           {/* Button */}
//           <Flex className={"gap-x-6 justify-center"}>
//             <Button btnText={"Get Certo for iPhone"} />
//             <Button btnText={"Get Certo for Android"} />
//           </Flex>
//           {/* Button */}
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Blog;


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
    <section className="bg-gradient-to-b from-[#F3F8FF] to-[#E7EFFA] py-10 sm:py-16 md:py-20 lg:py-[84px]">
      <Container>
        {/* Main Heading */}
        <h3 className="text-center text-[#02033B] text-2xl sm:text-3xl md:text-4xl font-extrabold max-w-[650px] leading-snug md:leading-[45px] pb-8 sm:pb-12 md:pb-[72px] mx-auto px-2">
          Get your freedom back, stop mobile spyware today
        </h3>

        {/* Card Box */}
        <div className="p-6 sm:p-10 md:p-12 lg:p-[72px] bg-white rounded-3xl sm:rounded-[48px] w-full max-w-[840px] mx-auto shadow-sm">
          
          {/* Row 1 */}
          <Flex className="flex-col md:flex-row gap-8 md:gap-x-12 justify-center items-center">
            <div className="w-full md:w-[200px] text-center flex flex-col items-center">
              <Images imgSrc={One} className="mx-auto h-auto max-w-[50px] md:max-w-none" />
              <h6 className="py-3 md:py-6 text-lg md:text-xl text-[#02033B] font-extrabold">
                Spyware detection
              </h6>
              <p className="w-full md:w-[200px] text-sm md:text-base text-[#02033B]/80">
                Our advanced spyware detection engine can identify if a device
                contains spyware or bugging software.
              </p>
            </div>

            <div className="w-full md:w-[200px] text-center flex flex-col items-center">
              <Images imgSrc={Two} className="mx-auto h-auto max-w-[50px] md:max-w-none" />
              <h6 className="py-3 md:py-6 text-lg md:text-xl text-[#02033B] font-extrabold">
                Keylogger detection
              </h6>
              <p className="w-full md:w-[200px] text-sm md:text-base text-[#02033B]/80">
                Find malicious keyboards installed on your device that could
                allow someone to record things you type (e.g. passwords).
              </p>
            </div>

            <div className="w-full md:w-[200px] text-center flex flex-col items-center">
              <Images imgSrc={Thr} className="mx-auto h-auto max-w-[50px] md:max-w-none" />
              <h6 className="py-3 md:py-6 text-lg md:text-xl text-[#02033B] font-extrabold">
                Find tracking apps
              </h6>
              <p className="w-full md:w-[200px] text-sm md:text-base text-[#02033B]/80">
                Check which apps can access your location, microphone or camera.
                Get alerted if a known tracking app is installed.
              </p>
            </div>
          </Flex>

          {/* Row 2 */}
          <Flex className="flex-col md:flex-row gap-8 md:gap-x-12 my-8 md:my-[72px] justify-center items-center">
            <div className="w-full md:w-[200px] text-center flex flex-col items-center">
              <Images imgSrc={For} className="mx-auto h-auto max-w-[50px] md:max-w-none" />
              <h6 className="py-3 md:py-6 text-lg md:text-xl text-[#02033B] font-extrabold">
                OS integrity check
              </h6>
              <p className="w-full md:w-[200px] text-sm md:text-base text-[#02033B]/80">
                Analyze your operating system for signs of tampering that could
                compromise security, such as Jailbreaking.
              </p>
            </div>

            <div className="w-full md:w-[200px] text-center flex flex-col items-center">
              <Images imgSrc={Fiv} className="mx-auto h-auto max-w-[50px] md:max-w-none" />
              <h6 className="py-3 md:py-6 text-lg md:text-xl text-[#02033B] font-extrabold">
                Threat removal
              </h6>
              <p className="w-full md:w-[200px] text-sm md:text-base text-[#02033B]/80">
                Our intelligent scan will either safely remove threats for you
                or provide easy-to-follow instructions.
              </p>
            </div>

            <div className="w-full md:w-[200px] text-center flex flex-col items-center">
              <Images imgSrc={Six} className="mx-auto h-auto max-w-[50px] md:max-w-none" />
              <h6 className="py-3 md:py-6 text-lg md:text-xl text-[#02033B] font-extrabold">
                Easy to use
              </h6>
              <p className="w-full md:w-[200px] text-sm md:text-base text-[#02033B]/80">
                We create easy to use apps that can check your device for
                vulnerabilities in a matter of minutes.
              </p>
            </div>
          </Flex>

          {/* Buttons */}
          <Flex className="flex-col sm:flex-row gap-4 sm:gap-x-6 justify-center items-center">
            <Button btnText={"Get Certo for iPhone"} />
            <Button btnText={"Get Certo for Android"} />
          </Flex>

        </div>
      </Container>
    </section>
  );
};

export default Blog;