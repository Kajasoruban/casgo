import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { jobLoadAction } from "../redux/actions/jobAction";
import { Pagination } from "@mui/material";
import Card from "../components/Card";
import { useParams } from 'react-router-dom';

function Jobs() {
 
    const { jobs, setUniqueLocation, pages, loading } = useSelector(state => state.loadJobs);
    
    const dispatch = useDispatch();
    // const { keyword, address } = useParams();
    const [keyword,setKeyword] = useState("");
    const [address,setAddress] = useState("");
    const [querry,setQuerry] = useState("")
    const[filter,setFilter] =useState("")
    const [page, setPage] = useState(1);
    // const [cat, setCat] = useState('');

    useEffect(() => {
        dispatch(jobLoadAction(page, keyword, address));
    }, [page, keyword, address]);

    const handleSearch =(querry)=>{
      setQuerry(querry)
      
    }

    const handleLocation =(e)=>{
      setFilter(e.target.value)
      
    }

    


  return (
    <>

    <Navbar/>
   
    <div className='container-fluid border rounded bg-body-tertiary'>
       <h2 className='text-center my-5'>Find Jobs!</h2>
    </div>


    <div className='container row'>
      <div className='col-4'>
        <div className='border rounded bg-body-tertiary d-flex flex-column'>
          <div className='border'>
            <p>Search for any key words</p>
            <input type='text'/>
          </div>

          <div className='border'>
          <label htmlFor="location">Filter by location:</label>
          <br/>
          <input list="locations" name="address" onChange={(e) => handleLocation(e)} id="location" />
          <button className='btn btn-primary' onClick={() => { setAddress(filter) }}>Filter</button>

          <datalist id="locations">
          {setUniqueLocation&&setUniqueLocation.map((location,i)=>(
                  <option key={i} value={location}/>
            ))
            
          
          }
            
          </datalist>
          </div>
         
        </div>

      </div>

      <div className='col-8'>

      </div>

    </div>

    <br/>
    <div className="jobsection text-center">
        


        <div className="main-search-input-wrap my-5">


          <div className="main-search-input fl-wrap my-5 border border-1">
            <div className="main-search-input-item">
              <input type="text" value={querry} onChange={(e) => handleSearch(e.target.value)} placeholder="Type any key words..." />
            </div>

            <button className="main-search-button" onClick={() => { setKeyword(querry) }}>Search</button>
          </div>
          <label htmlFor="location">Filter by location:</label>
          <input list="locations" name="address" onChange={(e) => handleLocation(e)} id="location" />
          <button className='btn btn-primary' onClick={() => { setAddress(filter) }}>Filter</button>

          <datalist id="locations">
          {setUniqueLocation&&setUniqueLocation.map((location,i)=>(
                  <option key={i} value={location}/>
            ))
            
          
          }
            
          </datalist>


        </div>
      

        <br />

          {loading ? (
            <div className="row container  my-5 ">
              <div className='col'>
              <div className="spinner-border text-warning " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
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
                      jobTitle={job.title}
                      description={job.jobDescription}
                      img={
                        job.jobGiverId
                          ? job.jobGiverId.image.url
                          : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEXh5urDzdbZ3+TT19vW2t7M0tfAytPd5OnT2d/CzNPO2dvg5enk6ezBytLY3uTT2t/W4OLM1d7I09W/ys/G0NfN2N3c5efN0dXCzs/S3eDJ1dbQ2eL4S0liAAACs0lEQVR4nO3c4XqaMBhAYYISjASUYq1293+fQ1AbSBhdp+DHzvtvsfB4BsMQ6aIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDpZUX8PEU2d14t1up59GruvFr8xEClKJwChRRSOD8KKaRwfm5hEq8fYKdft3BnH7HH9IULNw/ZI4VTo3BMFtnIdv79Lq3Qxh9vb6u1M7KsQns27aa6vI8tq7CsbttqlV7HllRoN+4ij7kuOy2pcF85Gyt9aC84Syo8qA6zb0YFFhZxeDzrLUSa92ZYYKGqjsHxtbfU2gyLK7QrpQ7BFz5NL1A349IKbZrX518o8ZK+hGNok8sbDi7Pe2dp+/cgrXDfnop657/kXWm2zbCwQnt/+2nkfZHUO4SmndUIK3SWJPwXi7wTmEj8xHff7cl71SZu4enob/Pyhd2ExF/G+bjXmNNtXiCp0MadT7x84yXajakuQZVJ7rMCSYX9iWfuT9/s8VwqVZ6zr3hJhdu8W6h08Hv57iKGoEKb9WdltXRgNw5BhYnXV98Dju9RTmERekpDl6Pr4mIKbeAcvSSex/YopbD+HAgWqioePIrtB4aUwv60+osZeNDJxu2sR0ih/RwKHLraZKWWdAfcm830EgNXGxvnWlRh9IdAFZqi7y6TA0mFv0ae5yu6RzFTzc8LKgzNZjqMu/pmbzeRggrLkUBlnAtqmtymr3IKv/PM6cf1PLXOKoCYwuNpPPB+P3xweqQUDs5mupr74b1xf1ZKYda/KxxKjO1758snMYXbbx3CNqn3x2b7RRX2g5vtKZwahRRSOD8KKaRwfn6h94jF4gqP6Y81279+4b+icGr/V2HgmZkfeOnCxf9GyeNROAUKKaRwfhRSSOH8lv//02TJM60fMtMFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODv/AaWZyr86EvqgAAAAABJRU5ErkJggg=="
                      }
                      closingTime={job.closingTime}
                      salary={job.salary}
                      address={job.address}
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



    <Footer/>

    </>
  )
}

export default Jobs