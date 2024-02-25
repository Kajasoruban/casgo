import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { jobPostedAction } from '../../redux/actions/jobAction';
import Card2 from '../../components/Card2';

function JobPosted() {

    // const [disable,setDisable]=useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobPostedAction())
        // console.log(disable);
    }, []);

    let { jobs,  loading } = useSelector(state => state.jobPosted);
    
    jobs = (jobs !== undefined && jobs.length > 0) ? jobs : []
    // console.log(jobs);

    

  return (
    <>
    <div>JobPosted</div>

    {loading ? (
            <div>
              <div className="spinner-border text-warning " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : jobs && jobs.length === 0 ? (
            <p className="lead m-5 p-5 text-center">No jobs posted yet</p>
          ) : (
            <>
              <div className="row container mx-auto my-5">
                {jobs &&
                  jobs.map((job, i) => (
                    <Card2
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
                      active={job.active}
                      
                    />
                  ))}
              </div>
            </>
          )}
    
    </>
  )
}

export default JobPosted