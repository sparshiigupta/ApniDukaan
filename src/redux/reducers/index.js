import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productsReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});
