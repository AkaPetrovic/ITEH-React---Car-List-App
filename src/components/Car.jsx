import React from "react";
import classes from "./Car.module.css";
import { useState } from "react";

function Car({ manufacturer, model, image }) {
  const [descIsHidden, setDescIsHidden] = useState(true);

  function handleDescription() {
    setDescIsHidden((prevState) => !prevState);
  }

  return (
    <div
      onMouseEnter={handleDescription}
      onMouseLeave={handleDescription}
      className={classes.carFrame}
    >
      <div className={classes.imgWrapper}>
        <img
          className={classes.carImg}
          src={image}
          alt={manufacturer + " " + model}
        />
      </div>

      <div className={classes.overlay}></div>

      <div className={classes.descriptionWrapper}>
        <p
          className={
            descIsHidden
              ? classes.description + " " + classes.hide
              : classes.description + " " + classes.show
          }
        >
          <span className={classes.bolderDescription}>{manufacturer}</span>
          <br />
          {model}
        </p>
      </div>
    </div>
  );
}

export default Car;
