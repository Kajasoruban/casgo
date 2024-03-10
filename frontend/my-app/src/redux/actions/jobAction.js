import axios from "axios";
import { EXPIRE_FAIL, EXPIRE_REQUEST, EXPIRE_SUCCESS, HIRE_FAIL, HIRE_REQUEST, HIRE_SUCCESS, JOB_DETAILS_FAIL, JOB_DETAILS_REQUEST, JOB_DETAILS_SUCCESS, JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_SUCCESS, JOB_POSTED_FAIL, JOB_POSTED_REQUEST, JOB_POSTED_SUCCESS, JOB_REGISTER_FAIL, JOB_REGISTER_REQUEST, JOB_REGISTER_SUCCESS, JOB_STATUS_FAIL, JOB_STATUS_REQUEST, JOB_STATUS_SUCCESS } from "../constants/jobConstant";
import { toast } from "react-toastify";




export const jobLoadAction = (pageNumber, keyword = '',address = '', cat = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/users/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&address=${address}`)
        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

export const jobPostAction =(job) => async (dispatch) => {
    
    dispatch({type:JOB_REGISTER_REQUEST});
    try {
        const {data}= await axios.post("/api/users/jobPost",job)
        
        dispatch({
            type:JOB_REGISTER_SUCCESS,
            payload:data
        })
        toast.success("Job Posted Successfully")
        
        
    } catch (error) {
        dispatch({
            type:JOB_REGISTER_FAIL,
            payload:error.response.data.message
        })
        toast.error(error.response.data.message)
    }
}


export const jobDetailsAction =(id) => async (dispatch)=>{
    dispatch({type:JOB_DETAILS_REQUEST});

    try {
        const {data}=await axios.get(`/api/users/getJob/${id}`);
        
        dispatch({
            type:JOB_DETAILS_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:JOB_DETAILS_FAIL,
            payload:error.response.data.message
        })
        
    }

}

//jobposted with applicants
export const jobPostedAction =() => async (dispatch)=>{
    dispatch({type:JOB_POSTED_REQUEST});

    try {
        const {data}=await axios.get(`/api/users/jobs/jobposted`);
        
        dispatch({
            type:JOB_POSTED_SUCCESS,
            payload:data
        })
       
        
    } catch (error) {
        dispatch({
            type:JOB_POSTED_FAIL,
            payload:error.response.data.message
        })
       
    }

}




//job status handle
export const jobStatusAction =(id,active) => async (dispatch)=>{
    dispatch({type:JOB_STATUS_REQUEST});

    try {
        const {data}=await axios.put(`/api/users/jobs/jobstatus`,{id,active});
        
        dispatch({
            type:JOB_STATUS_SUCCESS,
            payload:data
        })
        
        
        setTimeout(()=>{ window.location.reload(true)}, 500)
        toast.success(data.message)
        
        
    } catch (error) {
        dispatch({
            type:JOB_STATUS_FAIL,
            payload:error.response.data.message
        })
        toast.error(error.response.data.message)
        
    }

}

//expiration handle
export const expireAction =(id) => async (dispatch)=>{
    dispatch({type:EXPIRE_REQUEST});
    try {
        const {data}=await axios.put(`/api/stripe/expired/${id}`);
        dispatch({
            type:EXPIRE_SUCCESS,
            payload:data
        })
        // setTimeout(()=>{ window.location.reload(true)}, 500)
        toast.warning("You package is expired") 
    } catch (error) {
        dispatch({
            type:EXPIRE_FAIL,
            payload:error.response.data.message
        })
        // toast.error(error.response.data.message)  
    }

}



//hire by email
export const hireAction =(jobId,email,status) => async (dispatch)=>{
    dispatch({type:HIRE_REQUEST});
    try {
        const {data}=await axios.put(`/api/users/jobs/hire/${jobId}/${email}/${status}`);
        dispatch({
            type:HIRE_SUCCESS,
            payload:data
        })
        // setTimeout(()=>{ window.location.reload(true)}, 500)
        toast.warning("You package is expired") 
    } catch (error) {
        dispatch({
            type:HIRE_FAIL,
            payload:error.response.data.message
        })
        // toast.error(error.response.data.message)  
    }

}