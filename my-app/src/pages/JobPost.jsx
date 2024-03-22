import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import '../Assets/css/JobGiverRegister.css';
import moment from 'moment';

import { Link, useNavigate } from 'react-router-dom';
import { jobPostAction } from '../redux/actions/jobAction';
import { Box, CircularProgress } from '@mui/material';

const validationSchema = yup.object({
      title: yup
      .string('Enter your nameOfOrganization')
      .required('NameOfOrganization is required'),
  
      jobDescription: yup
      .string('Enter your address')
      .required('jobDescription is required'), 
      
      salary: yup
      .string('Enter your salary')
      .required('salary is required'),

      noOfWorkers: yup
      .string('Enter your noOfWorkers')
      .required('noOfWorkers is required'),

      ageLimit: yup
      .string('Enter your ageLimit')
      .required('ageLimit is required'),

      closingTime: yup
      .string('Enter your closingTime')
      .required('closingTime is required'),

      gender: yup
      .string('Enter your gender')
      .required('gender is required'),

      requirements: yup
      .string('Enter your requirements')
      .required('requirements is required'),

 
});

function JobPost() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [payed,setPayed]=useState(false);
  const { userInfo } = useSelector(state => state.signIn);
  const {userInfoExtra} =useSelector(state => state.userProfile);
  const {giver,loading}=useSelector(state => state.giverProfile)
  let approved=false;
  if(giver){
     approved=giver.approved; 
  }
  
  const {paymentHistory} =useSelector(state => state.paymentHistory);
  let data = [];
    data = (paymentHistory !== undefined && paymentHistory.length > 0) ? paymentHistory : []

    const created=(date)=>{
      let creatDate=new Date(date)
      let currentDate=new Date();
      let dif=currentDate.getTime()-creatDate.getTime()
      
      return new Date(dif)
   }
  //  console.log(created());

  //  console.log(data);

   let endDate;
  let currentDate = new Date();
  // console.log(moment(currentDate).format("YYYY-MM-DD"));
 

   
    if (data.length !== 0) {

      data.map(p => {

        if (p.paymentId.expired === false) {
          // console.log(p.paymentId.EndingTime);
          //  endDate = new Date(endDate);
          endDate = new Date(p.paymentId.EndingTime);
          // endDate=endDate.getTime-currentDate.getTime()
          // console.log(endDate);
        //  console.log(moment(endDate).format("YYYY-MM-DD"));

          // if ((endDate.getTime() - currentDate.getTime()) < 86400000) {
          //   // console.log("count down start");
          //   // console.log(endDate.getTime() - currentDate.getTime());
            


          // }

         
        }

   

      })
    }





  useEffect(()=>{
      
    if(data.length!==0){

    data.map(p=>{
      
      if(p.paymentId.expired===false){
        setPayed(true)
      }
      
      
      
    })}


  },[paymentHistory])

  

  const formik = useFormik({
    initialValues: {
      title: '',
      jobDescription: '',
      salary: '',
      salaryPeriod:"hour",
      noOfWorkers: '',
      ageLimit: '',
      closingTime: '',
      gender: '',
      requirements: 'No requirements Mentioned'
      
      
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      // console.log(values);
        dispatch(jobPostAction(values));
        
        actions.resetForm();
        
       
        
    }

})


  return (
    <>
      <Navbar />
      
      {loading? 
      <Box
      sx={{
          minHeight: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      }}>
      <CircularProgress />
     </Box>
     :<>
      
    


      {
        approved ?

          <>
            {payed ?
              <>
              <div className='container'>
                <h1 className='my-4 fw-medium'>Post Your Job!</h1>
                <div className='container jobgiver-reg border border-2 rounded-1 my-5'>

                  
                  <form className='m-5' onSubmit={formik.handleSubmit}>

                    <div className='row align-items-center'>
                      <div className='col-2'>
                        <img className="img-fluid" src={!userInfoExtra ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU" : userInfoExtra.image.url} style={{ width: '10rem', borderRadius: '50%' }} alt="" />
                      </div>
                      <div className="col-10">
                        <label htmlFor="inputEmail4">Name Of Organization</label>
                        <input type="email" className="form-control" value={!userInfoExtra ? '' : userInfoExtra.nameOfOrganization} readOnly id="inputEmail4" placeholder="Email" />

                      </div>
                    </div>

                    <br />
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" value={!userInfo ? '' : userInfo.email} readOnly id="inputEmail4" placeholder="Email" />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">User Name</label>
                        <input type="text" className="form-control" id="inputPassword4" value={!userInfo ? '' : userInfo.name} readOnly placeholder="Password" />
                      </div>
                    </div>

                    <br />

                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Address</label>
                        <input type="text" className="form-control" value={!userInfoExtra ? '' : userInfoExtra.address} readOnly id="inputEmail4" />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">ContactNo</label>
                        <input type="text" className="form-control" id="inputPassword4" value={!userInfoExtra ? '' : userInfoExtra.contactNo} readOnly />
                      </div>
                    </div>

                    <br />
                    <div className="form-group">
                      <label htmlFor="title">Job Title:</label>

                      <input
                        type="text"
                        className={`form-control ${formik.touched.title && formik.errors.title ? 'is-invalid' : ''}`}
                        placeholder="Enter title"
                        id="title"
                        name='title'

                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        aria-describedby="org"
                      />

                      {formik.touched.title && formik.errors.title ? (
                        <div id="org" className="form-text invalid-feedback">{formik.errors.title}</div>
                      ) : null}

                    </div>

                    <br />

                    <div className="form-group">
                      <label htmlFor="jobDescription">Description:</label>

                      <textarea
                        type="text"
                        className={`form-control ${formik.touched.jobDescription && formik.errors.jobDescription ? 'is-invalid' : ''}`}
                        placeholder="description about your job..."
                        id="jobDescription"
                        name='jobDescription'
                        rows={4}
                        value={formik.values.jobDescription}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                      />{formik.touched.jobDescription && formik.errors.jobDescription ? (
                        <div id="org" className="form-text invalid-feedback">{formik.errors.jobDescription}</div>
                      ) : null}

                    </div>


                    <br />

                    <div className="row"> 
                    <div className="form-group col-md-6">
                      <label htmlFor="salary">Salary:</label>

                      <input
                        type="text"
                        className={`form-control ${formik.touched.salary && formik.errors.salary ? 'is-invalid' : ''}`}
                        placeholder="Enter salary"
                        id="salary"
                        name='salary'

                        value={formik.values.salary}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                      />{formik.touched.salary && formik.errors.salary ? (
                        <div id="org" className="form-text invalid-feedback">{formik.errors.salary}</div>
                      ) : null}

                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="per">Per:</label>

                      {/* <input
                        type="text"
                        className={`form-control ${formik.touched.salary && formik.errors.salary ? 'is-invalid' : ''}`}
                        placeholder="Enter salary"
                        id="salary"
                        name='salary'

                        value={formik.values.salary}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                      />{formik.touched.salary && formik.errors.salary ? (
                        <div id="org" className="form-text invalid-feedback">{formik.errors.salary}</div>
                      ) : null} */}
                      <select name="salaryPeriod" id="per"className={`form-control`} onChange={formik.handleChange}>
                        <option value="hour">Hour</option>
                        <option value="month">Month</option>
                        <option value="day">Day</option>
                       
                      </select>

                    </div>
                    </div>
                    <br />

                    <div className="form-group">
                      <label htmlFor="noOfWorkers">No Of Workers Needed:</label>

                      <input
                        type="text"
                        className={`form-control ${formik.touched.noOfWorkers && formik.errors.noOfWorkers ? 'is-invalid' : ''}`}
                        placeholder="Enter noOfWorkers"
                        id="noOfWorkers"
                        name='noOfWorkers'

                        value={formik.values.noOfWorkers}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                      />{formik.touched.noOfWorkers && formik.errors.noOfWorkers ? (
                        <div id="org" className="form-text invalid-feedback">{formik.errors.noOfWorkers}</div>
                      ) : null}

                    </div>
                    <br />

                    <div className="form-group">
                      <label htmlFor="ageLimit">Age Limit:</label>

                      <input
                        type="text"
                        className={`form-control ${formik.touched.ageLimit && formik.errors.ageLimit ? 'is-invalid' : ''}`}
                        placeholder="Enter ageLimit"
                        id="ageLimit"
                        name='ageLimit'

                        value={formik.values.ageLimit}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                      />{formik.touched.ageLimit && formik.errors.ageLimit ? (
                        <div id="org" className="form-text invalid-feedback">{formik.errors.ageLimit}</div>
                      ) : null}

                    </div>
                    <br />

                    <div className="form-group">
                      <label htmlFor="closingTime">Closing Date:</label>

                      <input
                        type="date"
                        className={`form-control ${formik.touched.closingTime && formik.errors.closingTime ? 'is-invalid' : ''}`}
                        placeholder="Enter closingTime"
                        id="closingTime"
                        name='closingTime'

                        min={moment(currentDate).format("YYYY-MM-DD")}
                        max={moment(endDate).format("YYYY-MM-DD")}
                      
                        value={formik.values.closingTime}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                      />{formik.touched.closingTime && formik.errors.closingTime ? (
                        <div id="org" className="form-text invalid-feedback">{formik.errors.closingTime}</div>
                      ) : null}

                    </div>
                    <br />

                    <div className="form-group">
                      <label htmlFor="gender">Gender:</label>

                      <input
                        type="text"
                        className={`form-control ${formik.touched.gender && formik.errors.gender ? 'is-invalid' : ''}`}
                        placeholder="Enter gender"
                        id="gender"
                        name='gender'

                        value={formik.values.gender}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                      />{formik.touched.gender && formik.errors.gender ? (
                        <div id="org" className="form-text invalid-feedback">{formik.errors.gender}</div>
                      ) : null}

                    </div>



                    <br />

                    <div className="form-group">
                      <label htmlFor="requirements">Requirements:</label>

                      <input
                        type="text"
                        className={`form-control ${formik.touched.requirements && formik.errors.requirements ? 'is-invalid' : ''}`}
                        placeholder="Enter requirements"
                        id="requirements"
                        name='requirements'

                        value={formik.values.requirements}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                      />{formik.touched.requirements && formik.errors.requirements ? (
                        <div id="org" className="form-text invalid-feedback">{formik.errors.requirements}</div>
                      ) : null}

                    </div>

                    <br />


                    <div className='go'>
                      <button type="submit" className="btn btn-warning py-2 px-5 fs-5 mx-5">Post</button>
                    </div>
                  </form>


                </div>
                </div>
              </>
              :
              <>
                <div className='container verify notauthorised'>
                  <h1 className='display-4 text-center my-5'>
                    you don't have any active package
                  </h1>
                  <p className='lead fs-4 text-center mb-5'>
                    Purchase a package to countinue
                  </p>
                  <div className='text-center'>
                    <Link to="/pricing" className='btn btn-lg btn-primary'>
                      Go To Pricing
                    </Link>
                  </div>
                </div>

                

              </>
            }



          </>

          :

          <>
            {/* <div className='container notauthorised'>

              <h1 className='display-1 text-center my-5'>Wait untill you get verified</h1>

            </div> */}

             <div className="container verify">
                  <h1>Verification Pending</h1>
                  <p>Your application has been sent to the admin.</p>
                  <p>You will be notified within 24 hours.</p>
                  <div className="message">Please wait until you get verified.</div>
              </div>


          </>


      }
      </>}


      <Footer />
    </>
  )
}

export default JobPost