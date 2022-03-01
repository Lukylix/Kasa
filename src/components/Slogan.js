import "../scss/components/Slogan.scss";

function Slogan({ src, alt, title }) {
  return (
    <div className="sloganContainer">
      <img src={src} alt={alt} />
      {title && <h2>{title}</h2>}
    </div>
  );
}

export default Slogan;
