import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QTY, REMOVE_QTY } from './types';

export const addToCart = (item) => {
    return (dispatch) => {
        // console.log("ADD TO CART ACTION")
        dispatch({
            type: ADD_TO_CART,
            payload: item
        })
    }
}

export const removeFromCart = (item) => {
    return (dispatch) => {
        // console.log("REMOVE FROM CART ACTION")
        dispatch({
            type: REMOVE_FROM_CART,
            payload: item
        })
    }
}

export const itemQty = (action, item) => {
    return (dispatch) => {
        // console.log("ADD QTY :", action , item)
        dispatch({
            type: action === 'increase' ? ADD_QTY : REMOVE_QTY,
            payload: item
        })
    }
}