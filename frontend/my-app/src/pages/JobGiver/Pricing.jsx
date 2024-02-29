import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import "../../Assets/css/Approval.css"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BalanceIcon from '@mui/icons-material/Balance';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Pricing = () => {
  const[active,setActive]=useState(false)
  const[active2,setActive2]=useState(false)
  const[btnDis,setbtnDis]=useState(false)
  const {paymentHistory} =useSelector(state => state.paymentHistory);
  let data = [];
    data = (paymentHistory !== undefined && paymentHistory.length > 0) ? paymentHistory : []


    useEffect(()=>{
      
      if(data.length!==0){

      data.map(p=>{
        
        if(p.paymentId.duration==7 && p.paymentId.expired===false){
          setActive(true)
        }
        if(p.paymentId.duration==30 && p.paymentId.expired===false){
          setActive2(true)
        }
        
        
      })}


    },[paymentHistory])
     



  const checkOut =(plan)=>{
    console.log(plan);
    axios.post(`/api/stripe/create-checkout-session`,{plan:plan})
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err));
  }


  return (
    <>
    <Navbar/>
    
    {/* <div className='price'>
    <div className='display-4 text-center mt-5'>Pricing and Payment</div>

    <div className='container  package row  px-5'>
        <div className='col-5 border border-primary text-center me-5 rounded'>
          <p className='display-6 mt-5'>Starter</p><br/><br/><br/>
          <span className='fs-2 lead '>Rs.300.00</span><br/><br/><br/>
          <span className='fs-3 fw-bold lead '>7 Days</span><br/>
          <button className='mt-5 btn btn-success px-5 py-2'onClick={()=>checkOut(1)}>Buy</button>
        </div>
        <div className='col-5 border border-primary text-center ms-5 rounded'>
        <p className='display-6 mt-5'>Premium</p><br/><br/><br/>
        <span className='fs-2 lead '>Rs.1200.00</span><br/><br/><br/>
        <span className='fs-3 fw-bold lead '>30 Days</span><br/>
        <button className='mt-5 btn btn-success px-5 py-2'onClick={()=>checkOut(2)} >Buy</button>
        </div>

    </div>

    </div> */}
  <div className='display-5 text-center mt-5'>Pricing and Payment</div>
  <div className='container my-5'>
  <div className="row mx-0 gy-3 px-lg-5">
        
        <div className={`col-lg-5 mb-md-0 mb-4 ms-5`}>
          <div className={`card border rounded shadow-none  ${active&& " border-primary"}`}>
            <div className="card-body">
              <div className="my-3 pt-2 text-center">
              <BalanceIcon color="primary" sx={{ fontSize: 50 }}/>
              </div>
              <h3 className="card-title text-center text-capitalize mb-5">Starter</h3>
              <p className="text-center fs-4">A simple start for everyone</p>
              <div className="text-center">
                <div className="d-flex justify-content-center">
                 
                  <h1 className="display-4 mb-0 text-primary">Rs.300.00</h1> 
                  
                </div>
                <p className="h4 pricing-duration my-5 mb-2 text-muted fw-bold">7 Days</p>
                
              </div>

              {/* <ul className="ps-3 my-4 list-unstyled">
                <li className="mb-2"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> 100 responses a month</li>
                <li className="mb-2"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> Unlimited forms and surveys</li>
                <li className="mb-2"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> Unlimited fields</li>
                <li className="mb-2"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> Basic form creation tools</li>
                <li className="mb-0"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> Up to 2 subdomains</li>
              </ul> */}

              {/* <a href="auth-register-basic.html" className="btn btn-label-success d-grid w-100">Your Current Plan</a> */}
              
              {active?<div className='d-grid w-100'><button className='btn btn-success w-40 buy'>Active</button>
             <Link className="btn btn-success w-40 jobpost2 my-2" to="/jobPost">Post Job</Link></div>:
             <button className='btn btn-success d-grid w-100' onClick={()=>checkOut(1)} disabled={(active==active2)?false:true} >Buy</button>}

            </div>
          </div>
        </div>

        
        <div className="col-lg-5 mb-md-0 mb-4 ms-5">
          <div className={`card  border shadow-none ${active2&& " border-primary shadow"}`}>
            <div className="card-body position-relative">
              <div className="position-absolute end-0 me-4 top-0 mt-4">
                <span className="badge bg-label-primary">Premium</span>
              </div>
              <div className="my-3 pt-2 text-center">
                <WorkspacePremiumIcon color="primary" sx={{ fontSize: 50 }}/>
              </div>
              <h3 className="card-title text-center text-capitalize mb-5">Premium</h3>
              <p className="text-center fs-4">Let's make it easy for you</p>
              <div className="text-center">
                <div className="d-flex justify-content-center">
                 
                  <h1 className="display-4 mb-0 text-primary">Rs.1200.00</h1> 
                  
                </div>
                <p className="h4 pricing-duration my-5 mb-2 text-muted fw-bold">30 Days</p>
                
              </div>

              {/* <ul className="ps-3 my-4 list-unstyled">
                <li className="mb-2"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> Up to 5 users</li>
                <li className="mb-2"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> 120+ components</li>
                <li className="mb-2"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> Basic support on Github</li>
                <li className="mb-2"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> Monthly updates</li>
                <li className="mb-0"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> Integrations</li>
              </ul> */}

             {active2?<div className='d-grid w-100'><button className='btn btn-success w-40 buy'>Active</button>
             <Link className="btn btn-success w-40 jobpost2 my-2" to="/jobPost">Post Job</Link></div>:
             <button className='btn btn-success d-grid w-100' onClick={()=>checkOut(2)} disabled={(active==active2)?false:true} >Buy</button>}

            </div>
          </div>
        </div>

        
        {/* <div className="col-lg">
          <div className="card border rounded shadow-none">
            <div className="card-body">

              <div className="my-3 pt-2 text-center">
                <img src="../../assets/img/icons/unicons/briefcase-round.png" alt="Pro Image" height="80"/>
              </div>
              <h3 className="card-title text-center text-capitalize mb-1">Enterprise</h3>
              <p className="text-center">Solution for big organizations</p>

              <div className="text-center">
                <div className="d-flex justify-content-center">
                  <sup className="h6 text-primary pricing-currency mt-3 mb-0 me-1">$</sup>
                  <h1 className="price-toggle price-yearly display-4 text-primary mb-0">84</h1>
                  <h1 className="price-toggle price-monthly display-4 text-primary mb-0 d-none">99</h1>
                  <sub className="h6 pricing-duration mt-auto mb-2 fw-normal text-muted">/month</sub>
                </div>
                <small className="price-yearly price-yearly-toggle text-muted">$ 999 / year</small>
              </div>

              <ul className="ps-3 my-4 list-unstyled">
                <li className="mb-2"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> Up to 10 users</li>
                <li className="mb-2"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> 150+ components</li>
                <li className="mb-2"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> Basic support on Github</li>
                <li className="mb-2"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> Monthly updates</li>
                <li className="mb-0"><span className="badge badge-center w-px-20 h-px-20 rounded-pill bg-label-primary me-2"><i className="bx bx-check bx-xs"></i></span> Speedy build tooling</li>
              </ul>

              <a href="auth-register-basic.html" className="btn btn-label-primary d-grid w-100">Upgrade</a>
            </div>
          </div>
        </div> */}
      </div>
      </div>
    
    <Footer/>
    </>
  )
}

export default Pricing