import { Link } from "react-router-dom";
import "../scss/components/LogementCard.scss";

function LogementCard({ cover, title, id }) {
  return (
    <Link to={`/logement?id=${id}`}>
      <figure className="logementCard">
        <img src={cover} alt={title} />

        <figcaption>{title}</figcaption>
      </figure>
    </Link>
  );
}

export default LogementCard;
