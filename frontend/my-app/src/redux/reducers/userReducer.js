import { USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_RESET, USER_LOGOUT_SUCCESS, 
    USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_RESET, USER_PROFILE_SUCCESS,
     USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_RESET, USER_SIGNIN_SUCCESS, 
     USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_RESET, USER_SIGNUP_SUCCESS, 
     jobGiverAction_FAIL, jobGiverAction_REQUEST, jobGiverAction_RESET, jobGiverAction_SUCCESS,
      jobSeekerAction_FAIL, jobSeekerAction_REQUEST, jobSeekerAction_RESET, jobSeekerAction_SUCCESS ,
      ALL_USER_LOAD_REQUEST,ALL_USER_LOAD_SUCCESS,ALL_USER_LOAD_FAIL,ALL_USER_LOAD_RESET, APPLIED_JOBS_REQUEST, APPLIED_JOBS_SUCCESS, APPLIED_JOBS_FAIL, APPLIED_JOBS_RESET, jobHistory_Action_REQUEST, jobHistory_Action_SUCCESS, jobHistory_Action_FAIL, jobHistory_Action_RESET, Giver_PROFILE_REQUEST, Giver_PROFILE_SUCCESS, Giver_PROFILE_FAIL, Giver_PROFILE_RESET, NOT_APPROVED_REQUEST, NOT_APPROVED_SUCCESS, NOT_APPROVED_FAIL, NOT_APPROVED_RESET, APPROVED_BY_Id_REQUEST, APPROVED_BY_Id_SUCCESS, APPROVED_BY_Id_FAIL, APPROVED_BY_Id_RESET
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
export const userReducerSignUp = (state = {isAuthenticated: false}, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading: true ,isAuthenticated: false }
        case USER_SIGNUP_SUCCESS:
            return {
                loading: false,
                userSignUp: action.payload,
                isAuthenticated: true
            }
        case USER_SIGNUP_FAIL:
            return { loading: false,isAuthenticated: false, error: action.payload }
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


//giver profile action(approve status)
export const giverProfileReducer = (state = {}, action) => {
    // console.log(action);
    switch (action.type) {
        case Giver_PROFILE_REQUEST:
            return { loading: true, giver: null }
        case Giver_PROFILE_SUCCESS:
            // console.log( action.payload.jobgiver);
            return {
                loading: false,
                giver: action.payload.jobgiver
                
            }
        case Giver_PROFILE_FAIL:
            return { loading: false, giver: null, error: action.payload }
        case Giver_PROFILE_RESET:
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
            return { loading: false, error: action.payload }
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
            return { loading: false,  error: action.payload }
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

//not approved reducer
export const NotApprovedReducer = (state = {}, action) => {
    switch (action.type) {
        case NOT_APPROVED_REQUEST:
            return { loading: true, jobgivers: [] }
        case NOT_APPROVED_SUCCESS:
            return {
                loading: false,
                jobgivers: action.payload.jobgivers,
            }
        case NOT_APPROVED_FAIL:
            return { loading: false, jobgivers: [], error: action.payload }
        case NOT_APPROVED_RESET:
            return {}
        default:
            return state;
    }

}





//approval reducer
export const ApprovalReducer = (state = {}, action) => {
    switch (action.type) {
        case APPROVED_BY_Id_REQUEST:
            return { loading: true, jobgivers: [] }
        case APPROVED_BY_Id_SUCCESS:
            return {
                loading: false,
                jobgivers: action.payload.jobgiver,
            }
        case APPROVED_BY_Id_FAIL:
            return { loading: false, jobgivers: [], error: action.payload }
        case APPROVED_BY_Id_RESET:
            return {}
        default:
            return state;
    }

}

//applied jobs for job seeker
export const appliedJobsReducer = (state = {}, action) => {
    switch (action.type) {
        case APPLIED_JOBS_REQUEST:
            return { loading: true, job: [] }
        case APPLIED_JOBS_SUCCESS:
            return {
                loading: false,
                job: action.payload,
            }
        case APPLIED_JOBS_FAIL:
            return { loading: false, job: [], error: action.payload }
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
            return { loading: true, history: [] }
        case jobHistory_Action_SUCCESS:
            return {
                loading: false,
                history: action.payload.jobHistory
            }
        case jobHistory_Action_FAIL:
            return { loading: false, history: [], error: action.payload }
        case jobHistory_Action_RESET:
            return {}
        default:
            return state;
    }

}