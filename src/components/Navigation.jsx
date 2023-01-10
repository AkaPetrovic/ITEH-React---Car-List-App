import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  const location = useLocation();

  return (
    <nav className={classes.nav}>
      <ul>
        {location.pathname === "/" ? (
          <li>Home</li>
        ) : (
          <Link to="/">
            Home
          </Link>
        )}
        {location.pathname === "/favourites" ? (
          <li>Favourites</li>
        ) : (
          <Link to="/favourites">
            Favourites
          </Link>
        )}
        
      </ul>
    </nav>
  );
}

export default Navigation;
