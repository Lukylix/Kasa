import { ReactComponent as ChevronUp } from "../assets/chevronUp.svg";
import "../scss/components/Dropdown.scss";

function Dropdown({ title, children }) {
  return (
    <details>
      <summary>
        {title} <ChevronUp />
      </summary>
      {children}
    </details>
  );
}

export default Dropdown;
