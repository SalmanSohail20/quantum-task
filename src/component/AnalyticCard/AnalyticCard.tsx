
import "./AnalyticCard.scss";

const cardData = [
  {
    title: "Total Products",
    value: "12",
    active: true,
  },
  {
    title: "Compared",
    value: "1/12",
  },
  {
    title: "Not compared",
    value: "11/12",
  },
  {
    title: "Total competitors",
    value: "2",
  },
];

const AnalyticCard = () => {
  return (
    <div className="analytic_crd_wrap">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`analytic_crd ${card.active ? "active" : ""}`}
        >
          <strong className="crd_title">{card.title}</strong>
          <span className="crd_num">{card.value}</span>
        </div>
      ))}
    </div>
  );
};

export default AnalyticCard;
