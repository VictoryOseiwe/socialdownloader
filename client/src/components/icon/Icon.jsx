import "./Icon.css";
export default function Icon({ icon, text }) {
  return (
    <>
      <img className="icon" src={icon} alt={text} />
    </>
  );
}
