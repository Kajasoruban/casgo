import axios from "axios";
import { JOB_DETAILS_FAIL, JOB_DETAILS_REQUEST, JOB_DETAILS_SUCCESS, JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_SUCCESS, JOB_REGISTER_FAIL, JOB_REGISTER_REQUEST, JOB_REGISTER_SUCCESS } from "../constants/jobConstant";
import { toast } from "react-toastify";




export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/users/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
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