import React from 'react'
import { Link } from 'react-router-dom'
import PlaceIcon from '@mui/icons-material/Place';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaymentsIcon from '@mui/icons-material/Payments';

function Card({ jobTitle, description, closingTime, address, salary, id, created, img, period }) {

    const createdtime = (date) => {
        let creatDate = new Date(date)
        let currentDate = new Date();
        let dif = currentDate.getTime() - creatDate.getTime()
        // let dif=24*60*60*1000
        if (dif <= 59 * 1000) {
            return Math.floor(dif / (1000)) + 'seconds ago'
        } else if (dif <= 59 * 60 * 1000) {
            return Math.floor(dif / (60 * 1000)) + 'minutes ago'
        } else if (dif <= 24 * 60 * 60 * 1000) {
            return Math.floor(dif / (60 * 60 * 1000)) + 'hours ago'
        } else if (dif <= 29 * 24 * 60 * 60 * 1000) {
            return Math.floor(dif / (24 * 60 * 60 * 1000)) + 'day ago'
        } else {
            return dif;
        }

    }
    return (
        <>


            <section className="col-sm-12 col-md-6 g-5 border ">
                <div className="d-flex justify-content-between align-items-center  ">
                    <img className=" mx-3 rounded border" style={{ width: "6rem", height: "6rem" }} src={img} />



                    <div className="  flex-fill text-start d-flex flex-column">
                        <h4 className=""><WorkOutlineIcon /> {jobTitle}</h4>
                        <div>
                            <span className=" text-muted"><PlaceIcon /> {address}</span>
                            <span className="ms-2 text-muted"><AccessTimeIcon />{createdtime(created)}</span>
                            <span className="ms-2 text-muted">Rs.{salary} per {period}</span>
                        </div>
                    </div>

                    <div className="me-3  ">

                        <Link className="btn btn-primary btn-warning btn-sm" to={`/jobs/${id}`}>View</Link>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Card