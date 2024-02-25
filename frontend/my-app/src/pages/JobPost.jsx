import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import '../Assets/css/JobGiverRegister.css';

import { Link, useNavigate } from 'react-router-dom';
import { jobPostAction } from '../redux/actions/jobAction';
import { giverProfileAction, userProfileAction } from '../redux/actions/userAction';
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
 
  const { userInfo } = useSelector(state => state.signIn);
  const {userInfoExtra} =useSelector(state => state.userProfile);
  const {giver,loading}=useSelector(state => state.giverProfile)
  let approved=false;
  if(giver){
     approved=giver.approved;
  }

  useEffect(()=>{
    dispatch(giverProfileAction());
  },[])

  

  const formik = useFormik({
    initialValues: {
      title: '',
      jobDescription: '',
      salary: '',
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
            {true ?
              <>

                <div className='container jobgiver-reg border border-2 rounded-1 my-5'>

                  <h1 className='display-6 text-center heading-1 fw-bold'>Post Your Job</h1>
                  <form className='' onSubmit={formik.handleSubmit}>

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
                      <label htmlFor="title">Job Tilte:</label>

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

                      <input
                        type="text"
                        className={`form-control ${formik.touched.jobDescription && formik.errors.jobDescription ? 'is-invalid' : ''}`}
                        placeholder="Enter jobDescription"
                        id="jobDescription"
                        name='jobDescription'

                        value={formik.values.jobDescription}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                      />{formik.touched.jobDescription && formik.errors.jobDescription ? (
                        <div id="org" className="form-text invalid-feedback">{formik.errors.jobDescription}</div>
                      ) : null}

                    </div>


                    <br />

                    <div className="form-group">
                      <label htmlFor="salary">Salary Range:</label>

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
                      <label htmlFor="closingTime">Closing Time:</label>

                      <input
                        type="text"
                        className={`form-control ${formik.touched.closingTime && formik.errors.closingTime ? 'is-invalid' : ''}`}
                        placeholder="Enter closingTime"
                        id="closingTime"
                        name='closingTime'

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
                      <label htmlFor="requirements">requirements:</label>

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
              </>
              :
              <>
                <div className='container notauthorised'>
                  <h1 className='display-4 text-center my-5'>
                    Purchase a plan to continue
                  </h1>
                  <div className='text-center'>
                  <Link to="/pricing"className='px-5 py-3 mt-5 btn btn-primary'>Go to pricing</Link>
                  </div>
                </div>
                {/* {navigate("/pricing")} */}

              </>
            }



          </>

          :
          <>
            <div className='container notauthorised'>

              <h1 className='display-1 text-center my-5'>Wait untill you get verified</h1>

            </div>


          </>


      }
      </>}


      <Footer />
    </>
  )
}

export default JobPost