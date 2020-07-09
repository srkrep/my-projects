import { USER_LOGIN_DETAILS, USER_REG_DETAILS, USER_SIGN_OUT } from './types';

export const userSignUpDetails = (user) => {
    return (dispatch) => {
        // console.log("USER REG DETAILS :", user)
        dispatch({
            type: USER_REG_DETAILS,
            payload: user
        })
    }
}


export const userSignInDetails = (user) => {
    return (dispatch) => {
        // console.log("USER LOGIN DETAILS :", user)
        dispatch({
            type: USER_LOGIN_DETAILS,
            payload: user
        })
    }
}

export const userSignOut = (user) => {
    return (dispatch) => {
        // console.log("USER SIGN OUT :", user)
        dispatch({
            type: USER_SIGN_OUT,
            payload: user
        })
    }
}

