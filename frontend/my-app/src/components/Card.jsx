import React from 'react'

function Card({ jobTitle, description, closingTime, location, id }) {
  return (
    <>
    
    <div className="card" style={{width: "18rem"}}>
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{jobTitle}</h5>
        <p className="card-text">{description}</p>
        <a href="/jobDetails" className="btn btn-primary">view</a>
    </div>
    </div>
    
    </>
  )
}

export default Card