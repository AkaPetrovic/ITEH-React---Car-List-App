import React from "react";
import CarDetailed from "./CarDetailed";
import classes from "./Favourites.module.css";
import Heading from "./Heading";

function Favourites({ allCars }) {
  return (
    <div className={classes.favourites}>
      <Heading title="Favourites" />
      <div className={classes.allCars}>
        {allCars.map((car) => {
          if (car.isFavourite) {
            return (
              <CarDetailed
                key={car.id}
                manufacturer={car.manufacturer}
                model={car.model}
                image={car.image}
                hp={car.hp}
                torque={car.torque}
                engine={car.engine}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Favourites;
