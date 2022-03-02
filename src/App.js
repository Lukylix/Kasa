import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Accuiel from "./screens/Accuiel";
import APropos from "./screens/APropos.js";
import Logement from "./screens/Logement.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Accuiel />} />
        <Route path="/about" element={<APropos />} />
        <Route path="/logement" element={<Logement />} />
      </Routes>
    </Router>
  );
}

export default App;
