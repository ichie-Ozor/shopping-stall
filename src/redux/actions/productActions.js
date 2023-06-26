import { ActionTypes } from '../constant/action-types'

export const setProducts = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) => {
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeselectedProduct = () => {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

//the action type description is imported here and used to describe the individual action 