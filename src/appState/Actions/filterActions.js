import { FILTER_ALL_TOYS, FILTER_SOFT_TOYS, FILTER_WOODEN_TOYS } from './types';

export const filterAllToys = () => {
    return (dispatch) => {
        console.log("FILTER_ALL_TOYS")
        dispatch({
            type: FILTER_ALL_TOYS
        })
    }
}

export const softToys = () => {
    return (dispatch) => {
        console.log("FILTER_SOFT_TOYS")
        dispatch({
            type: FILTER_SOFT_TOYS
        })
    }
}

export const woodenToys = () => {
    return (dispatch) => {
        console.log("FILTER_WOODEN_TOYS")
        dispatch({
            type: FILTER_WOODEN_TOYS
        })
    }
}