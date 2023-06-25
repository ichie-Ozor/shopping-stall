import { ActionTypes } from "../constant/action-types"
const initialState = {
    product: [
        {
            id: 1,
            title: "Ozor",
            category: "Programmer"
        }
    ]
}

export const productReducer = (state = initialState, {type, payload}) => {
   switch (type) {
        case ActionTypes.SET_PRODUCTS: 
            return state
        default:
            return state;
   }
}