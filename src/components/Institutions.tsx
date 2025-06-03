// Component: ResponsiveBanner
import React from "react";
import Container from "./Container";
import faaliyet1 from "../assets/images/homepage/faaliyet1.png";
import faaliyet2 from "../assets/images/homepage/faaliyet2.png";
import faaliyet3 from "../assets/images/homepage/faaliyet3.png";
import { useTranslation } from "react-i18next";

const Institutions: React.FC = () => {
      const { t } = useTranslation();
  
  return (
    <Container >
      <div className="cg-institutions-content">
        <h1 className="cg-part-title">{t("home-title2")}</h1>
        <div className="cg-institutions-parts">
          <div className="cg-institution" style={{ backgroundImage: `url(${faaliyet1})` }}>
            <span>{t("petrol")}</span>
          </div>
          <div className="cg-institution" style={{ backgroundImage: `url(${faaliyet2})` }}>

            <span>{t("savunma")}</span>
          </div>
          <div className="cg-institution" style={{ backgroundImage: `url(${faaliyet3})` }}>
            <span>{t("industrial-oil")}</span>

          </div>
        </div>
      </div>
     </Container>
  );
};

export default Institutions;
