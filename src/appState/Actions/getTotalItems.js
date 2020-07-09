import { GET_TOTAL_ITEMS_IN_CART } from './types';

export const getItemsInCart = () => {
    return (dispatch) => {
        // console.log("GET_TOTAL_ITEMS_IN_CART")
        dispatch({
            type: GET_TOTAL_ITEMS_IN_CART
        })
    }
}

