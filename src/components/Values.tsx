import React from "react";
import Container from "./Container";
import { GrStatusGood } from "react-icons/gr";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from 'react-i18next';

const Values: React.FC = () => {
  const { t } = useTranslation();

  const cardData = [
    { 
      icon: <GrStatusGood />, 
      titleKey: "values.customer_oriented.title",
      emoji: "👥"
    },
    { 
      icon: "🤝", 
      titleKey: "values.professionalism.title",
      emoji: "🤝"
    },
    { 
      icon: "🚀", 
      titleKey: "values.innovation.title",
      emoji: "🚀"
    },
  ];

  return (
    <>
      <Container>
        <h1 className="cg-part-title mt-3">{t('values.title')}</h1>

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
              <div style={{ fontSize: "2em" }}>{card.emoji}</div>
              <h3>{t(card.titleKey)}</h3>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{t('values.customer_oriented.title')}</Accordion.Header>
            <Accordion.Body>
              {t('values.customer_oriented.description')}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{t('values.professionalism.title')}</Accordion.Header>
            <Accordion.Body>
              {t('values.professionalism.description')}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>{t('values.innovation.title')}</Accordion.Header>
            <Accordion.Body>
              {t('values.innovation.description')}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Values;