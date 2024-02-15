import { USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_RESET, USER_LOGOUT_SUCCESS, 
    USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_RESET, USER_PROFILE_SUCCESS,
     USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_RESET, USER_SIGNIN_SUCCESS, 
     USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_RESET, USER_SIGNUP_SUCCESS, 
     jobGiverAction_FAIL, jobGiverAction_REQUEST, jobGiverAction_RESET, jobGiverAction_SUCCESS,
      jobSeekerAction_FAIL, jobSeekerAction_REQUEST, jobSeekerAction_RESET, jobSeekerAction_SUCCESS ,
      ALL_USER_LOAD_REQUEST,ALL_USER_LOAD_SUCCESS,ALL_USER_LOAD_FAIL,ALL_USER_LOAD_RESET, APPLIED_JOBS_REQUEST, APPLIED_JOBS_SUCCESS, APPLIED_JOBS_FAIL, APPLIED_JOBS_RESET, jobHistory_Action_REQUEST, jobHistory_Action_SUCCESS, jobHistory_Action_FAIL, jobHistory_Action_RESET
    } from "../constants/userConstant"




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
            return { loading: true }
        case USER_SIGNUP_SUCCESS:
            return {
                loading: false,
                userSignUp: action.payload,
            }
        case USER_SIGNUP_FAIL:
            return { loading: false, error: action.payload }
        case USER_SIGNUP_RESET:
            return {}
        default:
            return state;
    }
}





//log out reducer
export const userReducerLogout = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGOUT_REQUEST:
            return { loading: true }
        case USER_LOGOUT_SUCCESS:
            return {
                loading: false,
                user: action.payload,
            }
        case USER_LOGOUT_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT_RESET:
            return {}
        default:
            return state;
    }

}

//user profile
export const userReducerProfile = (state = {}, action) => {
    // console.log(action);
    switch (action.type) {
        case USER_PROFILE_REQUEST:
            return { loading: true, userInfoExtra: null }
        case USER_PROFILE_SUCCESS:
            // console.log( action.payload.user);
            return {
                loading: false,
                userInfoExtra: action.payload
                
            }
        case USER_PROFILE_FAIL:
            return { loading: false, userInfoExtra: null, error: action.payload }
        case USER_PROFILE_RESET:
            return {}
        default:
            return state;
    }

}

// jobGiverReducerSignUp
export const jobGiverReducerSignUp = (state = {}, action) => {
    switch (action.type) {
        case jobGiverAction_REQUEST:
            return { loading: true }
        case jobGiverAction_SUCCESS:
            return {
                loading: false,
                jobGiverSignUp: action.payload
                
            }
        case jobGiverAction_FAIL:
            return { loading: false, isAuthenticated: false, error: action.payload }
        case jobGiverAction_RESET:
            return {}
        default:
            return state;
    }
}


// jobSeekerReducerSignUp
export const jobSeekerReducerSignUp = (state = {}, action) => {
    switch (action.type) {
        case jobSeekerAction_REQUEST:
            return { loading: true }
        case jobSeekerAction_SUCCESS:
            return {
                loading: false,
                jobSeekerSignUp: action.payload
                
            }
        case jobSeekerAction_FAIL:
            return { loading: false,  isAuthenticated: false, error: action.payload }
        case jobSeekerAction_RESET:
            return {}
        default:
            return state;
    }
}

//all users reducer
export const allUserReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ALL_USER_LOAD_REQUEST:
            return { loading: true, users: [] }
        case ALL_USER_LOAD_SUCCESS:
            return {
                loading: false,
                users: action.payload.users,
            }
        case ALL_USER_LOAD_FAIL:
            return { loading: false, users: [], error: action.payload }
        case ALL_USER_LOAD_RESET:
            return {}
        default:
            return state;
    }

}


//applied jobs for job seeker
export const appliedJobsReducer = (state = {}, action) => {
    switch (action.type) {
        case APPLIED_JOBS_REQUEST:
            return { loading: true, users: [] }
        case APPLIED_JOBS_SUCCESS:
            return {
                loading: false,
                job: action.payload,
            }
        case APPLIED_JOBS_FAIL:
            return { loading: false, users: [], error: action.payload }
        case APPLIED_JOBS_RESET:
            return {}
        default:
            return state;
    }

}




//for jobseeker's job history
export const jobsHistoryReducer = (state = {}, action) => {
    switch (action.type) {
        case jobHistory_Action_REQUEST:
            return { loading: true, users: [] }
        case jobHistory_Action_SUCCESS:
            return {
                loading: false,
                history: action.payload.jobHistory
            }
        case jobHistory_Action_FAIL:
            return { loading: false, users: [], error: action.payload }
        case jobHistory_Action_RESET:
            return {}
        default:
            return state;
    }

}