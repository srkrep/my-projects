import { USER_REG_DETAILS, USER_LOGIN_DETAILS } from '../Actions/types';


const initialState = {
    userLoginDetails : [],
    userRegDetails : []
}

console.log("Auth Reducer", initialState)

export default (state = initialState, action) => {
    console.log("AUTH ACTION", action)
    switch (action.type) {
        case USER_LOGIN_DETAILS:
            let loginDetails = state.userLoginDetails.push(action.payload)
            return {
              ...state,
              userLoginDetails: {
                  ...state.userLoginDetails,
                  userLoginDetails:loginDetails
                }
            }
        case USER_REG_DETAILS:
            let regDetails = state.userRegDetails.push(action.payload)
            return {
            ...state,
            userRegDetails: {
                ...state.userRegDetails,
                userRegDetails:regDetails
              }
            }
        default:
            return state;
    }
}