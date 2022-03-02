import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import Logo from "./Logo";
import house from "../assets/house.svg";
import "../scss/components/Header.scss";

function Header() {
  return (
    <header>
      <h1>
        <Logo className="logo" />
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
