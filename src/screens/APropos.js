import Slogan from "../components/Slogan";
import banner from "../assets/BannerAPropos.png";
import DropDown from "../components/Dropdown";
import Footer from "../components/Footer";
import "../scss/screens/APropos.scss";

function APropos() {
  return (
    <>
      <main>
        <Slogan src={banner} alt="Paysage de montagne" />
        <section className="dropdownContainer">
          <DropDown title="Fiablilité">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
              et toutes les informations sont régulièrement vérifiées par nos équipes.
            </p>
          </DropDown>
          <DropDown title="Respect">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
              perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
          </DropDown>
          <DropDown title="Service">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à
              nous contacter si vous avez la moindre question.
            </p>
          </DropDown>
          <DropDown title="Sécurité">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
              correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte
              qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous
              organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </DropDown>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default APropos;
