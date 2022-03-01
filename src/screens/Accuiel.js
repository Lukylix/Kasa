import Slogan from "../components/Slogan";
import banner from "../assets/BannerAccuiel.png";

function Accueil() {
  return (
    <main>
      <Slogan src={banner} alt="Paysage côtier" title="Chez vous, partout et ailleurs" />
    </main>
  );
}

export default Accueil;
