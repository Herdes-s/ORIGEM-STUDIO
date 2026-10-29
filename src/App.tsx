import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/galeria" element={<h2>Galeria do ORIGEM</h2>}></Route>
      </Routes>
    </>
  );
}

export default App;
