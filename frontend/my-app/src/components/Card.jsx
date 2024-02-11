import React from 'react'

function Card({ jobTitle, description, closingTime, address, id ,img}) {
  return (
    <>
    <div className='col-4'>
    <div className="card" style={{width: "18rem",height:"20rem"}}>
    <img src={img} className="card-img-top" width="8rem" height="200px"alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{jobTitle}</h5>
        <p className="card-text">{closingTime}</p>
        <a href="/jobDetails" className="btn btn-primary">view</a> <br/>
        {/* <small>{closingTime}</small> */}
    </div>
    </div>
    </div>
    </>
  )
}

export default Card