import { USER_CHECKOUT_DETAILS } from '../Actions/types';

const initialState = {
    
}

console.log("CheckOut Reducer", initialState)

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_CHECKOUT_DETAILS:
            return {
              ...state,
            }
      
        default:
            return state;
    }
}