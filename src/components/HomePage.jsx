import React from "react";
import classes from "./HomePage.module.css";
import Car from "./Car";

function HomePage({ allCars }) {
  return (
    <div className={classes.main}>
      <h1 className={classes.heading}>Home page</h1>
      <div className={classes.allCars}>
        {allCars.map((car) => (
          <Car
            key={car.id}
            manufacturer={car.manufacturer}
            model={car.model}
            image={car.image}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
