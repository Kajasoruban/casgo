import axios from 'axios';
import { toast } from "react-toastify";
import { USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, jobGiverAction_FAIL, jobGiverAction_REQUEST, jobGiverAction_SUCCESS } from '../constants/userConstant';



export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
        const { data } = await axios.post("/api/users/auth", user);
        localStorage.setItem('userInfo', JSON.stringify(data));
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        toast.success("Login Successfully!");
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.message);
        console.log(error.response.data.message)
    }
}

// user sign up action
export const userSignUpAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST });
    try {
        const { data } = await axios.post("/api/users/", user);
        localStorage.setItem('userInfo', JSON.stringify(data));
        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        });
        toast.success("Register Successfully!");
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}


// jobGiverSignUpAction action
export const jobGiverSignUpAction = (user) => async (dispatch) => {
    dispatch({ type: jobGiverAction_REQUEST });
    try {
        const { data } = await axios.post("/api/users/", user);
        dispatch({
            type: jobGiverAction_SUCCESS,
            payload: data
        });
        toast.success("Register Successfully!");
    } catch (error) {
        dispatch({
            type: jobGiverAction_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}


//log out action
export const userLogoutAction = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT_REQUEST });
    try {
        localStorage.removeItem('userInfo');
        const { data } = await axios.get("/api/users/logout");
        dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: data
        });
        toast.success("Log out successfully!");
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}