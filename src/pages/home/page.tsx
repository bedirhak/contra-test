import HomeSlider from "../../components/Homeslider";
import ResponsiveBanner from "../../components/Banner";
import MapNumbers from "../../components/MapNumbers";
import Institutions from "../../components/Institutions";
// import News from "../../components/News";

const page = () => {
  return (
    <>
      <HomeSlider />
      <ResponsiveBanner />
      <MapNumbers />
      <Institutions />
      {/* <News /> */}
    </>
  );
};

export default page;
