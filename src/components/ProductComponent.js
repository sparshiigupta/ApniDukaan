import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./ProductComponent.module.css";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Link to={`/product/${id}`}>
        <div key={id} className={classes.card}>
          <img className={classes.img} src={image} alt={title} />
          <div className={classes.content}>
            <div className={classes.header}>{title}</div>
            <div className={classes.price}>$ {price}</div>
            <div className={classes.meta}>{category}</div>
          </div>
        </div>
      </Link>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
