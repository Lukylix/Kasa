import Slogan from "../components/Slogan";
import LogementCard from "../components/LogementCard";
import banner from "../assets/BannerAccuiel.png";
import logements from "../assets/logements.json";
import "../scss/screens/Accuiel.scss";

function Accueil() {
  return (
    <main>
      <Slogan src={banner} alt="Paysage côtier" title="Chez vous, partout et ailleurs" />
      <section aria-label="Les logements" className="logementsContainer">
        {logements.map((logement) => (
          <LogementCard key={logement.id} cover={logement.cover} title={logement.title} id={logement.id} />
        ))}
      </section>
    </main>
  );
}

export default Accueil;
