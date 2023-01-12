import "./App.css";
import { Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck as farFaCircleCheck } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleCheck as fasFaCircleCheck,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import HomePage from "./components/HomePage";
import Favourites from "./components/Favourites";
import Navigation from "./components/Navigation";
import { useState } from "react";

library.add(fasFaCircleCheck, farFaCircleCheck, faChevronDown);

function App() {
  const [allCars, setAllCars] = useState([
    {
      id: 1,
      manufacturer: "Ferrari",
      model: "812 Competizione",
      image: "ferrari-812-competizione.png",
      isFavourite: false,
      hp: "819 hp",
      torque: "695 Nm",
      engine: "6.5l V12",
    },
    {
      id: 2,
      manufacturer: "McLaren",
      model: "765lt Spyder",
      image: "mclaren-765lt-spyder.png",
      isFavourite: false,
      hp: "755 hp",
      torque: "800 Nm",
      engine: "4.0l V8",
    },
    {
      id: 3,
      manufacturer: "Porsche",
      model: "911 GT3RS",
      image: "porsche-911-gt3rs.png",
      isFavourite: false,
      hp: "510 hp",
      torque: "479 Nm",
      engine: "4.0l F6",
    },
    {
      id: 4,
      manufacturer: "Ferrari",
      model: "F8 Tributo",
      image: "ferrari-f8-tributo.png",
      isFavourite: false,
      hp: "710 hp",
      torque: "770 Nm",
      engine: "3.9l V8",
    },
    {
      id: 5,
      manufacturer: "BMW",
      model: "M4",
      image: "bmw-m4-f82.png",
      isFavourite: false,
      hp: "450 hp",
      torque: "550 Nm",
      engine: "3.0l I6",
    },
  ]);

  function handleAddToFavourites(id) {
    const newCars = [...allCars];
    newCars[id - 1].isFavourite = !newCars[id - 1].isFavourite;
    setAllCars(newCars);
  }

  return (
    <div className="main">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              allCars={allCars}
              addToFavourites={handleAddToFavourites}
            />
          }
        />
        <Route path="/favourites" element={<Favourites allCars={allCars} />} />
      </Routes>
    </div>
  );
}

export default App;
