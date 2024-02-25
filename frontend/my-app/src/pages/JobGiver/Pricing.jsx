import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import "../../Assets/css/Approval.css"
import axios from 'axios'
const Pricing = () => {


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
    
    <div className='price'>
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

    </div>
    
    <Footer/>
    </>
  )
}

export default Pricing