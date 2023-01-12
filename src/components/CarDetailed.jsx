import React from "react";
import classes from "./CarDetailed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

function CarDetailed({ manufacturer, model, image, hp, torque, engine }) {
  const [descIsHidden, setDescIsHidden] = useState(true);
  const [detailsAreHidden, setDetailsAreHidden] = useState(true);

  //Getting the width of the browser window on every resize
  //
  //Current browser window width
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //
  //
  //

  function handleDescription() {
    setDescIsHidden((prevState) => !prevState);
  }

  function handleDetails() {
    setDetailsAreHidden((prevState) => !prevState);
  }

  return (
    <div className={classes.carWrapper}>
      {/* --- CarFrame Section Begins --- */}
      <div
        onMouseEnter={handleDescription}
        onMouseLeave={handleDescription}
        className={classes.carFrame}
      >
        {/* Image */}
        <div className={classes.imgWrapper}>
          <img
            className={classes.carImg}
            src={image}
            alt={manufacturer + " " + model}
          />
        </div>
        {/* Dark overlay */}
        <div className={classes.overlay}></div>
        {/* Description */}
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

          {/* Specs when the window size is 400px or lower */}
          {width <= 400 ? (
            <div className={classes.specs}>
              <p>
                <span>Hp:</span> {hp}
              </p>
              <p>
                <span>Torque:</span> {torque}
              </p>
              <p>
                <span>Engine type:</span> {engine}
              </p>
            </div>
          ) : null}
        </div>
      </div>
      {/* --- CarFrame Section Ends --- */}

      {/* --- CarDetails Section Begins --- */}
      {width > 400 ? (
        <div className={classes.carDetails}>
          <button
            onClick={handleDetails}
            type="button"
            className={classes.detailsButton}
          >
            Car details <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
          </button>
          <div className={classes.detailedDescriptionWrapper}>
            <div
              className={
                detailsAreHidden
                  ? classes.detailedDescription
                  : classes.detailedDescription + " " + classes.showDescription
              }
            >
              <p className={classes.data}>
                <span>Hp:</span> {hp}
              </p>
              <p className={classes.data}>
                <span>Torque:</span> {torque}
              </p>
              <p className={classes.data}>
                <span>Engine type:</span> {engine}
              </p>
            </div>
          </div>
        </div>
      ) : null}
      {/* --- CarDetails Section Ends --- */}
    </div>
  );
}

export default CarDetailed;
