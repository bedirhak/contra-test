import Institutions from "../../components/Institutions";
import Container from "../../components/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const page = () => {
  return (
    <>
      <Container className="cg-capabilities-container mt-5">
        <Institutions />

        <Tabs
          defaultActiveKey="yaglar"
          id="uncontrolled-tab-example"
          className="mb-3 "
        >
          <Tab eventKey="yaglar" title="Endüstriyel Yağlar">
            <p className="mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp; Endüstriyel yağlar, sanayi sektöründe
              makinelerin ve ekipmanların verimli ve uzun ömürlü çalışmasını
              sağlamak için kritik öneme sahiptir. Bu yağlar, sürtünmeyi
              azaltarak aşınmayı önler, ısıyı dağıtarak sistemlerin optimal
              sıcaklıkta çalışmasını destekler ve korozyona karşı koruma
              sağlayarak ekipmanların ömrünü uzatır.
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">Technol Endüstriyel Yağları</h6>{" "}
              Technol, geniş bir endüstriyel yağ yelpazesi sunarak farklı
              sektörlerin ihtiyaçlarını karşılamaktadır. Ürün gamı, hidrolik
              sistem yağlarından kompresör ve dişli yağlarına, ısı transfer
              yağlarından kızak yağlarına kadar çeşitlilik göstermektedir. Bu
              ürünler, yüksek kaliteli baz yağlar ve gelişmiş katkı maddeleri
              kullanılarak formüle edilmiştir, bu sayede üstün performans ve
              güvenilirlik sunarlar.
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">Technol Marine D 4010</h6>
              Technol Marine D 4010, denizcilik sektöründe kullanılmak üzere
              üretilmiş, üstün kaliteli bir motor yağıdır. Bu ürün, deniz
              motorlarının zorlu çalışma koşullarında maksimum koruma ve
              performans sunmak için özel olarak geliştirilmiştir. Technol
              Marine D 4010, yüksek kaliteli baz yağlar ve gelişmiş katkı
              maddeleriyle formüle edilmiştir. Bu özellikleri sayesinde deniz
              motorlarında aşınma ve korozyonu minimize eder, motorun temiz
              kalmasını sağlar ve uzun ömürlü bir performans sunar. Ayrıca,
              karbon birikimini önleyerek motorun etkinliğini artırır ve yakıt
              verimliliğine katkıda bulunur. Ürün, Amerikan Petrol Enstitüsü
              (API) standartlarına uygun olarak üretilmiş olup, uluslararası
              denizcilik standartlarını karşılamaktadır. Zorlu deniz
              koşullarında bile mükemmel termal stabilite sunarak motorun aşırı
              ısınmasını engeller. Technol Marine D 4010, hem ticari gemilerde
              hem de kişisel deniz taşıtlarında kullanılabilecek şekilde
              tasarlanmıştır. Deniz motorları için güvenilir ve yüksek
              performanslı bir yağ arayanlar için ideal bir çözümdür.
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">Hidrolik Sistem Yağları</h6>
              Technol'un hidrolik sistem yağları, yüksek basınç altında çalışan
              sistemlerde mükemmel performans sağlar. Oksidasyon direnci yüksek
              olan bu yağlar, sistemin temiz kalmasına yardımcı olur ve
              bileşenlerin ömrünü uzatır.
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">
                Technol Tractor Transmission Oil
              </h6>
              Technol Tractor Transmission Oil, ağır hizmet tarım makineleri
              için özel olarak tasarlanmış üstün performanslı bir yağdır. Bu
              ürün, traktörlerin ve diğer tarım ekipmanlarının motor, şanzıman
              ve hidrolik sistemlerinde maksimum verimlilik ve koruma sağlamayı
              amaçlar. Yüksek kaliteli baz yağlar ve gelişmiş katkı maddeleriyle
              formüle edilen bu yağ, ekipmanların ömrünü uzatırken bakım
              maliyetlerini azaltır. Technol Tractor Transmission Oil, düşük
              sıcaklıklarda akışkanlık özelliklerini koruyarak soğuk hava
              koşullarında bile sistemlerin sorunsuz çalışmasını sağlar. Aynı
              zamanda oksidasyona karşı dirençli yapısıyla, yüksek sıcaklıklarda
              bile yağın performansını korumasına olanak tanır. Aşınmayı ve
              korozyonu minimize ederek dişlilerin ve hidrolik bileşenlerin uzun
              süre dayanıklı kalmasını sağlar. Bu yağ, özellikle UTTO (Universal
              Tractor Transmission Oil) ve STOU (Super Tractor Oil Universal)
              standartlarını karşılayarak, tarım ekipmanları için çok yönlü ve
              güvenilir bir çözüm sunar. Technol Tractor Transmission Oil,
              traktörlerin zorlu tarım şartlarında yüksek performans göstermesi
              için tasarlanmıştır.
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">Kompresör Yağları</h6>{" "}
              Kompresörlerin verimli çalışması için özel olarak formüle edilen
              Technol kompresör yağları, düşük karbon birikimi ve mükemmel
              termal kararlılık özellikleriyle dikkat çeker. Bu sayede enerji
              verimliliği artar ve bakım maliyetleri azalır.
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">Dişli Yağları</h6>
              Ağır yükler altında çalışan dişli sistemleri için geliştirilen
              Technol dişli yağları, yüksek basınca dayanıklı olup, aşınma ve
              korozyona karşı üstün koruma sağlar. Bu da ekipmanların
              performansını artırır ve arıza sürelerini minimize eder.
            </p>

            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">Isı Transfer Yağları</h6>
              Endüstriyel proseslerde ısı transferinin etkin bir şekilde
              gerçekleşmesi için kullanılan Technol ısı transfer yağları, yüksek
              termal iletkenlik ve stabilite sunarak sistemlerin verimli
              çalışmasını destekler.
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">Kızak Yağları</h6>
              Takım tezgahlarının hassas hareketlerini destekleyen Technol kızak
              yağları, düşük sürtünme katsayısı ve yapışma önleyici
              özellikleriyle pürüzsüz ve hassas operasyonlar sağlar.
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">Kalite ve Güvenilirlik</h6>
              Technol endüstriyel yağları, uluslararası standartlara uygun
              olarak üretilmekte ve titiz kalite kontrol süreçlerinden
              geçirilmektedir. Bu sayede, sanayi işletmeleri için güvenilir ve
              yüksek performanslı çözümler sunulmaktadır.
            </p>
            <p className="mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;Sonuç olarak, Technol'un geniş endüstriyel
              yağ yelpazesi, farklı sektörlerin spesifik ihtiyaçlarını
              karşılayacak şekilde tasarlanmıştır. Yüksek kaliteli ürünleri ve
              müşteri odaklı hizmet anlayışıyla Technol, endüstriyel yağlar
              konusunda güvenilir bir iş ortağıdır.
            </p>
          </Tab>
          <Tab eventKey="petrol" title="Petrol">
            <div>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Petrol ve sanayi yağları sektöründe
                kalite, güven ve performans, bir ürünün tercih edilmesinde en
                önemli unsurlardır. İşte tam bu noktada, Technol markası,
                sunduğu üstün kalite ve yenilikçi yaklaşımıyla sektörde fark
                yaratmaktadır. Azerbaycan ve Kafkasya bölgesinin motor ve
                endüstriyel yağ üretiminde öncü markası olan Technol, American
                Petroleum Institute (API) tarafından verilen motor yağı
                sertifikasını kazanarak uluslararası alanda kalitesini bir kez
                daha kanıtlamıştır.
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;API sertifikası, motor ve endüstriyel
                yağların, ABD ve uluslararası araç ile motor üreticilerinin
                belirlediği performans standartlarını tam anlamıyla
                karşıladığını onaylayan önemli bir belgedir. Technol, bu
                sertifikayı alarak, ürünlerinin en yüksek standartlara uygun
                olduğunu göstermiştir. API, petrol ve doğalgaz endüstrisinin en
                büyük ticaret derneği olup, yaklaşık 650 şirketi temsil
                etmektedir. Dolayısıyla, bu sertifika yalnızca bir kalite
                güvencesi değil, aynı zamanda küresel anlamda prestijin bir
                göstergesidir.
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Technol’un üretim süreçleri, modern
                teknolojilerle donatılmış Alman yapımı ekipmanlarla
                gerçekleştirilmekte olup, günlük 140 ton ve yıllık 50 bin tonluk
                üretim kapasitesine sahiptir. Üretim sürecinin tamamı tam
                otomasyonla yönetilmekte ve son teknolojiyle donatılmış,
                uluslararası akredite (ISO17025: 2017) laboratuvarlarında yağlar
                üzerinde detaylı analizler yapılmaktadır. Bu laboratuvarlar,
                ABD, İngiltere, Almanya ve Japonya gibi teknoloji lideri
                ülkelerden alınan cihazlarla, ürünlerin yüksek kalitesini ve
                dayanıklılığını sürekli olarak test etmektedir.
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Technol’un motor ve endüstriyel yağları,
                Infineum, Chevron ve Afton gibi dünya çapında tanınmış
                tedarikçilerden temin edilen yüksek kaliteli katkı maddeleri
                kullanılarak üretilmektedir. Tüm ürünler, American Petroleum
                Institute (API), Avrupa Otomobil Üreticileri Derneği (ACEA)
                standartlarına uygun olarak üretilmekte ve Amerikan Test ve
                Malzeme Derneği (ASTM) standartlarına göre test edilmektedir.
                Ayrıca, ISO9001:2015 kalite yönetim sistemi uygulanarak,
                ürünlerin müşteri taleplerini ve yasal gereklilikleri tam
                anlamıyla karşıladığı garanti altına alınmaktadır.
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Technol’un temel amacı, dünya çapında
                tanınmış petrol markalarının kalite standartlarını karşılayan
                yağlar üreterek bu ürünleri herkes için ulaşılabilir fiyatlarla
                sunmaktır. Yüksek kaliteli ürünleri sayesinde kısa sürede
                müşterilerinin güvenini kazanan Technol, yalnızca yerel pazarda
                değil, aynı zamanda yaklaşık 10 ülkeye yaptığı ihracatlarla
                uluslararası pazarda da talep görmektedir.
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Technol markası ile işbirliği yaparak,
                kaliteyi ve güveni iş süreçlerinize taşıyabilir, araç ve
                ekipmanlarınız için uzun ömürlü ve yüksek performanslı yağlara
                sahip olabilirsiniz. Çünkü Technol, yalnızca bir yağ markası
                değil, aynı zamanda kalite ve yeniliğin simgesidir.
              </p>
            </div>
          </Tab>
          <Tab eventKey="savunma" title="Sanuvma Sanayii">
            <div>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Öncü olma misyonumuz doğrultusunda,
                savunma sanayiindeki Ar-Ge çalışmalarımızda, dünyanın en iyi
                şirketleriyle rekabet edebilecek yenilikçi yönetim yaklaşımları
                uygulanmaktadır. Ar-Ge Yönetimi, sektörün ihtiyaçlarını
                karşılayan, geliştiren ve dönüştüren bir yapı ile stratejik
                hedeflere doğru kararlılıkla ilerlemektedir.
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Savunma sanayiine yönelik
                teknolojilerimizin geliştirilmesinde, inovasyonu ve
                sürdürülebilirliği temel alan bir yaklaşım benimsenmiştir. Bu
                doğrultuda, yerli ve milli üretim süreçlerine öncelik vererek,
                ileri mühendislik çözümleri ve modern üretim teknikleriyle fark
                yaratıyoruz. Hem ülkemizin güvenliğine hem de uluslararası
                pazarlarda rekabetçi bir konum elde etmeye katkı sağlıyoruz.
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Ar-Ge süreçlerimiz, yüksek teknolojiye
                sahip sistemler, otonom araçlar, zırhlı platformlar ve savunma
                ekipmanları gibi kritik alanlarda yenilikçi çözümler sunmaya
                odaklanmıştır. Geliştirdiğimiz projelerde, sadece bugünün değil,
                geleceğin ihtiyaçlarına da yanıt verecek esnek ve dayanıklı
                sistemler tasarlıyoruz.
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Ekibimiz, teknolojik dönüşümü
                hızlandıracak yeni nesil üretim tekniklerini ve global
                standartları yakından takip ederek, savunma sanayiine özgü
                inovasyon odaklı bir vizyonla çalışmalarına devam etmektedir.
                Milli güvenliğe katkı sağlayan bu projelerdeki en büyük
                hedefimiz, yerel kaynakları etkin bir şekilde kullanarak,
                bağımsız ve güçlü bir savunma sanayii oluşturmaktır.
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Ar-Ge ve savunma sanayiindeki güçlü
                adımlarımız, sadece bir başarı hikayesi değil, aynı zamanda
                ülkemiz için stratejik bir kalkınma hamlesidir.
              </p>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default page;
