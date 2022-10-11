import axios from "axios";

// ACTION TYPES
// const GET_PRODUCTS = "GET_PRODUCTS"
export const SET_PRODUCTS = "SET_PRODUCTS";
// update
// delete

// ACTION CREATORS
// export const _getProducts = (products) => ({
export const _setProducts = (products) => ({
  // type: GET_PRODUCTS,
  type: SET_PRODUCTS,
  products,
});

// THUNKS
// export const getProducts = () => {
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/products");
      // dispatch(_getProducts(data))
      dispatch(_setProducts(data));
    } catch (error) {
      console.error(error);
    }
  };
};

// REDUCER
// const initialState = {}
const initialState = [];

export default function productsReducer(state = initialState, action) {
  // console.log('action: ', action.products)
  switch (action.type) {
    // case GET_PRODUCTS:
    case SET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
