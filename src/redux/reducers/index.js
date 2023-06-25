import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allPRoducts: productReducer,
})

export default reducers