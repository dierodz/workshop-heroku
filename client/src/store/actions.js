import axios from "axios";

export const SET_LOADING = "SET_LOADING";
export const SET_PRODUCTS = "SET_PRODUCTS";

export function setLoading(value) {
  return (dispatch) => {
    dispatch({ type: SET_LOADING, payload: { loading: value } });
  };
}

export function getProducts(errorCallback) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/products`);
      if (response?.data) {
        dispatch({ type: SET_PRODUCTS, payload: { products: response.data } });
      }
    } catch (error) {
      errorCallback && errorCallback(error);
    }
  };
}
