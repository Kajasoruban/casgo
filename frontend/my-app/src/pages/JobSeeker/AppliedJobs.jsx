import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobsHistoryAction } from '../../redux/actions/userAction';
import Card3 from '../../components/Card3';

function AppliedJobs() {
 
  const {history,loading}=useSelector(state =>state.jobsHistory)
  const dispatch=useDispatch();
   let jobHistory=[];
  if(history){
    jobHistory=(history.jobsHistory !== undefined && history.jobsHistory.length > 0) ? history.jobsHistory : []
  }
  
  
//  console.log(jobHistory);
 
  

  useEffect(()=>{
    dispatch(jobsHistoryAction())
  },[])

  return (
    <>
    <div>AppliedJobs</div>

    {loading ? (
            <div>
              <div className="spinner-border text-warning " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : jobHistory && jobHistory.length === 0 ? (
            <p className="lead">Apply for a job right now</p>
          ) : (
            <>
              <div className="row container mx-auto my-5">
                {jobHistory &&
                  jobHistory.map((job, i) => (
                    <Card3
                      key={job._id}
                      id={job.jobId._id}
                      jobTitle={job.jobId.title}
                      description={job.jobId.jobDescription}
                      img={
                        job.jobGiverId
                          ? job.jobGiverId.image.url
                          : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEXh5urDzdbZ3+TT19vW2t7M0tfAytPd5OnT2d/CzNPO2dvg5enk6ezBytLY3uTT2t/W4OLM1d7I09W/ys/G0NfN2N3c5efN0dXCzs/S3eDJ1dbQ2eL4S0liAAACs0lEQVR4nO3c4XqaMBhAYYISjASUYq1293+fQ1AbSBhdp+DHzvtvsfB4BsMQ6aIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDpZUX8PEU2d14t1up59GruvFr8xEClKJwChRRSOD8KKaRwfm5hEq8fYKdft3BnH7HH9IULNw/ZI4VTo3BMFtnIdv79Lq3Qxh9vb6u1M7KsQns27aa6vI8tq7CsbttqlV7HllRoN+4ij7kuOy2pcF85Gyt9aC84Syo8qA6zb0YFFhZxeDzrLUSa92ZYYKGqjsHxtbfU2gyLK7QrpQ7BFz5NL1A349IKbZrX518o8ZK+hGNok8sbDi7Pe2dp+/cgrXDfnop657/kXWm2zbCwQnt/+2nkfZHUO4SmndUIK3SWJPwXi7wTmEj8xHff7cl71SZu4enob/Pyhd2ExF/G+bjXmNNtXiCp0MadT7x84yXajakuQZVJ7rMCSYX9iWfuT9/s8VwqVZ6zr3hJhdu8W6h08Hv57iKGoEKb9WdltXRgNw5BhYnXV98Dju9RTmERekpDl6Pr4mIKbeAcvSSex/YopbD+HAgWqioePIrtB4aUwv60+osZeNDJxu2sR0ih/RwKHLraZKWWdAfcm830EgNXGxvnWlRh9IdAFZqi7y6TA0mFv0ae5yu6RzFTzc8LKgzNZjqMu/pmbzeRggrLkUBlnAtqmtymr3IKv/PM6cf1PLXOKoCYwuNpPPB+P3xweqQUDs5mupr74b1xf1ZKYda/KxxKjO1758snMYXbbx3CNqn3x2b7RRX2g5vtKZwahRRSOD8KKaRwfn6h94jF4gqP6Y81279+4b+icGr/V2HgmZkfeOnCxf9GyeNROAUKKaRwfhRSSOH8lv//02TJM60fMtMFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODv/AaWZyr86EvqgAAAAABJRU5ErkJggg=="
                      }
                      closingTime={job.jobId.closingTime}
                      salary={job.jobId.salary}
                      address={job.jobId.address}
                      status={job.applicationStatus}
                      organization={job.jobId.nameOfOrganization}
                    />
                  ))}
              </div>
            </>
          )}

    
    
    
    </>
  )
}

export default AppliedJobs