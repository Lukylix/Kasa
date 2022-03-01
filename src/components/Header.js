import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import house from "../assets/house.svg";
import "../scss/components/Header.scss";

function Header() {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">
          K
          <img className="house" src={house} alt="Logo" />
          sa
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <CustomLink to="/">Accueil</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">A Propos</CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
