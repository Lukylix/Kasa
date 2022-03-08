import { useState } from "react";
import "../scss/components/Carousel.scss";
import { ReactComponent as ChevronLeft } from "../assets/chevronLeft.svg";
import { ReactComponent as ChevronRight } from "../assets/chevronRight.svg";

function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = children?.length || 0;

  const next = () => {
    if (currentIndex < length - 1) return setCurrentIndex(currentIndex + 1);
    setCurrentIndex(0);
  };
  const prev = () => {
    if (currentIndex > 0) return setCurrentIndex(currentIndex - 1);
    setCurrentIndex(length - 1);
  };

  return (
    <div className="carousel">
      {length > 1 && (
        <button onClick={prev} aria-label="Image précedente" className="leftArrow">
          <ChevronLeft />
        </button>
      )}
      <div className="carouselContent" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {children}
      </div>
      {length > 1 && (
        <button onClick={next} aria-label="Image suivante" className="rightArrow">
          <ChevronRight />
        </button>
      )}
      {length > 1 && (
        <p className="imageNumber">
          {currentIndex + 1}/{length}
        </p>
      )}
    </div>
  );
}

export default Carousel;
