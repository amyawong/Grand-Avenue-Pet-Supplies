import { createStore, combineReducers, applyMiddleware } from "redux";
// import { configureStore } from "reduxjs/toolkit"
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./allProducts";
import singleProductReducer from "./singleProduct";

const reducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
})

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })));

const store = createStore(reducer, middleware);

export default store;
