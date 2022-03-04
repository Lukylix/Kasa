import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import { ReactComponent as LogoKasa } from "../assets/logoKasa.svg";

import "../scss/components/Header.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1 aria-label="Kasa logo">
          <LogoKasa className="logo" />
        </h1>
      </Link>
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
