import { ReactComponent as LogoKasa } from "../assets/logoKasa.svg";
import "../scss/components/Footer.scss";

function Footer() {
  return (
    <footer>
      <LogoKasa className="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
