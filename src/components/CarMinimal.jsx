import React from "react";
import classes from "./CarMinimal.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CarMinimal({
  id,
  manufacturer,
  model,
  image,
  isFavourite,
  addToFavourites,
}) {
  const [descIsHidden, setDescIsHidden] = useState(true);

  function handleAddCarToFavourites() {
    addToFavourites(id);
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
          onClick={handleAddCarToFavourites}
          icon="fa-regular fa-circle-check"
          className={isFavourite ? classes.scaledDown : classes.icon}
        />

        <FontAwesomeIcon
          onClick={handleAddCarToFavourites}
          icon="fa-solid fa-circle-check"
          className={isFavourite ? classes.icon : classes.scaledDown}
          style={{ color: "turquoise" }}
        />
      </div>
    </div>
  );
}

export default CarMinimal;
