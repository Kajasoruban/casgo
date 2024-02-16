import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { jobDetailsAction } from '../../redux/actions/jobAction';

function Applicants() {


    const dispatch =useDispatch();
    const {jobDetail,loading}=useSelector(state =>state.jobDetails)

    let applicants=[];
    if(jobDetail){
        
        applicants=(jobDetail.applicants !== undefined && jobDetail.applicants.length > 0) ? jobDetail.applicants : []
        // console.log(applicants);
      }
   
   
    
    const {id}=useParams()
    useEffect(()=>{
        dispatch(jobDetailsAction(id));
    },[id])
  return (
    <>
    <div>Applicants</div>

    {loading ? (
            <div>
              <div className="spinner-border text-warning " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : applicants && applicants.length === 0 ? (
            <p className="lead m-5 p-5 text-center">No applicants applied right now</p>
          ) : (
            <>
              <div className="row container mx-auto my-5">
                {applicants &&
                  applicants.map((applicant, i) => (
                     
                    <div className="card" key={i} style={{width: "18rem",}}>
                        <img src={applicant.image.url}style={{width: "100%",height:"15rem"}} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-center display-6">{applicant.userId.name}</h5>
                            <p className="card-text">
                                Email: {applicant.userId.email}<br/>
                                Age: {applicant.age}<br/>
                                Gender: {applicant.gender}<br/>
                                Address: {applicant.address}<br/>
                                ContactNo: {applicant.contactNo}<br/>
                                
                            </p>
                            <button className="btn btn-warning ">Hire</button>
                        </div>
                        </div>
                    
                  ))}
              </div>
            </>
          )}



    </>
  )
}

export default Applicants