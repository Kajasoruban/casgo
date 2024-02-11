import { Link } from "react-router-dom";
import LoginModel from "./LoginModel";




function Landing(){
    

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

          <div className="carousel-inner">
            <div className="carousel-item active c-item ">
              <img
                src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?w=1060&t=st=1707554661~exp=1707555261~hmac=6b1d011ae351ecdf7195323f33ecbb359e662c8e491b81336f5bfebfed059c4a"
                className="d-block  c-img"
                alt="Slide 1"
              />
              <div className="carousel-caption top-0 mt-4">
                <p className="mt-5 fs-2 text-uppercase text-stroke-p fw-bolder">
                  Are you looking for a part time job in your weekends?
                </p>
                <h1 className="display-1 fw-bolder text-capitalize text-stroke-s">
                  Do Extra Earn Extra
                </h1>
                <Link to="/jobseeker">
                  <button className="btn btn-warning px-4 py-2 fs-5 mt-5 go-btn">
                    Go
                  </button>
                </Link>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img
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
          <div className="container">
          <hr/>
           <br/><br/>
            <div className=" text-center mb-45 lg-mb-20">
              
              <h2 className="fw-bolder ps-3 pe-3">How it's Work?</h2>
             
            </div> <br/><br/>

            <div className="border border-success rounded-1 mb-5">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20"
                   
                  >
                    <div className="numb fw-500 d-flex align-items-center justify-content-center m-auto">
                      <span className='border border-2 bg-success rounded fs-4'>01</span>
                    </div>
                    <div className=" fw-bold text-lg text-dark mt-25 mb-10">
                      Create Account
                    </div>
                    <p>
                      It's very easy to open an account and start your journey.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20"
                  
                  >
                    <div className="numb fw-bold d-flex align-items-center justify-content-center m-auto">
                      <span className='border border-2 bg-success rounded fs-4'>02</span>
                    </div>
                    <div className=" fw-bold text-lg text-dark mt-25 mb-10">
                      Choose the account type
                    </div>
                    <p>
                      Select whether you want to become a job giver or job seeker and then complete your profile.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="card-style-five text-center position-relative mt-25 pb-35 lg-pb-20 "
                  
                  >
                    <div className="numb fw-bold d-flex align-items-center justify-content-center m-auto">
                      <span className='border border-2 bg-success rounded fs-4'>03</span>
                    </div>
                    <div className=" fw-bold text-lg text-dark mt-25 mb-10">
                      Apply job or Post job
                    </div>
                    <p>
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

       
      </>
    );
}

export default Landing;