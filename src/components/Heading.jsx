import React from "react";
import classes from "./Heading.module.css";

function Heading({ title }) {
  return (
    <div>
      <h1 className={classes.heading}>{title}</h1>
      <div className={classes.separator}></div>
    </div>
  );
}

export default Heading;
