import { useState } from "react";
import { ReactComponent as ChevronUp } from "../assets/chevronUp.svg";
import "../scss/components/Dropdown.scss";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdownParent">
      <button className={`dropdown ${isOpen && "active"}`} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <ChevronUp />
      </button>
      <div>{children}</div>
    </div>
  );
}

export default Dropdown;
