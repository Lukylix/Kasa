import Slogan from "../components/Slogan";
import Footer from "../components/Footer";
import banner from "../assets/BannerAccuiel.png";

function Accueil() {
  return (
    <>
      <main>
        <Slogan src={banner} alt="Paysage côtier" title="Chez vous, partout et ailleurs" />
      </main>
      <Footer />
    </>
  );
}

export default Accueil;
