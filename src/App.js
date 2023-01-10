import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Favourites from "./components/Favourites";
import Navigation from "./components/Navigation";

function App() {
  const allCars = [
    {
      manufacturer: "Ferrari",
      model: "812 Competizione",
      image: "ferrari-812-competizione.png",
    },
    {
      manufacturer: "McLaren",
      model: "765lt Spyder",
      image: "mclaren-765lt-spyder.png",
    },
    {
      manufacturer: "Porsche",
      model: "911 GT3RS",
      image: "porsche-911-gt3rs.png",
    },
    {
      manufacturer: "Ferrari",
      model: "F8 Tributo",
      image: "ferrari-f8-tributo.png",
    },
    {
      manufacturer: "BMW",
      model: "M4",
      image: "bmw-m4-f82.png",
    },
  ];

  return (
    <div className="main">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage allCars={allCars} />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
