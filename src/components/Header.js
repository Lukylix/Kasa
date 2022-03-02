import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import { ReactComponent as LogoKasa } from "../assets/logoKasa.svg";

import "../scss/components/Header.scss";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
          <LogoKasa className="logo" />
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
