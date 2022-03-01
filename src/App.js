import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Accuiel from "./screens/Accuiel";
import APropos from "./screens/APropos.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accuiel />} />
        <Route path="/about" element={<APropos />} />
      </Routes>
    </Router>
  );
}

export default App;
