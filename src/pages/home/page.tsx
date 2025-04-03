import HomeSlider from "../../components/Homeslider";
import ResponsiveBanner from "../../components/Banner";
import MapNumbers from "../../components/MapNumbers";
import Institutions from "../../components/Institutions";
import Cities from "../../components/Cities";
// import News from "../../components/News";

const page = () => {
  return (
    <>
      <HomeSlider />
      <ResponsiveBanner />
      <MapNumbers />
      <Cities />
      <Institutions />
      {/* <News /> */}
    </>
  );
};

export default page;
