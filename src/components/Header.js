import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.nav_item}>
        <Link to="/">
          <h2>ApniDukan</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
