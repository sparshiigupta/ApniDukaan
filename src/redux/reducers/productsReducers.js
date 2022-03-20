import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  products: [
    {
      id: 1,
      name: "Sparshi",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
