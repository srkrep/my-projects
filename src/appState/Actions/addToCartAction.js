import { ADD_PRODUCT_TO_CART } from './types';

export const addToCart = (product) => {
    return (dispatch) => {
        console.log("ADD TO CART ACTION")
        dispatch({
            type: ADD_PRODUCT_TO_CART
        })
    }
}