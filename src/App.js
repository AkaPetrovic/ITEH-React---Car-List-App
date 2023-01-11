import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Favourites from "./components/Favourites";
import Navigation from "./components/Navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck as fasFaCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck as farFaCircleCheck } from "@fortawesome/free-regular-svg-icons";

library.add(fasFaCircleCheck, farFaCircleCheck);

function App() {
  const [allCars, setAllCars] = useState([
    {
      id: 1,
      manufacturer: "Ferrari",
      model: "812 Competizione",
      image: "ferrari-812-competizione.png",
    },
    {
      id: 2,
      manufacturer: "McLaren",
      model: "765lt Spyder",
      image: "mclaren-765lt-spyder.png",
    },
    {
      id: 3,
      manufacturer: "Porsche",
      model: "911 GT3RS",
      image: "porsche-911-gt3rs.png",
    },
    {
      id: 4,
      manufacturer: "Ferrari",
      model: "F8 Tributo",
      image: "ferrari-f8-tributo.png",
    },
    {
      id: 5,
      manufacturer: "BMW",
      model: "M4",
      image: "bmw-m4-f82.png",
    },
  ]);

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
