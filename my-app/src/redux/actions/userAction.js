import axios from 'axios';
import { toast } from "react-toastify";
import { USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_PROFILE_FAIL,
     USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, 
     USER_SIGNIN_SUCCESS, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, 
     jobGiverAction_FAIL, jobGiverAction_REQUEST, jobGiverAction_SUCCESS, jobSeekerAction_FAIL, 
     jobSeekerAction_REQUEST, jobSeekerAction_SUCCESS,
     ALL_USER_LOAD_REQUEST, ALL_USER_LOAD_SUCCESS, ALL_USER_LOAD_FAIL, APPLIED_JOBS_REQUEST, APPLIED_JOBS_SUCCESS, APPLIED_JOBS_FAIL, jobHistory_Action_REQUEST, jobHistory_Action_SUCCESS, jobHistory_Action_FAIL, Giver_PROFILE_REQUEST, Giver_PROFILE_SUCCESS, Giver_PROFILE_FAIL, NOT_APPROVED_REQUEST, NOT_APPROVED_SUCCESS, NOT_APPROVED_FAIL, APPROVED_BY_Id_REQUEST, APPROVED_BY_Id_SUCCESS, APPROVED_BY_Id_FAIL, Payment_History_Action_REQUEST, Payment_History_Action_SUCCESS, Payment_History_Action_FAIL, NOTIFICATIONS_REQUEST, NOTIFICATIONS_SUCCESS, NOTIFICATIONS_FAIL, MARK_AS_READ_REQUEST, MARK_AS_READ_SUCCESS, MARK_AS_READ_FAIL 
    } from '../constants/userConstant';

    
// user sign in action
export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/auth`, user,{withCredentials:true});
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
        const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/`, user,{withCredentials:true});
        
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



//log out action
export const userLogoutAction = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT_REQUEST });
    try {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('userInfoExtra');
        const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/logout`,{},{withCredentials:true});
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

//user profile action
export const userProfileAction = () => async (dispatch) => {
    dispatch({ type: USER_PROFILE_REQUEST });
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/profile`,{withCredentials:true});
        localStorage.setItem('userInfoExtra', JSON.stringify(data));
        // console.log(data);
        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload: error.response.data.error
        });
    }
}

//giver profile action(approve status)
export const giverProfileAction = () => async (dispatch) => {
    dispatch({ type: Giver_PROFILE_REQUEST });
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/getJobRecruit`,{withCredentials:true});
        dispatch({
            type: Giver_PROFILE_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: Giver_PROFILE_FAIL,
            payload: error.response.data.error
        });
    }
}

// jobGiverSignUpAction action
export const jobGiverSignUpAction = (user,image) => async (dispatch) => {
    dispatch({ type: jobGiverAction_REQUEST });
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/jobRecruit`,user,{withCredentials:true});
        localStorage.removeItem('userInfoExtra');
        dispatch({
            type: jobGiverAction_SUCCESS,
            payload: data
        });
        
        toast.success("Register Successfully!");
        setTimeout(window.location.reload(true), 3000)
    } catch (error) {
        console.log(error);
        dispatch({
            type: jobGiverAction_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.message);
    }
}

// jobSeekerSignUpAction action
export const jobSeekerSignUpAction = (user) => async (dispatch) => {
    dispatch({ type: jobSeekerAction_REQUEST });
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/jobSeeker`,user,{withCredentials:true});
        localStorage.removeItem('userInfoExtra');
        
        dispatch({
            type: jobSeekerAction_SUCCESS,
            payload: data
        });
        toast.success("Register Successfully!");
        setTimeout(window.location.reload(true), 3000)
    } catch (error) {
        console.log(error);
        dispatch({
            type: jobSeekerAction_FAIL,
            payload: error.response.data.message
        });
        toast.error(error.response.data.message);
    }
}

//all user action
export const allUserAction = () => async (dispatch) => {
    dispatch({ type: ALL_USER_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/allusers`,{withCredentials:true});
        dispatch({
            type: ALL_USER_LOAD_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ALL_USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}


//notifications
export const notificationsAction = () => async (dispatch) => {
    dispatch({ type: NOTIFICATIONS_REQUEST });
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/notifications`,{withCredentials:true});
        dispatch({
            type: NOTIFICATIONS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: NOTIFICATIONS_FAIL,
            payload: error.response.data.error
        });
    }
}




//mark as read
export const markAsReadAction = () => async (dispatch) => {
    dispatch({ type: MARK_AS_READ_REQUEST });
    try {
        const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/users/markasread`,{},{withCredentials:true});
        dispatch({
            type: MARK_AS_READ_SUCCESS,
            payload: data
        });
        window.location.reload(true);
        

    } catch (error) {
        dispatch({
            type: MARK_AS_READ_FAIL,
            payload: error.response.data.error
        });
    }
}

//not approved action
export const NotApprovedAction = () => async (dispatch) => {
    dispatch({ type: NOT_APPROVED_REQUEST });
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/admin/jobgiverapproval`,{withCredentials:true});
        
        dispatch({
            type: NOT_APPROVED_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: NOT_APPROVED_FAIL,
            payload: error.response.data.error
        });
    }
}





// approval action
export const ApprovalAction = (id) => async (dispatch) => {
    dispatch({ type: APPROVED_BY_Id_REQUEST });
    try {
        const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/users/admin/jobgiverapproval/${id}`,{},{withCredentials:true});
        
        dispatch({
            type: APPROVED_BY_Id_SUCCESS,
            payload: data
        });
        
        toast.success(`${data.jobgiver.nameOfOrganization} got Approved Successfully!`);
        setTimeout(()=>{ window.location.reload(true)}, 1000)
    } catch (error) {
        dispatch({
            type: APPROVED_BY_Id_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.message);
    }
}



//applied jobs for job seeker
export const appliedJobsAction = (job) => async(dispatch) =>{
    dispatch({type:APPLIED_JOBS_REQUEST});
    try {
        const {data}=await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/jobapply`,job,{withCredentials:true})
        dispatch({
            type:APPLIED_JOBS_SUCCESS,
            payload: data
        });
        toast.success("Applied Successfully!");
    } catch (error) {
        dispatch({
            type: APPLIED_JOBS_FAIL,
            payload: error.response.data.error
        });
       
        toast.error(error.response.statusText);
    }
}


//for jobseeker's job history
export const jobsHistoryAction = () => async(dispatch) =>{
    dispatch({type:jobHistory_Action_REQUEST
    });
    try {
        const {data}=await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/jobhistory`,{withCredentials:true});
        dispatch({
            type:jobHistory_Action_SUCCESS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: jobHistory_Action_FAIL,
            payload: error.response.data.error
        });
       
    }
}




//for jobgiver's payment history
export const paymentHistoryAction = () => async(dispatch) =>{
    dispatch({type:Payment_History_Action_REQUEST
    });
    try {
        const {data}=await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/jobgiver/paymentHistory`,{withCredentials:true});
        dispatch({
            type:Payment_History_Action_SUCCESS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: Payment_History_Action_FAIL,
            payload: error.response.data.error
        });
       
    }
}

