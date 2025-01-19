// Component: ResponsiveBanner
import React from "react";
import Container from "./Container";
import faaliyet1 from "../assets/images/homepage/faaliyet1.png";
import faaliyet2 from "../assets/images/homepage/faaliyet2.png";
import faaliyet3 from "../assets/images/homepage/faaliyet3.png";

const Institutions: React.FC = () => {
  return (
    <Container >
      <div className="cg-institutions-content">
        <h1 className="cg-part-title">Faaliyet Alanları</h1>
        <div className="cg-institutions-parts">
          <div className="cg-institution" style={{ backgroundImage: `url(${faaliyet1})` }}>
            <span>Petrol</span>
          </div>
          <div className="cg-institution" style={{ backgroundImage: `url(${faaliyet2})` }}>

            <span>Savunma Sanayii</span>
          </div>
          <div className="cg-institution" style={{ backgroundImage: `url(${faaliyet3})` }}>
            <span>Endüstriyel Yağlar</span>

          </div>
        </div>
      </div>
     </Container>
  );
};

export default Institutions;
