import { Link, useParams } from "react-router-dom";
import LoginModel from "./LoginModel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { jobLoadAction } from "../redux/actions/jobAction";
import { Pagination } from "@mui/material";
import Card from "./Card";



function Landing(){
    const { jobs, setUniqueLocation, pages, loading } = useSelector(state => state.loadJobs);

    const dispatch = useDispatch();
    const { keyword, location } = useParams();

    const [page, setPage] = useState(1);
    // const [cat, setCat] = useState('');

    useEffect(() => {
        dispatch(jobLoadAction(page, keyword, location));
    }, [page, keyword, location]);

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

        <div className="jobsection text-center">
          <h1>Jobs</h1>

          {loading ? (
            <div>
              <div className="spinner-border text-warning " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : jobs && jobs.length === 0 ? (
            <p className="lead">No jobs available right now</p>
          ) : (
            <>
              <div className="row container mx-auto my-5">
                {jobs &&
                  jobs.map((job, i) => (
                    <Card
                      key={job._id}
                      id={job._id}
                      jobTitle={job.name}
                      description={job.jobDescription}
                      img={
                        job.jobGiverId
                          ? job.jobGiverId.image.url
                          : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEXh5urDzdbZ3+TT19vW2t7M0tfAytPd5OnT2d/CzNPO2dvg5enk6ezBytLY3uTT2t/W4OLM1d7I09W/ys/G0NfN2N3c5efN0dXCzs/S3eDJ1dbQ2eL4S0liAAACs0lEQVR4nO3c4XqaMBhAYYISjASUYq1293+fQ1AbSBhdp+DHzvtvsfB4BsMQ6aIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDpZUX8PEU2d14t1up59GruvFr8xEClKJwChRRSOD8KKaRwfm5hEq8fYKdft3BnH7HH9IULNw/ZI4VTo3BMFtnIdv79Lq3Qxh9vb6u1M7KsQns27aa6vI8tq7CsbttqlV7HllRoN+4ij7kuOy2pcF85Gyt9aC84Syo8qA6zb0YFFhZxeDzrLUSa92ZYYKGqjsHxtbfU2gyLK7QrpQ7BFz5NL1A349IKbZrX518o8ZK+hGNok8sbDi7Pe2dp+/cgrXDfnop657/kXWm2zbCwQnt/+2nkfZHUO4SmndUIK3SWJPwXi7wTmEj8xHff7cl71SZu4enob/Pyhd2ExF/G+bjXmNNtXiCp0MadT7x84yXajakuQZVJ7rMCSYX9iWfuT9/s8VwqVZ6zr3hJhdu8W6h08Hv57iKGoEKb9WdltXRgNw5BhYnXV98Dju9RTmERekpDl6Pr4mIKbeAcvSSex/YopbD+HAgWqioePIrtB4aUwv60+osZeNDJxu2sR0ih/RwKHLraZKWWdAfcm830EgNXGxvnWlRh9IdAFZqi7y6TA0mFv0ae5yu6RzFTzc8LKgzNZjqMu/pmbzeRggrLkUBlnAtqmtymr3IKv/PM6cf1PLXOKoCYwuNpPPB+P3xweqQUDs5mupr74b1xf1ZKYda/KxxKjO1758snMYXbbx3CNqn3x2b7RRX2g5vtKZwahRRSOD8KKaRwfn6h94jF4gqP6Y81279+4b+icGr/V2HgmZkfeOnCxf9GyeNROAUKKaRwfhRSSOH8lv//02TJM60fMtMFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODv/AaWZyr86EvqgAAAAABJRU5ErkJggg=="
                      }
                      closingTime={job.closingTime}
                      location={job.location}
                    />
                  ))}
              </div>
            </>
          )}
          <div className="">
            <Pagination
              color="primary"
              className="pagination"
              variant="outlined"
              page={page}
              count={pages === 0 ? 1 : pages}
              onChange={(event, value) => setPage(value)}
            />
          </div>
        </div>
      </>
    );
}

export default Landing;