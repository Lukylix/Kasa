import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Footer from "../components/Footer";
import logements from "../assets/logements.json";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Stars from "../components/Stars";
import "../scss/screens/Logement.scss";
import Dropdown from "../components/Dropdown";

function Logement() {
  const [searchParams] = useSearchParams();
  const logementId = searchParams.get("id");
  const logement = useMemo(() => logements.filter((logement) => logement.id === logementId), [logementId])[0];

  let navigate = useNavigate();
  useEffect(() => {
    if (!logement) navigate("/404");
  }, [logement, navigate]);

  return (
    <>
      <main>
        <Carousel>
          {logement?.pictures.map((picture, index) => (
            <img src={picture} alt={logement.title} key={index} />
          ))}
        </Carousel>
        <section className="details">
          <header>
            <div>
              <h3>{logement.title}</h3>
              <p className="details__location">{logement.location}</p>
              {logement.tags.map((tag, index) => (
                <Tag name={tag} key={index} />
              ))}
            </div>
            <div className="details__host-rate">
              <div className="host">
                <p>{logement.host.name}</p>
                <img src={logement.host.picture} alt={logement.host.name} />
              </div>
              <div className="rating">
                <Stars rating={logement.rating} />
              </div>
            </div>
          </header>
          <Dropdown title="Description">
            <p>{logement.description}</p>
          </Dropdown>
          <Dropdown title="Equipements">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Dropdown>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Logement;
