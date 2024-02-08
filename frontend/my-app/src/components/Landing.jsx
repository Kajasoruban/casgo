import { Link, useParams } from "react-router-dom";
import LoginModel from "./LoginModel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { jobLoadAction } from "../redux/actions/jobAction";
import { Pagination, Stack } from "@mui/material";
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

    
       
            
        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            
            </div>

            <div className="carousel-inner">
            <div className="carousel-item active c-item">
                <img src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1964&q=100" className="d-block w-100 c-img" alt="Slide 1"/>
                <div className="carousel-caption top-0 mt-4">
                <p className="mt-5 fs-3 text-uppercase">Are you looking for a part time job in your weekends?</p>
                <h1 className="display-1 fw-bolder text-capitalize">Do Extra Earn Extra</h1>
                <Link to="/jobseeker">
                <button className="btn btn-warning px-4 py-2 fs-5 mt-5">Go</button>
                </Link>
                </div>
            </div>
            <div className="carousel-item c-item">
                <img src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?fit=crop&w=2134&q=100" className="d-block w-100 c-img" alt="Slide 2"/>
                <div className="carousel-caption top-0 mt-4">
                <p className="text-uppercase fs-3 mt-5">Are you looking for part time workers on your busy days?</p>
                <p className="display-1 fw-bolder text-capitalize">Your are at the right place</p>
                


                     <Link to="/jobgiver">
                     <button className="btn btn-warning px-4 py-2 fs-5 mt-5">Go</button>
                     </Link>
                            

                </div>
            </div>
            
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
        

        <div className="about-section my-5">
        <h1 className="my-5">About Us</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex inventore numquam voluptatem. Minus, aliquid?</p>
       
                
                
                
                      
              </div>
        

        <div className="jobsection text-center">

            <h1 >Job Name</h1>
         
         
         {
         
         loading?

         <div >
         <div className="spinner-border text-warning " role="status">
         <span className="visually-hidden">Loading...</span>
         </div>
         </div> :

         jobs && jobs.length === 0 ?

         <p className="lead">No jobs available right now</p>

         :

         jobs && jobs.map((job, i) => (
            <Card 
            key={job._id}
            id={job._id}
            jobTitle={job.name}
            description={job.jobDescription}
            img={job}
            closingTime={job.closingTime}
            location={job.location}
            />
         ))


            
            }
            <Stack spacing={2} >
                <Pagination color="primary" variant="outlined" page={page} count={pages === 0 ? 1 : pages} onChange={(event, value) => setPage(value)} />
            </Stack>
           
        </div>
        
         
            



        
       
        

        </>
    )
}

export default Landing;