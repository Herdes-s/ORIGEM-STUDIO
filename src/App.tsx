import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Bestiary from "./pages/Bestiary";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/bestiario" element={<Bestiary />} />
      </Routes>
    </>
  );
}

export default App;
