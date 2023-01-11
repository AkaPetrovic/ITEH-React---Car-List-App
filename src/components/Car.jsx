import React from "react";
import classes from "./Car.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Car({ manufacturer, model, image }) {
  const [descIsHidden, setDescIsHidden] = useState(true);
  const [isFavourite, setIsFavourite] = useState(false);

  function changeIcons() {
    setIsFavourite((prevState) => !prevState);
  }

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

      <div
        className={
          descIsHidden
            ? classes.descriptionWrapper + " " + classes.hide
            : classes.descriptionWrapper + " " + classes.show
        }
      >
        <p className={classes.description}>
          <span className={classes.bolderDescription}>{manufacturer}</span>
          <br />
          {model}
        </p>

        <FontAwesomeIcon
          onClick={changeIcons}
          icon="fa-regular fa-circle-check"
          className={isFavourite ? classes.scaledDown : classes.icon}
        />

        <FontAwesomeIcon
          onClick={changeIcons}
          icon="fa-solid fa-circle-check"
          size="3x"
          className={isFavourite ? classes.icon : classes.scaledDown}
        />
      </div>
    </div>
  );
}

export default Car;
