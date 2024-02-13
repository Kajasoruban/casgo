import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { jobDetailsAction } from '../redux/actions/jobAction';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../Assets/css/JobGiverRegister.css';
import LoadingBox from '../components/LoadingBox';



function JobsById() {

    const dispatch =useDispatch();
    const {jobDetail,loading}=useSelector(state =>state.jobDetails)
   
    
    const {id}=useParams()
    useEffect(()=>{
        dispatch(jobDetailsAction(id));
    },[id])
    
  return (
    <>
    <Navbar/>

    <div className='display-2 text-center my-5'>Jobs Details</div>
    


    { loading ?<LoadingBox /> :
      
     <>
    <div className="job-post-company pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-between">
                    
                    <div className="col-xl-7 col-lg-8">
                        
                        <div className="single-job-items mb-50">
                            <div className="job-items">
                                <div className="company-img company-img-details">
                                    <a href="#"><img src={jobDetail&&jobDetail.jobGiverId.image.url} width="300px" height="200px"alt=""/></a>
                                </div>
                                <div className="job-tittle">
                                    <a href="#">
                                        <h4>{jobDetail&&jobDetail.title}</h4>
                                    </a>
                                    <ul>
                                        <li>Creative Agency</li>
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
                              <li>Posted date : <span>12 Aug 2019</span></li>
                              <li>Location : <span> {jobDetail&&jobDetail.address}</span></li>
                              <li>Vacancy : <span> {jobDetail&&jobDetail.noOfWorkers}</span></li>
                              <li>Salary :  <span> {jobDetail&&jobDetail.salary}</span></li>
                              <li>Application date : <span> {jobDetail&&jobDetail.closingTime}</span></li>
                          </ul>
                         <div className="apply-btn2">
                            <a href="#" className="btn">Apply Now</a>
                         </div>
                       </div>
                        <div className="post-details4  mb-50">
                           
                           <div className="small-section-tittle">
                               <h4>Company Information</h4>
                           </div>
                              {/* <span>casgo</span> */}
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
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