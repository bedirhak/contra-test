// Component: ResponsiveBanner
import React from "react";
import Container from "./Container";
import { GrStatusGood } from "react-icons/gr";
const Values: React.FC = () => {
  const cardData = [
    { icon: <GrStatusGood />, title: "Kalite" },
    { icon: "🚀", title: "İnovasyon" },
    { icon: "🤝", title: "Profesyonellik" },
  ];

  return (
    <Container>
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
  );
};

export default Values;
