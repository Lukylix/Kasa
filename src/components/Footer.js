import Logo from "./Logo";
import "../scss/components/Footer.scss";

function Footer() {
  return (
    <footer>
      <Logo fill="black" className="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
