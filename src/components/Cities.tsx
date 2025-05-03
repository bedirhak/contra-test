import WorldMap from "react-svg-worldmap";

const Cities = () => {
  const data = [
    { country: "ru", value: "- Moskova & St. Petersburg" }, // russia
    { country: "tr", value: "- İstanbul & Ankara" }, // turkey
    { country: "az", value: "- Bakü" }, // azerbaijan
    { country: "my", value: "- Kuala Lumpur" }, // malaysia
    { country: "hk", value: "- Hong Kong" }, // hong kong
  ];

  return (
    <div className="cg-cities-map">
      <h2 className="cg-part-title">Faaliyet Gösterdiğimiz Ülke ve Şehirler</h2>
      <div className="cg-cities-map-container">
        <WorldMap color="red" size="lg" data={data} />
      </div>
    </div>
  );
};

export default Cities;
