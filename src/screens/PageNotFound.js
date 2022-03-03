import { Link } from "react-router-dom";
import "../scss/screens/PageNotFound.scss";

function PageNotFound() {
  return (
    <main className="pageNotFound">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link style={{ textDecoration: "underline" }} to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default PageNotFound;
