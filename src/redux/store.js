import { createStore } from "redux";
import reducer from './reducers/index'

const store = createStore(reducer, {});


export default store

// this is the store and the reducers are imported here from the index.jx