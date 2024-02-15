import React from 'react'
import { Link } from 'react-router-dom'

function Card3({ jobTitle, description, closingTime, address,salary, id ,img,status,organization}) {
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

        <section className="search-result-item">
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
                        <p>company:{organization}</p>
                        <p className="value3 mt-sm">Rs.{salary}</p>
                        <p className="fs-mini text-muted">Closing:{closingTime}</p><Link className="btn btn-primary btn-warning btn-sm" to={`/status`}>{status}</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Card3