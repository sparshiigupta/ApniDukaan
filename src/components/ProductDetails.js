import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import Loading from "./Loading";
import classes from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className={classes.container}>
      {Object.keys(product).length === 0 ? (
        <Loading />
      ) : (
        <div className={classes.product}>
          <img className={classes.product_img} src={image} alt="item" />
          <div className={classes.product_info}>
            <h1 className={classes.title}>{title}</h1>
            <h2 className={classes.price}>
              <p>${price}</p>
            </h2>
            <h3 className={classes.category}>{category}</h3>
            <p className={classes.product_description}>{description}</p>
            <button className={classes.add_to_cart_button}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
