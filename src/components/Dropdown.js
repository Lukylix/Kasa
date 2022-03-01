import { useState } from "react";
import chevronUp from "../assets/chevronUp.svg";
import "../scss/components/Dropdown.scss";

function Dropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className={`dropdown ${isOpen && "active"}`} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img src={chevronUp} alt="Icone chevron" />
      </button>
      <div>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Dropdown;
