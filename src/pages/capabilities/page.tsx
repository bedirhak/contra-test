import Institutions from "../../components/Institutions";
import Container from "../../components/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Container className="cg-capabilities-container mt-5">
        <Institutions />

        <Tabs
          defaultActiveKey="yaglar"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="yaglar" title={t('capabilities.endustrial-oils')}>
            <p className="mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;{t('capabilities.tab1.p1')}
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">{t('capabilities.tab1.title1')}</h6>
              {t('capabilities.tab1.p2')}
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">{t('capabilities.tab1.title2')}</h6>
              {t('capabilities.tab1.p3')}
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">{t('capabilities.tab1.title3')}</h6>
              {t('capabilities.tab1.p4')}
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">{t('capabilities.tab1.title4')}</h6>
              {t('capabilities.tab1.p5')}
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">{t('capabilities.tab1.title5')}</h6>
              {t('capabilities.tab1.p6')}
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">{t('capabilities.tab1.title6')}</h6>
              {t('capabilities.tab1.p7')}
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">{t('capabilities.tab1.title7')}</h6>
              {t('capabilities.tab1.p8')}
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">{t('capabilities.tab1.title8')}</h6>
              {t('capabilities.tab1.p9')}
            </p>
            <p className="mb-4">
              <h6 className="mb-2 cg-color-red">{t('capabilities.tab1.title9')}</h6>
              {t('capabilities.tab1.p10')}
            </p>
            <p className="mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;{t('capabilities.tab1.p11')}
            </p>
          </Tab>
          <Tab eventKey="petrol" title={t('capabilities.petroleum')}>
            <div>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;{t('capabilities.tab2.p1')}
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;{t('capabilities.tab2.p2')}
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;{t('capabilities.tab2.p3')}
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;{t('capabilities.tab2.p4')}
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;{t('capabilities.tab2.p5')}
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;{t('capabilities.tab2.p6')}
              </p>
            </div>
          </Tab>
          <Tab eventKey="savunma" title={t('capabilities.defense-industry')}>
            <div>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;{t('capabilities.tab3.p1')}
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;{t('capabilities.tab3.p2')}
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;{t('capabilities.tab3.p3')}
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;{t('capabilities.tab3.p4')}
              </p>
              <p className="mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;{t('capabilities.tab3.p5')}
              </p>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default Page;