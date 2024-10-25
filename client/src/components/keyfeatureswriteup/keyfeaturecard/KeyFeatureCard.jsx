import "./KeyFeatureCard.css";

export default function KeyFeatureCard({
  title,
  description,
  icon: Icon,
  delay,
}) {
  return (
    <>
      <div
        data-aos="fade-down-right"
        data-aos-delay={delay}
        className="keyfeaturecardcontainer"
      >
        <div>
          {Icon && <Icon style={{ color: "var(--headingscolor)" }} size={30} />}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}
