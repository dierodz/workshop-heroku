import { SET_LOADING, SET_PRODUCTS } from "./actions";

const initialState = {
  loading: false,
  products: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, ...payload };
    case SET_PRODUCTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
