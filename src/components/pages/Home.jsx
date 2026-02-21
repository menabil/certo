import Banner from "../layouts/Banner";
import Blog from "../layouts/Blog";
import Featured from "../layouts/Featured";
import Find from "../layouts/Find";
import Help from "../layouts/Help";
import Latest from "../layouts/Latest";
import Security from "../layouts/Security";

const Home = () => {
  return (
    <>
      <Banner />
      <Featured />
      <Security />
      <Blog />
      <Help />
      <Find />
      <Latest />
    </>
  );
};

export default Home;
