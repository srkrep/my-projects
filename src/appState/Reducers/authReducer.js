import { USER_REG_DETAILS, USER_LOGIN_DETAILS, USER_SIGN_OUT } from '../Actions/types';

const JWT_TOKEN = localStorage.getItem('JWT');

const initialState = {
    userLoginDetails : {},
    userRegDetails : {},
    isAuthenticated : JWT_TOKEN === null ? false : true
}

// console.log("Auth Reducer", initialState)

export default (state = initialState, action) => {
    console.log("AUTH ACTION", action)
    switch (action.type) {
        case USER_LOGIN_DETAILS:
            return {
              ...state,
              userLoginDetails:action.payload 
            }
        case USER_REG_DETAILS:
            return {
            ...state,
            userRegDetails:action.payload
            }
        case USER_SIGN_OUT:
            localStorage.clear()
            return {
            ...state,
            isAuthenticated:action.payload
            }
        default:
            return state;
    }
}