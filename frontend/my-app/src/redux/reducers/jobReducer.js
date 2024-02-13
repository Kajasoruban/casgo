import { JOB_DETAILS_FAIL, JOB_DETAILS_REQUEST, JOB_DETAILS_RESET, JOB_DETAILS_SUCCESS, JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_RESET, JOB_LOAD_SUCCESS, JOB_REGISTER_FAIL, JOB_REGISTER_REQUEST, JOB_REGISTER_RESET, JOB_REGISTER_SUCCESS } from "../constants/jobConstant"



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

        case JOB_DETAILS_RESET:
            
    
        default:
            return state;
    }
}