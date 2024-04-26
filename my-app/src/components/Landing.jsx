import { Link, useNavigate } from "react-router-dom";
import LoginModel from "./LoginModel";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import * as yup from 'yup';
import { useFormik } from "formik";

const validationSchema = yup.object({
  name: yup
  .string('Enter your name')
  .required('name is required'),

  email: yup
  .string('Enter your email')
  .required('email is required'),

  phone: yup
  .string('Enter your phone')
  .min(10,"invalid phone number")
  .required('phone No is required'),  

  message: yup
  .string('Enter your message')
  .required('message is required'),  

 
});



function Landing(){
  const { userInfo } = useSelector(state => state.signIn);

  const navigate=useNavigate();
  
  const loginCheck=(route)=>{
    if(userInfo===null){
      navigate("/login");
    }else{
      
      navigate(route);
    }
  }



  const contactMessage=async(values)=>{
 
    try {
      const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/contactMessage`,values,{withCredentials:true})
 
      if(response.data.success){  
       
        toast.success("Your message has been send to admin")
      }
    } catch (error) {
      console.log(error);
       toast.error("Failed to send message try again later")
    }
  }

  const {handleSubmit,handleChange,handleBlur,values} = useFormik({
    initialValues: {
      name: '',
      email:"",
      phone: '',
      message: ''
    },
    
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
        contactMessage(values)
        actions.resetForm();
      
    }

})



    return (
      <>
        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#hero-carousel"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#hero-carousel"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
  </div>

  <div className="carousel-inner carouselbg container-fluid">
    <div className="carousel-item active c-item">
      <div className="row">
        <div className="top-0  mt-md-4 col-md-6 text-center">
          <div className="ms-md-5 ">
            <p className="text-stroke-p display-3 mt-5 fw-bolder">Do Extra Earn Extra</p>
            <br />
            <h3 className="text-stroke-s text-left">
              Are you looking for a part-time job in your weekends?
            </h3>
            <button onClick={()=>loginCheck("/jobseeker")} className="btn btn-warning px-4 py-2 fs-5 mt-5 go-btn fw-bold">
              Register as Job Seeker
            </button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img
            src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?w=1060&t=st=1710379594~exp=1710380194~hmac=3d8163471eee0a0e88dea1bf47a10e57805d26fd7ab98582123b8ad1879b8eca"
            className="d-block c-img"
            alt="Slide 1"
          />
        </div>
      </div>
    </div>
    <div className="carousel-item c-item">
      <div className="row">
        <div className="col-md-6 d-none d-md-block">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/811/045/non_2x/hiring-employee-open-recruitment-concept-job-vacancy-illustration-free-vector.jpg"
            className="d-block c-img"
            alt="Slide 2"
          />
        </div>
        <div className="top-0  mt-md-4 col-md-6 text-center">
          <div className="me-md-5 ">
            <p className="text-stroke-p display-3 mt-5 fw-bolder">Take a Break</p>
            <br />
            <h3 className="text-stroke-s text-left mt-3">
              Are you looking for part-time workers on your busy days?
            </h3>
            <button onClick={()=>loginCheck("/jobgiver")} className="btn btn-warning px-4 py-2 fs-5 mt-5 go-btn fw-bold">
              Register as Job Giver
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#hero-carousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#hero-carousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


        {/* about section start */}
        

        {/* <div className="about-section my-5">
          <h1 className="my-5">About Us</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex
            inventore numquam voluptatem. Minus, aliquid?
          </p>
        </div> */}

        {/* about section end */}

        {/* how it work section start */}
        <section className="how-it-works position-relative pt-130 xl-pt-110 my-5">
          <div className="container-fluid my-5">
         
           <br/><br/>
            <div className=" text-center mb-45 lg-mb-20">
              
              <h1 className="fw-bolder   ps-3 pe-3">How it's Work?</h1>
             
            </div> <br/><br/>

            <div className="rounded-1 mb-5">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20"
                   
                  >
                    <div className="numb fw-500 d-flex align-items-center justify-content-center m-auto">
                      <span className='border border-2 bg-success rounded fs-3 fw-bold'>01</span>
                    </div>
                    <div className=" fw-bold fs-4 text-lg text-dark mt-2 mb-3">
                      Create Account
                    </div>
                    <p className="fs-5">
                      It's very easy to create your basic account
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20"
                  
                  >
                    <div className="numb fw-bold d-flex align-items-center justify-content-center m-auto">
                      <span className='border border-2 bg-success rounded fs-3 fw-bold'>02</span>
                    </div>
                    <div className="fs-4 fw-bold text-lg text-dark mt-2 mb-3">
                      Choose the account type
                    </div>
                    <p className="fs-5">
                      Select whether you want to become <br/> a job giver or job seeker <br/> then complete your registration.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 "
                  
                  >
                    <div className="numb fw-bold d-flex align-items-center justify-content-center m-auto">
                      <span className='border border-2 bg-success rounded fs-3 fw-bold'>03</span>
                    </div>
                    <div className="fs-4 fw-bold text-lg text-dark mt-2 mb-3">
                      Apply job or Post job
                    </div>
                    <p className="fs-5">
                      Apply & get your preferable jobs <br/> or <br/> Post job and get workers in time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <hr className=""/> */}
          </div>
        </section>
        {/* how it work section end */}


       

<div className="contact3 py-5 container">
  <div className="row no-gutters">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="card-shadow">
            <img src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148890148.jpg?t=st=1710263955~exp=1710267555~hmac=34c120626e4618fe7c42cc72fdecc3426bb7e4cc767b8276af97f27c7fc413e6&w=740" className="img-fluid"/>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-box ml-3">
            <h1 className="fw-bold mt-5">Quick Contact</h1>
            <form className="mt-4" onSubmit={handleSubmit} >
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control my-3" id="name" type="text" placeholder="name" name="name" value={values.name} onChange={handleChange}/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control my-3" id="email" type="email" placeholder="email address"name="email" required value={values.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input className="form-control my-3" id="phone" type="text" placeholder="phone" name="phone" value={values.phone} required onChange={handleChange} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <textarea className="form-control my-3" id="message" rows="5" placeholder="message" name="message"  value={values.message} required onChange={handleChange} ></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="col-lg-12">
          <div className="card mt-4 border-0 mb-4">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail pl-0">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"/>
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium">Address</h6>
                    <p className="">601 Sherwood Ave.
                      <br/> San Bernandino</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"/>
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium">Phone</h6>
                    <p className="">251 546 9442
                      <br/> 630 446 8851</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"/>
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium">Email</h6>
                    <p className="">
                      info@wrappixel.com
                      <br/> 123@wrappixel.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
</div>

       
      </>
    );
}

export default Landing;