import Slogan from "../components/Slogan";
import Footer from "../components/Footer";
import LogementCard from "../components/LogementCard";
import banner from "../assets/BannerAccuiel.png";
import logements from "../assets/logements.json";
import "../scss/screens/Accuiel.scss";

function Accueil() {
  return (
    <>
      <main>
        <Slogan src={banner} alt="Paysage côtier" title="Chez vous, partout et ailleurs" />
        <section className="logementsContainer">
          {logements.map((logement) => (
            <LogementCard key={logement.id} cover={logement.cover} title={logement.title} id={logement.id} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Accueil;
