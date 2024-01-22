import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_RESET, USER_SIGNIN_SUCCESS, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_RESET, USER_SIGNUP_SUCCESS } from "../constants/userConstant"





export const userReducerSignIn = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true, userInfo: null, isAuthenticated: false }
        case USER_SIGNIN_SUCCESS:
            return {

                loading: false,
                userInfo: action.payload,
                isAuthenticated: true
            }
        case USER_SIGNIN_FAIL:
            return { loading: false, userInfo: null, isAuthenticated: false, error: action.payload }
        case USER_SIGNIN_RESET:
            return {}
        default:
            return state;
    }

}

// sign up reducer
export const userReducerSignUp = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading: true ,userInfo: null, isAuthenticated: false}
        case USER_SIGNUP_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                isAuthenticated: true
            }
        case USER_SIGNUP_FAIL:
            return { loading: false, userInfo: null, isAuthenticated: false, error: action.payload }
        case USER_SIGNUP_RESET:
            return {}
        default:
            return state;
    }
}


