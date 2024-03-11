import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { jobDetailsAction } from '../redux/actions/jobAction';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../Assets/css/JobGiverRegister.css';
import LoadingBox from '../components/LoadingBox';
import moment from 'moment';
import { appliedJobsAction } from '../redux/actions/userAction';



function JobsById() {
    const navigate=useNavigate();
    const { userInfo } = useSelector(state => state.signIn);
    let {userInfoExtra} =useSelector(state => state.userProfile);
    let role= userInfoExtra?userInfoExtra.role:"" ;
    const [applyDisable,setApplyDisable]=useState(false);
    const [applied,setApplied]=useState(false);
    
    useEffect(()=>{

        if(role==="jobRecruit"){
            setApplyDisable(true)     
        }

    },[role])
    

    const dispatch =useDispatch();
    const {jobDetail,loading}=useSelector(state =>state.jobDetails)

    useEffect(()=>{
    if(jobDetail){
        if(role==="jobSeeker"){
            
            jobDetail.applicants==0&&setApplied(false);
        
            jobDetail.applicants!==0 &&jobDetail.applicants.map((job)=>{
            if(job.jobSeekerId.userId==userInfo._id){
                setApplied(true);
               console.log(true);    
            }else{
                setApplied(false);
               console.log(false);
            }
         })
        }
       
    }},[jobDetail])

    const applyJob =()=>{
        if(userInfo==null){
            navigate("/login");
        }else if(role!=="jobSeeker"){
            navigate("/jobseeker");
        }
        else{
            jobDetail&& dispatch(appliedJobsAction(jobDetail));
            setApplied(true);
        }
         
    }
   
    
    const {id}=useParams()
    useEffect(()=>{
        dispatch(jobDetailsAction(id));
    },[id])
    
  return (
    <>
    <Navbar/>

    <div className='display-2 text-center mt-5'>Jobs Details</div>
    


    { loading ?<LoadingBox /> :
      
     <>
    <div className="job-post-company pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-between">
                    
                    <div className="col-xl-7 col-lg-8">
                        
                        <div className="">
                            <div className="row">
                                <div className="col-6">
                                    <a href="#"><img src={jobDetail&&jobDetail.jobGiverId.image.url} width="300px" height="200px"alt=""/></a>
                                </div>
                                <div className="col-6">
                                    <span className='lead'>
                                        <h4>{jobDetail&&jobDetail.title}</h4>
                                    </span>
                                    <ul>
                                       
                                        <li><i className="fas fa-map-marker-alt"></i>{jobDetail&&jobDetail.address}</li>
                                        <li>Rs.{jobDetail&&jobDetail.salary}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                         
                       
                        <div className="job-post-details">
                            <div className="post-details1 mb-50">
                               
                                <div className="small-section-tittle">
                                    <h4>Job Description</h4>
                                </div>
                                <p>{jobDetail&&jobDetail.jobDescription}</p>
                            </div>
                            <div className="post-details2  mb-50">
                                
                                <div className="small-section-tittle">
                                    <h4>Required Knowledge, Skills, and Abilities</h4>
                                </div>
                                {jobDetail&&jobDetail.requirements}
                            </div>
                            
                        </div>

                    </div>
                 
                    <div className="col-xl-4 col-lg-4">
                        <div className="post-details3  mb-50">
                           
                           <div className="small-section-tittle">
                               <h4>Job Overview</h4>
                           </div>
                          <ul> 
                              <li>Posted date : <span>{jobDetail&&moment(jobDetail.createdAt).format('YYYY-MM-DD')}</span></li>
                              <li>Location : <span> {jobDetail&&jobDetail.address}</span></li>
                              <li>Vacancy : <span> {jobDetail&&jobDetail.noOfWorkers}</span></li>
                              <li>Salary :  <span> Rs.{jobDetail&&jobDetail.salary}</span></li>
                              <li>Closing date : <span> {jobDetail&&jobDetail.closingTime}</span></li>
                          </ul>
                         <div className="apply-btn2">
                            {applied?<button className="btn btn-success" >Applied</button>:<button onClick={applyJob} className="btn btn-warning" disabled={applyDisable}>Apply Now</button>}
                            
                         </div>
                         <br/>
                       </div>
                        <div className="post-details4  mb-50">
                           
                           <div className="small-section-tittle">
                               <h4>Company Information</h4>
                           </div>
                              {/* <span>casgo</span> */}
                              {/* <p></p> */}
                            <ul>
                                <li>Name: <span> {jobDetail&&jobDetail.nameOfOrganization} </span></li>
                                {/* <li>Web : <span> colorlib.com</span></li>
                                <li>Email: <span>carrier.colorlib@gmail.com</span></li> */}
                            </ul>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    }
    
    <Footer/>
    </>
  )
}

export default JobsById