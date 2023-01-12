import React from "react";
import classes from "./HomePage.module.css";
import CarMinimal from "./CarMinimal";
import Heading from "./Heading";

function HomePage({ allCars, addToFavourites }) {
  return (
    <div className={classes.home}>
      <Heading title="Home page" />
      <div className={classes.allCars}>
        {allCars.map((car) => (
          <CarMinimal
            key={car.id}
            id={car.id}
            manufacturer={car.manufacturer}
            model={car.model}
            image={car.image}
            isFavourite={car.isFavourite}
            addToFavourites={addToFavourites}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
