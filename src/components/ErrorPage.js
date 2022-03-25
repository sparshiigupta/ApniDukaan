import React from "react";
import { Link } from "react-router-dom";
import classes from "./ErrorPage.module.css";
const ErrorPage = () => {
  return (
    <section className={classes.page_404}>
      <h2>404</h2>
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404"
      />
      <h3>Look like you're lost</h3>
      <h4>the page you are looking for not avaible!</h4>
      <Link to="/" className={classes.link_404}>
        Go to Home
      </Link>
    </section>
  );
};

export default ErrorPage;
