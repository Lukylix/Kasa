import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import Footer from "../components/Footer";
import logements from "../assets/logements.json";
import Carousel from "../components/Carousel";

function Logement() {
  const [searchParams] = useSearchParams();
  const logementId = searchParams.get("id");
  const logement = useMemo(() => logements.filter((logement) => logement.id === logementId), [logementId])[0];
  return (
    <>
      <main>
        <Carousel>
          {logement.pictures.map((picture, index) => (
            <img src={picture} alt={logement.title} key={index} />
          ))}
        </Carousel>
      </main>
      <Footer />
    </>
  );
}

export default Logement;
