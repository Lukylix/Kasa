import { useState } from "react";
import chevronUp from "../assets/chevronUp.svg";
import "../scss/components/Dropdown.scss";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdownParent">
      <button className={`dropdown ${isOpen && "active"}`} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img src={chevronUp} alt="Icone chevron" />
      </button>
      <div>{children}</div>
    </div>
  );
}

export default Dropdown;
