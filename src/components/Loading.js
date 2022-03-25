import React from "react";
import classes from "./Loading.module.css";
function Loading() {
  return (
    <div className={classes.box}>
      <div className={`${classes.b} ${classes.b1}`}></div>
      <div className={`${classes.b} ${classes.b2}`}></div>
      <div className={`${classes.b} ${classes.b3}`}></div>
      <div className={`${classes.b} ${classes.b4}`}></div>
    </div>
  );
}

export default Loading;
