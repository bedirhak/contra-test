import WorldMap from "react-svg-worldmap";
import { useTranslation } from "react-i18next";

const Cities = () => {
    const { t } = useTranslation();


  const data = [
    { country: "ru", value: "- Moskova & St. Petersburg" }, // russia
    { country: "tr", value: "- İstanbul & Ankara" }, // turkey
    { country: "az", value: "- Bakü" }, // azerbaijan
    { country: "my", value: "- Kuala Lumpur" }, // malaysia
    { country: "hk", value: "- Hong Kong" }, // hong kong
  ];

  return (
    <div className="cg-cities-map">
      <h2 className="cg-part-title">{t("home-title2")}</h2>
      <div className="cg-cities-map-container">
        <WorldMap color="red" size="lg" data={data} />
      </div>
    </div>
  );
};

export default Cities;
