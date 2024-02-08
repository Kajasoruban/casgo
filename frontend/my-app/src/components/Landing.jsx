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

            <h1 >Jobs</h1>
         
         
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
         <>
         <div className="row container mx-auto my-5">
         {
         jobs && jobs.map((job, i) => (
            <Card 
            key={job._id}
            id={job._id}
            jobTitle={job.name}
            description={job.jobDescription}
            img={job.jobGiverId?job.jobGiverId.image.url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEXh5urDzdbZ3+TT19vW2t7M0tfAytPd5OnT2d/CzNPO2dvg5enk6ezBytLY3uTT2t/W4OLM1d7I09W/ys/G0NfN2N3c5efN0dXCzs/S3eDJ1dbQ2eL4S0liAAACs0lEQVR4nO3c4XqaMBhAYYISjASUYq1293+fQ1AbSBhdp+DHzvtvsfB4BsMQ6aIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDpZUX8PEU2d14t1up59GruvFr8xEClKJwChRRSOD8KKaRwfm5hEq8fYKdft3BnH7HH9IULNw/ZI4VTo3BMFtnIdv79Lq3Qxh9vb6u1M7KsQns27aa6vI8tq7CsbttqlV7HllRoN+4ij7kuOy2pcF85Gyt9aC84Syo8qA6zb0YFFhZxeDzrLUSa92ZYYKGqjsHxtbfU2gyLK7QrpQ7BFz5NL1A349IKbZrX518o8ZK+hGNok8sbDi7Pe2dp+/cgrXDfnop657/kXWm2zbCwQnt/+2nkfZHUO4SmndUIK3SWJPwXi7wTmEj8xHff7cl71SZu4enob/Pyhd2ExF/G+bjXmNNtXiCp0MadT7x84yXajakuQZVJ7rMCSYX9iWfuT9/s8VwqVZ6zr3hJhdu8W6h08Hv57iKGoEKb9WdltXRgNw5BhYnXV98Dju9RTmERekpDl6Pr4mIKbeAcvSSex/YopbD+HAgWqioePIrtB4aUwv60+osZeNDJxu2sR0ih/RwKHLraZKWWdAfcm830EgNXGxvnWlRh9IdAFZqi7y6TA0mFv0ae5yu6RzFTzc8LKgzNZjqMu/pmbzeRggrLkUBlnAtqmtymr3IKv/PM6cf1PLXOKoCYwuNpPPB+P3xweqQUDs5mupr74b1xf1ZKYda/KxxKjO1758snMYXbbx3CNqn3x2b7RRX2g5vtKZwahRRSOD8KKaRwfn6h94jF4gqP6Y81279+4b+icGr/V2HgmZkfeOnCxf9GyeNROAUKKaRwfhRSSOH8lv//02TJM60fMtMFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODv/AaWZyr86EvqgAAAAABJRU5ErkJggg=="}
            closingTime={job.closingTime}
            location={job.location}
            />
         ))}
         </div>
         </>

            
            }
                <div className="">
                <Pagination color="primary" className="pagination" variant="outlined" page={page} count={pages === 0 ? 1 : pages} onChange={(event, value) => setPage(value)} />
                </div>
           
        </div>
        
         
            



        
       
        

        </>
    )
}

export default Landing;