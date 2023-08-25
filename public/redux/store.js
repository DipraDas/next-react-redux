import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./reducers/ProductReducer";
import { createStore } from 'redux';

const store = createStore(productReducer, composeWithDevTools());

export default store;