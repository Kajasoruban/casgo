import { Link, useNavigate } from "react-router-dom";
import LoginModel from "./LoginModel";
import { useSelector } from "react-redux";




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

    return (
      <>
        <div
          id="hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
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

          <div className="carousel-inner carouselbg  container-fluid  ">
            <div className="carousel-item active c-item ">
              {/* <img
                src="https://img.freepik.com/free-vector/job-vacancy-isometric-background-with-applicants-employers-looking-into-resume-sheet-vector-illustration_1284-81716.jpg?w=826&t=st=1708105997~exp=1708106597~hmac=db54ff6997a9b2356219431791aa168bd81d7c3d149dc372a1cbcf145282fc71"
                className="d-block  c-img"
                alt="Slide 1"
              /> */}
              {/* <div className="carousel-caption top-0 mt-4">
                <p className="mt-5 fs-2 text-uppercase text-stroke-p fw-bolder">
                  Are you looking htmlFor a part time job in your weekends?
                </p>
                <h1 className="display-1 fw-bolder text-capitalize text-stroke-s">
                  Do Extra Earn Extra
                </h1>
                <Link to="/jobseeker">
                  <button className="btn btn-warning px-4 py-2 fs-5 mt-5 go-btn">
                    Go
                  </button>
                </Link>
              </div> */}
              <div className="row  ">

              <div className=" top-0 mt-4  col-6   text-center">

                <div className=" ms-5">
                <p className=" text-stroke-p display-3 mt-5 fw-bolder ">
                  Do Extra <br/>Earn Extra
                </p>
                <br/>
                <h3 className=" text-stroke-s text-left">
                Are you looking for a part <br/>time job in your weekends?
                </h3>
               
                  <button className="btn btn-warning px-4 py-2 fs-5 mt-3 go-btn fw-bold" onClick={()=>loginCheck("/jobseeker")}>
                    Register as Job Seeker
                  </button>
              
                </div>
              </div>



              <div className="col-6">
                <img
                src="https://img.freepik.com/free-photo/job-hiring-vacancy-team-interview-career-recruiting_53876-121268.jpg?w=740&t=st=1708248703~exp=1708249303~hmac=936dcce7f26b9d7ada83c5accd46400a2d3037cf0a4e7445a5a83cf07b17ba64"
                className="d-block  c-img"
                alt="Slide 1"
              />
              </div>
              
              
              
              </div>
            </div>
            <div className="carousel-item c-item" >
              {/* <img
                src="https://img.freepik.com/free-vector/choice-worker-concept_23-2148626348.jpg?w=740&t=st=1707557698~exp=1707558298~hmac=074ee08cc7570ec2b74959132c7f884a5c31173e51dd1849bf793e43c5b82f43"
                className="d-block  c-img"
                alt="Slide 2"
              />
              <div className="carousel-caption top-0 mt-4">
                <p className="text-uppercase fs-2 mt-5 text-stroke-p fw-bolder">
                  Are you looking for part time workers on your busy days?
                </p>
                <p className="display-1 fw-bolder text-capitalize text-stroke-s">
                  Your are at the right place
                </p>

                <Link to="/jobgiver">
                  <button className="btn btn-warning px-4 py-2 fs-5 mt-5 go-btn">
                    Go
                  </button>
                </Link>
              </div> */}


            <div className="row  ">


            <div className="col-6 ">
              <img
              src="https://res.cloudinary.com/dbczgzhd3/image/upload/v1708269425/m42rzpmywgz4spx0fjrx.jpg"
              className="d-block  c-img"
              alt="Slide 1"
            />
            </div>

            <div className=" top-0 mt-4  col-6  text-center">
            <div className=" me-5">
              <p className=" text-stroke-p display-3 mt-5 fw-bolder ">
               Take a Break
              </p>
              <br/>
              <h3 className=" text-stroke-s text-left mt-3">
              Are you looking for part time workers <br/> on your busy days?
              </h3>
             
                <button className="btn btn-warning px-4 py-2 fs-5 mt-4 go-btn fw-bold" onClick={()=>loginCheck("/jobgiver")}>
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
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
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
          <div className="container-fluid">
         
           <br/><br/>
            <div className=" text-center mb-45 lg-mb-20">
              
              <h1 className="fw-bolder  ps-3 pe-3">How it's Work?</h1>
             
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
                    <div className=" fw-bold fs-3 text-lg text-dark mt-25 mb-10">
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
                    <div className="fs-3 fw-bold text-lg text-dark mt-25 mb-10">
                      Choose the account type
                    </div>
                    <p className="fs-5">
                      Select whether you want to become a job giver or job seeker and then complete your profile.
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
                    <div className="fs-3 fw-bold text-lg text-dark mt-25 mb-10">
                      Apply job or Post job
                    </div>
                    <p className="fs-5">
                      Apply & get your preferable jobs or Post job and get workers in no time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr/>
          </div>
        </section>
        {/* how it work section end */}


        <div className="container" id="contact">
          <h1 className="display-3 text-center my-5">Contact Us</h1>

    <div className="row">

      <div className="col-lg-8 col-lg-offset-2 mx-auto my-5">

        
        <form id="contact-form" method="post" action="" role="form">

        <div className="messages"></div>

        <div className="controls">

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_name">Firstname *</label>
                <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_lastname">Lastname *</label>
                <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
                <div className="help-block with-errors"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_email">Email *</label>
                <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="form_phone">Phone</label>
                <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone"/>
                <div className="help-block with-errors"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="form_message">Message *</label>
                <textarea id="form_message" name="message" className="form-control" placeholder="Message.. *" rows="4" required data-error="Please,leave us a message."></textarea>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-md-12">
              <input type="submit" className="btn btn-success btn-send" value="Send message"/>
            </div>
          </div>
         
        </div>

        </form>

      </div>

    </div>

  </div>
  <hr/>

       
      </>
    );
}

export default Landing;