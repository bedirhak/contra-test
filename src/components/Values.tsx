// Component: ResponsiveBanner
import React from "react";
import Container from "./Container";
import { GrStatusGood } from "react-icons/gr";
import Accordion from "react-bootstrap/Accordion";

const Values: React.FC = () => {
  const cardData = [
    { icon: <GrStatusGood />, title: "Müşteri Odaklı" },
    { icon: "🤝", title: "Profesyonellik" },
    { icon: "🚀", title: "İnovasyon" },
  ];

  return (
    <>
      <Container>
        <h1 className="cg-part-title mt-3">Değerlerimiz</h1>

        <div className="cg-values">
          {cardData.map((card, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "20px",
                margin: "10px",
                borderRadius: "8px",
                textAlign: "center",
                width: "200px",
              }}
            >
              <div style={{ fontSize: "2em" }}>{card.icon}</div>
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Müşteri Odaklı</Accordion.Header>
            <Accordion.Body>
              Tüm ticaretlerimizde, müşterilerimizin ihtiyaçlarını en iyi
              şekilde karşılamak bizim için bir önceliktir. Sektördeki başarının
              temelinde, her bir müşterimizi bir iş ortağı olarak görme
              anlayışımız yatmaktadır. Onların beklentilerine hızlı, etkili ve
              kaliteli çözümler sunarak, uzun vadeli iş ilişkileri kurmayı
              hedefliyoruz. Ürün yelpazemizi geniş ve esnek tutarak, her sektöre
              ve her ihtiyaca uygun çözümler sunuyoruz. Bu süreçte, yalnızca
              kaliteli ürünler temin etmekle kalmıyor, aynı zamanda teknik
              destek ve danışmanlık hizmetlerimizle de müşterilerimizin
              yanındayız. İhtiyaçları tam olarak anlayıp, en uygun çözümleri
              sunmak için dinliyor, analiz ediyor ve harekete geçiyoruz. Bizim
              için müşteri memnuniyeti sadece bir hedef değil, aynı zamanda tüm
              iş süreçlerimizi şekillendiren bir değer. Güvenilirlik, şeffaflık
              ve kaliteye verdiğimiz önemle, sektörde fark yaratmaya devam
              ediyoruz. Sizin memnuniyetiniz, bizim motivasyon kaynağımızdır.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Profesyonellik</Accordion.Header>
            <Accordion.Body>
              Petrol ve sanayi yağları sektöründeki tecrübemizle, iş
              süreçlerimizi sürekli olarak geliştirmeyi ve müşterilerimize en
              iyi hizmeti sunmayı hedefliyoruz. Profesyonel bilgi birikimimiz ve
              yetkinliklerimiz doğrultusunda faaliyetlerimizi her geçen gün
              iyileştirmeye özen gösteriyoruz. İletişimde saygılı, güler yüzlü,
              samimi ve nazik bir yaklaşım benimseyerek, müşterilerimizin
              ihtiyaçlarını doğru anlamaya ve en etkili çözümleri sunmaya
              odaklanıyoruz. Şirketimizin değerlerine, çıkarlarına ve
              kurallarına bağlı kalarak, güvenilir ve şeffaf bir iş ortaklığı
              sağlamayı önemsiyoruz. Zaman yönetimine büyük önem veriyor,
              taleplere, istek ve sorulara hızlı ve zamanında yanıt vermeyi ilke
              ediniyoruz. Amacımız, yalnızca müşteri memnuniyetini sağlamak
              değil, aynı zamanda sektörümüzde fark yaratarak uzun vadeli güven
              ilişkileri kurmaktır. Profesyonellik, kaliteli hizmet ve müşteri
              odaklı yaklaşım, bizi biz yapan temel değerlerdir.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>İnovasyon</Accordion.Header>
            <Accordion.Body>
              Petrol ve sanayi yağları sektöründe yenilikçi bir yaklaşımla,
              müşterilerimize en modern ve etkili çözümleri sunmak için sürekli
              olarak kendimizi geliştiriyoruz. İnovasyonu sadece bir hedef
              değil, aynı zamanda iş yapış biçimimizin vazgeçilmez bir parçası
              olarak görüyoruz. Sektördeki gelişmeleri yakından takip ederek, en
              yeni teknolojileri ve yöntemleri iş süreçlerimize entegre
              ediyoruz. Ürün ve hizmetlerimizi, müşterilerimizin ihtiyaçlarına
              uygun şekilde sürekli iyileştirmek ve çeşitlendirmek için
              çalışıyoruz. Hedefimiz, yalnızca bugünün değil, yarının
              ihtiyaçlarını da karşılayarak sektörümüzde fark yaratmak. Ar-Ge ve
              teknolojik yatırımlarımızla, çevre dostu, verimli ve
              sürdürülebilir çözümler üretmeye odaklanıyoruz. Müşterilerimize
              sağladığımız her hizmette, kaliteyi ve yenilikçiliği bir araya
              getirerek değer katıyoruz. İnovasyon odaklı yaklaşımımızla, iş
              ortaklarımızın başarısına katkı sağlamak ve sektörümüzde öncü bir
              konumda yer almak için çalışmaya devam ediyoruz. Çünkü biliyoruz
              ki, yenilikçi çözümler geleceğin kapısını aralar.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Values;


/*
// Component: Values
import React from "react";
import Container from "./Container";
import { GrStatusGood } from "react-icons/gr";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";

const Values: React.FC = () => {
  const { t } = useTranslation();

  const cardData = [
    { icon: <GrStatusGood />, title: t("values.customer_oriented.title") },
    { icon: "🤝", title: t("values.professionalism.title") },
    { icon: "🚀", title: t("values.innovation.title") }
  ];

  return (
    <>
      <Container>
        <h1 className="cg-part-title mt-3">{t("values.title")}</h1>
        <div className="cg-values">
          {cardData.map((card, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "20px",
                margin: "10px",
                borderRadius: "8px",
                textAlign: "center",
                width: "200px"
              }}
            >
              <div style={{ fontSize: "2em" }}>{card.icon}</div>
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{t("values.customer_oriented.title")}</Accordion.Header>
            <Accordion.Body>{t("values.customer_oriented.description")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{t("values.professionalism.title")}</Accordion.Header>
            <Accordion.Body>{t("values.professionalism.description")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>{t("values.innovation.title")}</Accordion.Header>
            <Accordion.Body>{t("values.innovation.description")}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Values;
 */
