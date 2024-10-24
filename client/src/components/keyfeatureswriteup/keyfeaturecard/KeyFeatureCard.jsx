import "./KeyFeatureCard.css";

export default function KeyFeatureCard({ title, description, icon: Icon }) {
  return (
    <>
      <div className="keyfeaturecardcontainer">
        <div>
          {Icon && <Icon style={{ color: "var(--headingscolor)" }} size={30} />}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}
