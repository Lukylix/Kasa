import { ReactComponent as Star } from "../assets/star.svg";

function Stars({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Star className="star" key={i} fill={rating <= i ? "#E3E3E3" : "#FF6060"} />);
  }
  return stars;
}

export default Stars;
