import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PlaceIcon from '@mui/icons-material/Place';


function Card3({ jobTitle, description, closingTime, createdAt, address, salary, id, img, status, setDisable, disable }) {
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

        <div className='col-2  fs-6'>
          <p className='mt-4'>{moment(createdAt).format('YYYY-MM-DD')}</p>
        </div>


        <div className='col-2  fs-6'>
          <p className='mt-4'>{closingTime}</p>
        </div>

        <div className='col-1 '>
          <p className={`mt-4 fs-5 fw-bold ${status == 'accepted' ? 'text-success' : status == 'rejected' ? 'text-danger' : 'text-warning'}`}>{status}</p>
        </div>


        <div className='col-2  '>

          <button className={`btn px-5 text-danger mt-4`}>Delete</button>

        </div>
      </div>

    </>
  )
}

export default Card3