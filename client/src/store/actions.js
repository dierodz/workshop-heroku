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
export function createProducts(product, errorCallback) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(`/products`, product);
      if (response?.data) {
        dispatch(setLoading(false));

        dispatch(getProducts());
      }
    } catch (error) {
      errorCallback && errorCallback(error);
    }
  };
}
export function updateProducts(product, errorCallback) {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/products/${product.id}`, product);
      if (response?.data) {
        dispatch(getProducts());
      }
    } catch (error) {
      errorCallback && errorCallback(error);
    }
  };
}
export function deleteProducts(product, errorCallback) {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/products/${product.id}`);
      if (response?.data) {
        dispatch(getProducts());
      }
    } catch (error) {
      errorCallback && errorCallback(error);
    }
  };
}
