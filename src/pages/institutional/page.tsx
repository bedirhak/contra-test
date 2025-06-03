import Container from "../../components/Container";
import Values from "../../components/Values";
import Institutions from "../../components/Institutions";
import { useTranslation } from 'react-i18next';

const Institutional = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="cg-institutional-page">
        <h1 className="cg-part-title mt-3">{t('institutional.title')}</h1>
        {t("institutional.paragraphs", { returnObjects: true }).map((p: string, idx: number) => (
          <p key={idx} className="mb-3">
            <span className="cg-mobile-d-none">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {p}
          </p>
        ))}
      </div>
      <Values />
      <div>
        <h1 className="cg-part-title mt-3">{t('institutional.missionTitle')}</h1>
        <div className="cg-quotation">
          <div className="cg-quotation-icon">❝</div>
          <div className="cg-quotation-text">{t('institutional.missionText')}</div>
        </div>
      </div>
      <Institutions />
    </Container>
  );
};

export default Institutional;
