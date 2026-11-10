import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Bestiary from "./pages/Bestiary";
import Items from "./pages/Items";
import Abilities from "./pages/Abilities";
import NPCs from "./pages/NPCs";
import CreatureDetails from "./pages/CreatureDetails";
import ItemDetails from "./pages/ItemDetails";
import NPCDetails from "./pages/NPCDetails";
import AbilityDetails from "./pages/AbilityDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/bestiario" element={<Bestiary />} />
        <Route path="/bestiario/:id" element={<CreatureDetails />} />
        <Route path="/itens" element={<Items />} />
        <Route path="/itens/:id" element={<ItemDetails />} />
        <Route path="/habilidades" element={<Abilities />} />
        <Route path="/habilidades/:id" element={<AbilityDetails />} />
        <Route path="/npcs" element={<NPCs />} />
        <Route path="/npcs/:id" element={<NPCDetails />} />
      </Routes>
    </>
  );
}

export default App;
