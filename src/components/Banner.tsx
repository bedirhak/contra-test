// Component: ResponsiveBanner
import React from "react";
import Container from "./Container";
import banner1 from "../assets/images/homepage/banner-1.png";
import banner2 from "../assets/images/homepage/banner-2.png";
import banner3 from "../assets/images/homepage/banner-3.png";
import banner4 from "../assets/images/homepage/banner-4.png";
import banner5 from "../assets/images/homepage/banner-5.png";
import banner6 from "../assets/images/homepage/banner-6.png";

const banners = [
  {
    src: banner1,
    title: "Full Sentetik",
    description: "Ağır Ticari Motor Yağı",
    buttonText: "Learn More",
  },
  {
    src: banner2,
    title: "Gras",
    description: "Gras Yağları",
    buttonText: "Learn More",
  },
  {
    src: banner3,
    title: "Hibrit",
    description: "Teknoloji Hibrit Sentetik Motor Yağı",
    buttonText: "Learn More",
  },
  {
    src: banner4,
    title: "Bronz",
    description: "Ticari Araç Binek Yağları",
    buttonText: "Learn More",
  },
  {
    src: banner5,
    title: "Pro",
    description: "Ağır Yük Otomobil Yağları",
    buttonText: "Learn More",
  },
  {
    src: banner6,
    title: "Turbo Dizel",
    description: "Turbo Dizel Motor Yağı",
    buttonText: "Learn More",
  },
];

const ResponsiveBanner: React.FC = () => {
  return (
    <Container>
      <div className="cg-banner-contents">
        {banners.map((banner, index) => (
          <div key={index} className="cg-banner-content">
            <img
              className="cg-banner-content-image"
              src={banner.src}
              alt="Land"
            />
            <h1 className="cg-banner-content-title">{banner.title}</h1>
            <div className="cg-banner-content-description">
              {banner.description}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ResponsiveBanner;
