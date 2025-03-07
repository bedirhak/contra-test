import Container from "../../components/Container";
import Values from "../../components/Values";
import Institutions from "../../components/Institutions";

const Institutional = () => {
  return (
    <Container>
      <div className="cg-institutional-page">
        <h1 className="cg-part-title mt-3">Hakkımızda</h1>
        <p className="mb-3">
          <span className="cg-mobile-d-none">&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
          Hakkımızda Şirketimiz, müşterilerimize kaliteli ve güvenilir yağ
          çözümleri sunma misyonuyla faaliyet göstermektedir. Bu hedef
          doğrultusunda, dünya standartlarında üretim yapan Technol gibi
          alanında öncü şirketlerle iş birliği yapıyoruz. Yıllık 50 bin ton
          üretim kapasitesine sahip olan Technol, modern tesislerinde yüksek
          standartlarda üretim gerçekleştirmektedir ve bu iş birliğimiz,
          müşterilerimize en iyi ürünleri sunmamıza olanak tanımaktadır.
        </p>
        <p className="mb-3">
          <span className="cg-mobile-d-none">&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
          Technol, Amerika, İngiltere, Almanya ve Japonya gibi ülkelerden temin
          ettiği son teknoloji cihazlarla donatılmış uluslararası akredite
          laboratuvarı (ISO 17025:2017) sayesinde, yağların geniş bir yelpazede
          hassas analizlerini gerçekleştirebilmektedir. Motor ve endüstriyel
          yağlar, Infineum, Chevron ve Afton gibi dünya çapında tanınan
          tedarikçilerden alınan yüksek kaliteli katkı maddeleri ile üretilmekte
          ve Amerikan Petrol Enstitüsü (API), Avrupa Otomobil Üreticileri
          Derneği (ACEA) standartlarına uygun olarak test edilmektedir.
          Ürünlerin kalitesini garanti altına almak için ISO 9001:2015, çevresel
          duyarlılığı artırmak için ISO 14001:2015 ve iş güvenliği için ISO
          45001:2008 standartları uygulanmaktadır.
        </p>
        <p className="mb-3">
          <span className="cg-mobile-d-none">&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
          Technol ile gerçekleştirdiğimiz bu güçlü iş birliği sayesinde, binek
          araç ve kamyon yağlarından hidrolik sistem, kompresör ve jeneratör
          yağlarına; tarım, savunma, denizcilik ve metalurji sektörlerine kadar
          geniş bir ürün portföyünü müşterilerimize sunuyoruz. Ürünlerimiz,
          sadece yurtiçindeki müşterilerimizin ihtiyaçlarını karşılamakla
          kalmıyor, aynı zamanda Technol'ün yaklaşık 10 ülkeye gerçekleştirdiği
          ihracatlarla uluslararası pazarlarda da tercih ediliyor.
        </p>
        <p className="mb-3">
          <span className="cg-mobile-d-none">&nbsp;&nbsp;&nbsp;&nbsp;</span>{" "}
          Ürün portföyümüzde, binek araç ve kamyon yağlarından hidrolik sistem,
          kompresör ve jeneratör yağlarına; tarım, savunma, denizcilik ve
          metalurji sektörlerine kadar yüzlerce farklı ürün bulunmaktadır.
          Yüksek kaliteli ürünlerimiz, kısa sürede müşterilerimizin güvenini
          kazanmış ve sadece yurtiçi pazarda değil, aynı zamanda yaklaşık 10
          ülkeye ihracat yapılarak uluslararası pazarlarda da talep görmüştür.
        </p>
        <p className="mb-3">
          <span className="cg-mobile-d-none">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          Müşteri memnuniyetini ve sürdürülebilir kaliteyi öncelik kabul eden
          yaklaşımımızla, sektörün en iyi markalarını müşterilerimizle
          buluşturmaktan gurur duyuyoruz. Sizlere en iyi hizmeti sunmak için
          Technol gibi güçlü iş ortaklarımızla birlikte çalışmaya ve sürekli
          gelişime odaklanmaya devam ediyoruz.
        </p>
      </div>
      <Values />
      <div>
        <h1 className="cg-part-title mt-3">Misyonumuz</h1>
        <div className="cg-quotation">
          <div className="cg-quotation-icon">❝</div>
          <div className="cg-quotation-text">
            "Petrol, makineler ve ekipmanlarda kullanılan yağlar, sıvılar ve
            teknik hizmetlerin ihtiyaçlarını kapsamlı bir şekilde karşılayan
            profesyonel bir tedarikçi olmak ve Azerbaycan ile gelişmekte olan
            ülkelerde hizmet sunmak."
          </div>
        </div>
      </div>
      <Institutions />
    </Container>
  );
};

export default Institutional;
