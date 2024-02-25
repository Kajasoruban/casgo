import React from 'react'
import { Link } from 'react-router-dom'

function Success() {
  return (
    <>

       <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="message-box _success">
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <h2> Your payment was successful </h2>
                        <p> Thank you for your payment. Now you can continue  </p> 
        <Link className='btn btn-success my-5' to="/" >Go back to Home</Link>     
                    </div> 
                </div> 
            </div> 
            
            {/* <hr/> */}
        
        
        
        
        </div> 
    
    </>
  )
}

export default Success