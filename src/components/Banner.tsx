import React from "react";
import { useTranslation } from "react-i18next";
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
    titleKey: "banners.0.title",
    descriptionKey: "banners.0.description",
    buttonKey: "banners.0.buttonText",
  },
  {
    src: banner2,
    titleKey: "banners.1.title",
    descriptionKey: "banners.1.description",
    buttonKey: "banners.1.buttonText",
  },
  {
    src: banner3,
    titleKey: "banners.2.title",
    descriptionKey: "banners.2.description",
    buttonKey: "banners.2.buttonText",
  },
  {
    src: banner4,
    titleKey: "banners.3.title",
    descriptionKey: "banners.3.description",
    buttonKey: "banners.3.buttonText",
  },
  {
    src: banner5,
    titleKey: "banners.4.title",
    descriptionKey: "banners.4.description",
    buttonKey: "banners.4.buttonText",
  },
  {
    src: banner6,
    titleKey: "banners.5.title",
    descriptionKey: "banners.5.description",
    buttonKey: "banners.5.buttonText",
  },
];

const ResponsiveBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="cg-banner-contents">
        {banners.map((banner, index) => (
          <div key={index} className="cg-banner-content">
            <img
              className="cg-banner-content-image"
              src={banner.src}
              alt={t(banner.titleKey)}
            />
            <h1 className="cg-banner-content-title">{t(banner.titleKey)}</h1>
            <div className="cg-banner-content-description">
              {t(banner.descriptionKey)}
            </div>
            {/* Eğer buton kullanacaksan bunu da açabilirsin:
            <button>{t(banner.buttonKey)}</button>
            */}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ResponsiveBanner;
