import { EXPIRE_FAIL, EXPIRE_REQUEST, EXPIRE_RESET, EXPIRE_SUCCESS, HIRE_FAIL, HIRE_REQUEST, HIRE_RESET, HIRE_SUCCESS, JOB_DETAILS_FAIL, JOB_DETAILS_REQUEST, JOB_DETAILS_RESET, JOB_DETAILS_SUCCESS, JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_RESET, JOB_LOAD_SUCCESS, JOB_POSTED_FAIL, JOB_POSTED_REQUEST, JOB_POSTED_RESET, JOB_POSTED_SUCCESS, JOB_REGISTER_FAIL, JOB_REGISTER_REQUEST, JOB_REGISTER_RESET, JOB_REGISTER_SUCCESS, JOB_STATUS_FAIL, JOB_STATUS_REQUEST, JOB_STATUS_RESET, JOB_STATUS_SUCCESS } from "../constants/jobConstant"



export const loadJobReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
        case JOB_LOAD_REQUEST:
            return { loading: true }
        case JOB_LOAD_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocation: action.payload.setUniqueLocation,
                jobs: action.payload.jobs
            }
        case JOB_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case JOB_LOAD_RESET:
            return {}
        default:
            return state;
    }
}

export const jobPostReducer = (state = {}, action) => {
    
    switch (action.type) {
        case JOB_REGISTER_REQUEST:
            return {
              loading: true
            }

        case JOB_REGISTER_SUCCESS:
            return {
                loading: false,
                job: action.payload,
            }

        case JOB_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload  
            }

        case JOB_REGISTER_RESET:
            return {}
        default:
            return state;
    }

}


export const jobDetailsReducer =(state={job:{}},action) => {
    switch (action.type) {
        case JOB_DETAILS_REQUEST:
            return {
                loading:true
            }
        case JOB_DETAILS_SUCCESS:
           
            return{
                loading:false,
                jobDetail:action.payload.job
            }

        case JOB_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload  
            }

        case JOB_DETAILS_RESET:
            return {}
    
        default:
            return state;
    }
}


export const jobPostedReducer =(state={jobs:{}},action) => {
    switch (action.type) {
        case JOB_POSTED_REQUEST:
            return {
                loading:true
            }
        case JOB_POSTED_SUCCESS:
           
            return{
                loading:false,
                jobs:action.payload.jobs
            }

        case JOB_POSTED_FAIL:
            return {
                loading: false,
                error: action.payload  
            }

        case JOB_POSTED_RESET:
            return {}
    
        default:
            return state;
    }
}






//job status handle
export const jobStatusReducer =(state={},action) => {
    switch (action.type) {
        case JOB_STATUS_REQUEST:
            return {
                loading:true
            }
        case JOB_STATUS_SUCCESS:
           
            return{
                loading:false,
                jobs:action.payload
            }

        case JOB_STATUS_FAIL:
            return {
                loading: false,
                error: action.payload  
            }

        case JOB_STATUS_RESET:
            return {}
    
        default:
            return state;
    }
}


//expiration handle
export const expireReducer =(state={},action) => {
    switch (action.type) {
        case EXPIRE_REQUEST:
            return {
                loading:true
            }
        case EXPIRE_SUCCESS: 
            return{
                loading:false,
                jobs:action.payload
            }
        case EXPIRE_FAIL:
            return {
                loading: false,
                error: action.payload  
            }
        case EXPIRE_RESET:
            return {}
        default:
            return state;
    }
}


//hire by email
export const hireReducer =(state={},action) => {
    switch (action.type) {
        case HIRE_REQUEST:
            return {
                loading:true
            }
        case HIRE_SUCCESS: 
            return{
                loading:false,
                updated:action.payload
            }
        case HIRE_FAIL:
            return {
                loading: false,
                error: action.payload  
            }
        case HIRE_RESET:
            return {}
        default:
            return state;
    }
}