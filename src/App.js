import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Accueil</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
