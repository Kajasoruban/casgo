import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { jobStatusAction } from '../redux/actions/jobAction';
import moment from 'moment';
import PlaceIcon from '@mui/icons-material/Place';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function Card2({ jobTitle, description, closingTime, createdAt, address, salary, applicants, id, img, active, setDisable, disable }) {

  const dispatch = useDispatch();

  const handle = () => {

    dispatch(jobStatusAction(id, active))
    // setDisable(!disable)

  }

  return (
    <>

      <div className='border bg-body rounded row '>
        <div className='col-5  fs-5 d-flex'>
          <div className=''>
            <img className="mt-2 rounded border" style={{ width: "6rem", height: "6rem" }} src={img} />
          </div>
          <div className='ms-4 mt-3'>
            <p className="text-capitalize"><WorkOutlineIcon /> {jobTitle}</p>
            <p className=""><PlaceIcon /> {address}</p>
          </div>
        </div>
        <div className='col-2 '>
          <p className='mt-4 fs-5'>{applicants}</p>
        </div>
        <div className='col-2  fs-6'>
          <p className='mt-3'>{moment(createdAt).format('YYYY-MM-DD')}<br /><br />{closingTime}</p>
        </div>

        <div className='col-1  '>
          <p className='mt-4'>{active ? <span className='text-success'>Active</span> : <span className='text-danger '>Inactive</span>}</p>
        </div>
        <div className='col-2  '>

          <Link className="btn  px-4 btn-warning mt-3 mb-2" to={`/jobgiver/jobPosted/${id}/applicants`}>Applications</Link>

          <button className={`btn px-5 ${active ? "btn-danger" : "btn-success"}`} onClick={handle} >{active ? "Disable" : "Enable"}</button>

        </div>
      </div>

    </>
  )
}

export default Card2