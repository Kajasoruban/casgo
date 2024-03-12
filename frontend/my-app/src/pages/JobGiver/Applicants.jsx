import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { hireAction, jobDetailsAction } from '../../redux/actions/jobAction';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonOffIcon from '@mui/icons-material/PersonOff';
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

      let approved=0;
      let rejected=0;
      applicants!==0&&applicants.map((applicant)=>{
        if(applicant.applicationStatus=="accepted"){
          approved=approved+1
        }else if(applicant.applicationStatus=="rejected"){
          rejected=rejected+1
        }
      })

      const handleHire=(email,status)=>{
        dispatch(hireAction(id,email,status))
      }
   
   
    
    
  return (
    <>
     <h4>All Applicants!</h4>
    <div className='container applicationscon border rounded'>
     

    {loading ? (
            <div>
              <div className="spinner-border text-warning " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : applicants && applicants.length === 0 ? (
            <p className="lead m-5 p-5 text-center">No applicants applied yet</p>
          ) : (
            <>
              <div className='border bg-body-tertiary rounded row m-2'>
                <div className='col-6 border fs-5'>Applicants for <span className='text-success fw-bolder'>{jobDetail.title}</span></div>
                <div className='col-2 border fw-bold'>Total : {applicants.length}</div>
                <div className='col-2 border fw-bold'>Hired : {approved}</div>
                <div className='col-2 border fw-bold'>Rejected : {rejected}</div>
              </div>
              <div className="row  container applicationsscroll  mx-auto">
                {applicants &&
                  applicants.map((applicant, i) => (
                     
                    <div className="col-8 col-md-8 col-xl-6 border bg-body-tertiary" key={i} >
                      <div className="d-flex  flex-md-col flex-xl-row bg-body border mt-4">
                        <div className='mx-2 my-auto'>
                        <img src={applicant.jobSeekerId.image.url}style={{width: "6rem",height:"6rem"}} className="rounded-circle border " alt="..."/>
                        <h5 className="text-center">{applicant.userId.name}</h5>
                         </div>
                         <div className='my-auto'>
                            
                           
                            <p className="text-truncate"> <EmailIcon/> {applicant.userId.email}</p>
                            <p>Age: {applicant.jobSeekerId.age}</p>
                            <p>Gender: {applicant.jobSeekerId.gender}</p>
                            </div>
                            <div  className='my-auto'>
                            <p> <PlaceIcon/> {applicant.jobSeekerId.address}</p>
                            <p> <LocalPhoneIcon/> {applicant.jobSeekerId.contactNo}</p>
                            {applicant.applicationStatus=="accepted"?<button className="btn btn-success"><HowToRegIcon/>Hired</button>:applicant.applicationStatus=="rejected"?<button className="btn btn-danger"><PersonOffIcon/>Rejected</button>:<div className=''><button className="btn btn-success mx-1" onClick={()=>handleHire(applicant.userId.email,"accepted")}>Hire</button><button className="btn btn-danger mx-1" onClick={()=> handleHire(applicant.userId.email,"rejected")}>Reject</button></div>}
                           
                             </div>
                        </div>
                        </div>
                    
                  ))}
              </div>
            </>
          )}


   </div>
    </>
  )
}

export default Applicants