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

import PlaceIcon from '@mui/icons-material/Place';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaymentsIcon from '@mui/icons-material/Payments';
import DateRangeIcon from '@mui/icons-material/DateRange';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
import PersonIcon from '@mui/icons-material/Person';

function JobsById() {
    const navigate=useNavigate();
    const { userInfo } = useSelector(state => state.signIn);
    let {userInfoExtra} =useSelector(state => state.userProfile);
    let role= userInfoExtra?userInfoExtra.role:"" ;
    const [applyDisable,setApplyDisable]=useState(false);
    const [applied,setApplied]=useState(false);

    const createdtime=(date)=>{
        let creatDate=new Date(date)
        let currentDate=new Date();
        let dif=currentDate.getTime()-creatDate.getTime()
        // let dif=24*60*60*1000
        if(dif<=59*1000){
            return Math.floor(dif/(1000))+'seconds ago'
        }else if(dif<=59*60*1000){
            return Math.floor(dif/(60*1000))+'minutes ago'
        }else if(dif<=24*60*60*1000){
            return Math.floor(dif/(60*60*1000))+'hours ago'
        }else if(dif<=29*24*60*60*1000){
            return Math.floor(dif/(24*60*60*1000))+'day ago'
        }else{
            return dif;
        }
        
     }
    
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
            
            jobDetail.applicants==0?setApplied(false):setApplied(false);
            // console.log(jobDetail.applicants);
            jobDetail.applicants!==0 &&jobDetail.applicants.map((job)=>{
            if(job.jobSeekerId.userId==userInfo._id){
                setApplied(true);
               console.log(true);    
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


    { loading ?<LoadingBox /> :
      
     <>
     
     <div className='container-fluid border rounded bg-body-tertiary row'>
  
     <section className="col-10 g-5  mx-auto my-5">
              <div className="d-flex justify-content-between align-items-center  ">
                  <img className=" mx-3 rounded border" style={{ width: "10rem", height: "10rem" }} src={jobDetail&&jobDetail.jobGiverId.image.url} />


                  
                      <div className="  flex-fill text-start d-flex flex-column">
                          <h4 className="mb-3"><WorkOutlineIcon /> {jobDetail&&jobDetail.title}</h4>
                          <div>
                          <span className=" text-muted"><PlaceIcon /> {jobDetail&&jobDetail.address}</span>
                          <span className="ms-2 text-muted"><AccessTimeIcon/>{createdtime(jobDetail&&jobDetail.createdAt)}</span>
                          <span className="ms-2 text-muted">Rs.{jobDetail&&jobDetail.salary} per {jobDetail&&jobDetail.salaryPeriod}</span>
                          </div>
                      </div>

                      <div className="me-3  ">

                      <div className="apply-btn2">
                            {applied?<button className="btn btn-success" >Applied</button>:<button onClick={applyJob} className="btn btn-warning" disabled={applyDisable}>Apply Now</button>}
                            
                         </div>

                      </div>
                
              </div>
          </section>

     </div>





                  <div className=" container  my-5">
                      
                          <div className="row justify-content-between">

                              <div className="col-xl-7 col-lg-8">




                                  <div className="job-post-details ">
                                      <div className="post-details1 mb-5">

                                          <div className="small-section-tittle mb-3">
                                              <h4>Job Description</h4>
                                          </div>
                                          <p>{jobDetail && jobDetail.jobDescription}</p>
                                      </div>
                                      <div className="post-details2  mb-5">

                                          <div className="small-section-tittle">
                                              <h4>Required Knowledge, Skills, and Abilities</h4>
                                          </div>
                                          {jobDetail && jobDetail.requirements}
                                      </div>

                                  </div>

                              </div>

                          <div className="col-xl-4 col-lg-4 border rounded bg-body-tertiary">
                              <div className="post-details4  mb-5">

                                  <div className="small-section-tittle">
                                      <h4 className=''>Company Information</h4>
                                  </div>
                               
                                  <ul className='ms-3'>
                                      <li>Name: <span> {jobDetail && jobDetail.nameOfOrganization} </span></li>
                                      {/* <li>Web : <span> colorlib.com</span></li>
                                <li>Email: <span>carrier.colorlib@gmail.com</span></li> */}
                                  </ul>
                              </div>
                              <div className="post-details3  mb-5">

                                  <div className="small-section-tittle">
                                      <h4>Job Overview*</h4>
                                  </div>
                                  <ul>

                                      <li className='my-3 ms-3'><DateRangeIcon /> Posted date : <span>{jobDetail && moment(jobDetail.createdAt).format('YYYY-MM-DD')}</span></li>
                                      <li className='my-3 ms-3'><PlaceIcon /> Location : <span> {jobDetail && jobDetail.address}</span></li>
                                      <li className='my-3 ms-3'><PersonIcon /> Vacancy : <span> {jobDetail && jobDetail.noOfWorkers}</span></li>
                                      <li className='my-3 ms-3'><PaymentsIcon /> Salary :  <span> Rs.{jobDetail && jobDetail.salary}</span></li>
                                      <li className='my-3 ms-3'><HourglassDisabledIcon /> Closing date : <span> {jobDetail && jobDetail.closingTime}</span></li>
                                  </ul>

                                  <br />
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