import { ActionTypes } from "../constant/action-types"
const initialState = {
    product: []
}

export const productReducer = (state = initialState, {type, payload}) => {
   switch (type) {
        case ActionTypes.SET_PRODUCTS: 
            return {...state, product:payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT: 
            return {}
        default:
            return state;
   }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        default:
            return state;
    }
}

//all the individual actions are imported here and used to describe the reducer. 
// So this is the reducer page for eact action to be taken
//This page contains different reducers and they are individually sent to the index.js file
//Using the switch case statement and action type, we can actually harmonise the reducers into one 
