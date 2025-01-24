import React from "react";
import Slider from "react-slick";
import slider1 from "../assets/images/homepage/slider1.jpg";
import slider2 from "../assets/images/homepage/slider2.jpg";
import slider3 from "../assets/images/homepage/slider3.jpg";

interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    image: slider1, // Görsel URL'lerini değiştirin
    title:
      "Contra Corporate, Petrol, Sanayii Yağları ve Savunma Sanayii Alanlarında Tedarik Çözümleri Sunmaktadır",
    description:
      "Tedarikçileri ve sektörden aldığı güçle enerji ve savunma sektörlerine kritik katkılar sağlamaktadır. Sektöründeki uzmanlığıyla müşterilerine yüksek kaliteli ve güvenilir ürünler sunmaktadır.",
    buttonText: "Keşvet",
  },
  {
    image: slider2, // Görsel URL'lerini değiştirin
    title: "Sürdürülebilirlik ve Çevre Dostu Ürünler",
    description:
      "Üretimlerinde sürdürülebilirlik ve çevre dostu ürünler kullanarak, müşterilerine yüksek kaliteli ve güvenilir ürünler sunmaktadır.",
    buttonText: "Keşvet",
  },
  {
    image: slider3, // Görsel URL'lerini değiştirin
    title:
      "Contra Corporate, Azerbaycan'da ve Kafkasya bölgesinde ilk motor ve endüstriyel yağ üreticisi olan Technol ile çalışmaktadır.",
    description:
      "Günlük 140 ton, yıllık 50 bin ton üretim kapasitesine sahip Technol şirketinde, üretim sürecinin düzenlenmesi amacıyla Alman yapımı ekipmanlar kurulmuş ve üretim sürecinin tamamen otomasyonu gerçekleştirilmiştir.",
    buttonText: "Keşvet",
  },
];

const FullPageHomeSlider: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  };

  return (
    <div className="cg-slider-main" style={{ height: "calc(100vh - 120px)" }}>
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                height: "calc(100vh - 120px)",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <h1 className="cg-slider-heading">{slide.title}</h1>
              <p
                className="cg-slider-desc"
                style={{
                  fontSize: "1.2rem",
                  maxWidth: "800px",
                  margin: "20px 0",
                }}
              >
                {slide.description}
              </p>
              {/* <button
                style={{
                  background: "#0056b3",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                {slide.buttonText}
              </button> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FullPageHomeSlider;
