import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { jobStatusAction } from '../redux/actions/jobAction';

function Card2({ jobTitle, description, closingTime, address,salary, id ,img,active,setDisable,disable}) {

    const dispatch =useDispatch();

    const handle=()=>{

        dispatch(jobStatusAction(id,active))
        // setDisable(!disable)
        
    }
    
  return (
    <>
    {/* <div className='col-4'>
    <div className="card" style={{width: "18rem",height:"20rem"}}>
    <img src={img} className="card-img-top" width="8rem" height="200px"alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{jobTitle}</h5>
        <p className="card-text">{closingTime}</p>
        <a href="/jobDetails" className="btn btn-primary">view</a> <br/>
        
    </div>
    </div>
    </div> */}
      
        <section className="search-result-item border border-success">
            <a className="image-link" href="#"><img className="image" src={img}/>
            </a>
            <div className="search-result-item-body">
                <div className="row">
                    <div className="col-sm-9">
                        <h4 className="search-result-item-heading">{jobTitle}</h4>
                        <p className="info">{address}</p>
                        <p className="description">{description}</p>
                    </div>
                    <div className="col-sm-3 text-align-center">
                        <p className="value3 mt-sm">Rs.{salary}</p>
                        <p className="fs-mini text-muted">PER</p><Link className="btn btn-primary btn-warning btn-sm" to={`/jobgiver/jobPosted/${id}/applicants`}>Show Applications</Link>
                        <br/><br/>
                        <button className={`btn ${active?"btn-danger":"btn-success"}`} onClick={handle} >{active?"Disable":"Enable"}</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Card2