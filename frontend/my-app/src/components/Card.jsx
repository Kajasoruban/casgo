import React from 'react'

function Card({ jobTitle, description, closingTime, location, id ,img}) {
  return (
    <>
    <div className='col-4'>
    <div className="card" style={{width: "18rem"}}>
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{jobTitle}</h5>
        <p className="card-text">{description}</p>
        <a href="/jobDetails" className="btn btn-primary">view</a>
    </div>
    </div>
    </div>
    </>
  )
}

export default Card