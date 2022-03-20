import { combineReducers } from "redux";
import { productReducer } from "./productsReducers";

export const reducer = combineReducers({
  allProducts: productReducer,
});
