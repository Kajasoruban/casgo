import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { jobGiverSignUpAction } from '../redux/actions/userAction';
import '../Assets/css/JobGiverRegister.css';

import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

const validationSchema = yup.object({
  nameOfOrganization: yup
    .string('Enter your nameOfOrganization')
    .required('NameOfOrganization is required'),

  address: yup
    .string('Enter your address')
    .required('Address is required'),

  contactNo: yup
    .string('Enter your contactNo')
    .min(10, 'Contact number should be of minimum 10 characters length')
    .required('Contact number is required'),

  image: yup.mixed().required("image required")

});

function JobGiver() {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageValid, setImageValid] = useState(false);
  const { userInfo } = useSelector(state => state.signIn);

  const { userInfoExtra } = useSelector(state => state.userProfile);

  
  const { giver, loading } = useSelector(state => state.giverProfile)

  let approved = false;
  if (giver) {
    approved = giver.approved;
  }
  let message = userInfoExtra ? (userInfoExtra.message && "basic"): "";
  let role = giver ? giver.role : "jobSeeker";


  // if(giver){
  //    console.log(giver);
  // }

  const formik = useFormik({
    initialValues: {
      nameOfOrganization: '',
      address: '',
      contactNo: '',
      image: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      //  alert(JSON.stringify(values, null, 2));
      // const data={...values,image:image}

      // console.log(values);
      dispatch(jobGiverSignUpAction(values));
      actions.resetForm();
      navigate('/');


    }

  })




  return (
    <>
      <Navbar />


      {
        loading ?

          <Box
            sx={{
              minHeight: '500px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <CircularProgress />
          </Box>

          :
          <>

            {
             message=="basic" ?
                <>
                  <div className='container jobgiver-reg border border-2 rounded-1 my-5'>

                    <h3 className=' text-center heading-1 fw-bold my-4'>Register to become a job giver</h3>
                    <form className='' onSubmit={formik.handleSubmit} encType="multipart/form-data">

                      <div className='row align-items-center'>
                        <div className='col-2'>
                          <img className="img-fluid" src={!formik.values.image ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU" : formik.values.image} style={{ width: '10rem', borderRadius: '50%' }} alt="" />
                        </div>
                        <div className="col-10">



                          <input
                            type="file"
                            className={` ${formik.touched.image && formik.errors.image ? 'is-invalid' : ''}`}

                            id="image"
                            name='image'
                            onChange={(e) => {

                              // console.log(e.target.files[0]);
                              const reader = new FileReader();
                              { e.target.files[0] !== undefined ? !e.target.files[0].type.includes("image") && setImageValid(true) : setImageValid(false) }
                              (e.target.files[0] !== undefined && e.target.files[0].type.includes("image")) &&
                                reader.readAsDataURL(e.target.files[0]);
                              reader.onloadend = () => {
                                //  console.log(reader.result);
                                formik.setFieldValue("image", reader.result);

                              }
                            }}
                            // value={formik.values.image}
                            // onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          // error={formik.touched.image && Boolean(formik.errors.image)}
                          // helperText={formik.touched.image && formik.errors.image}
                          />{formik.touched.image && formik.errors.image ? (
                            <div id="org" className="form-text invalid-feedback">{formik.errors.image}</div>
                          ) : null}{imageValid && <div id="org2" className="form-text invalid-feedback">It should be an image</div>}

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
                      <div className="form-group">
                        <label htmlFor="nameOfOrganization">Name Of Organization:</label>

                        <input
                          type="text"
                          className={`form-control ${formik.touched.nameOfOrganization && formik.errors.nameOfOrganization ? 'is-invalid' : ''}`}
                          placeholder="Enter nameOfOrganization"
                          id="nameOfOrganization"
                          name='nameOfOrganization'

                          value={formik.values.nameOfOrganization}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // error={formik.touched.nameOfOrganization && Boolean(formik.errors.nameOfOrganization)}
                          // helperText={formik.touched.nameOfOrganization && formik.errors.nameOfOrganization}
                          aria-describedby="org"
                        />
                        {/* <div >{formik.touched.nameOfOrganization && formik.errors.nameOfOrganization}</div> */}
                        {formik.touched.nameOfOrganization && formik.errors.nameOfOrganization ? (
                          <div id="org" className="form-text invalid-feedback">{formik.errors.nameOfOrganization}</div>
                        ) : null}

                      </div>

                      <br />

                      <div className="form-group">
                        <label htmlFor="address">Address:</label>

                        <input
                          type="text"
                          className={`form-control ${formik.touched.address && formik.errors.address ? 'is-invalid' : ''}`}
                          placeholder="Enter address"
                          id="address"
                          name='address'

                          value={formik.values.address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        // error={formik.touched.address && Boolean(formik.errors.address)}
                        // helperText={formik.touched.address && formik.errors.address}
                        />{formik.touched.address && formik.errors.address ? (
                          <div id="org" className="form-text invalid-feedback">{formik.errors.address}</div>
                        ) : null}

                      </div>

                      <br />

                      <div className="form-group">
                        <label htmlFor="contactNo">Contact No:</label>

                        <input
                          type="text"
                          className={`form-control ${formik.touched.contactNo && formik.errors.contactNo ? 'is-invalid' : ''}`}
                          placeholder="Enter contactNo"
                          id="contactNo"
                          name='contactNo'

                          value={formik.values.contactNo}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        // error={formik.touched.contactNo && Boolean(formik.errors.contactNo)}
                        // helperText={formik.touched.contactNo && formik.errors.contactNo}
                        />{formik.touched.contactNo && formik.errors.contactNo ? (
                          <div id="org" className="form-text invalid-feedback">{formik.errors.contactNo}</div>
                        ) : null}

                      </div>

                      <br />

                      <div className='go'>
                        <button type="submit" className="btn btn-warning py-2 px-5 fs-5 my-2">GO</button>
                      </div>
                    </form>

                    {/* <GoogleMap/> */}
                  </div>

                </>
                :
                <>

                  {
                    approved || role=="jobSeeker"?
                      <>
                        <Navigate to="/profile" />
                      </>
                      :

                      <>

                        {/* <div className='container notauthorised'>

                          <h1 className='display-1 text-center my-5'>Wait untill you get verified</h1>

                        </div> */}
                        <div class="container verify">
                            <h1>Verification Pending</h1>
                            <p>Your application has been sent to the admin.</p>
                            <p>You will be notified within 24 hours.</p>
                            <div class="message">Please wait until you get verified.</div>
                        </div>


                      </>

                  }
                </>}

          </>}

      <Footer />
    </>
  );
}



{/* <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1">
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1">
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> */}
export default JobGiver;