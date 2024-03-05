import React, { useEffect, useState } from 'react'
import "../../Assets/css/Approval.css"
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import { useSelector } from 'react-redux';

function GiverDashBoard() {

    let[money,setMoney]=useState(0)
    let { jobs,  loading } = useSelector(state => state.jobPosted);
    const {paymentHistory} =useSelector(state => state.paymentHistory);

    let data = [];
    data = (paymentHistory !== undefined && paymentHistory.length > 0) ? paymentHistory : [];

    jobs = (jobs !== undefined && jobs.length > 0) ? jobs : [];

    let count=0;
    let applicants= jobs.map((job)=>{
        count=count+job.applicants.length
    })
    // console.log(money);
   useEffect(()=>{
    setMoney(0)
    data.map((p)=>{
        
        setMoney((money)=>p.paymentId.duration=="7" ? money+300 :money+ 1200)
        // console.log(p.paymentId.duration);
    })
   },[paymentHistory])
  


  return (
    <>
    <div className='text-center'>GiverDashBoard</div>

    <div className='row giverDash ms-5 mt-5 '>
        <div className='col-4 border  mx-5 shadow-lg   rounded d-flex'> 
       
           <WorkOutlineIcon color="primary" className='mt-2' sx={{ fontSize: 50 }}/>
           <p className='mt-4 ms-2'>posted jobs: {jobs.length}</p>
            
      
        </div>

        <div className='col-4 border shadow-lg   rounded mx-5 d-flex'> 
       
           <DescriptionIcon color="warning" className='mt-2' sx={{ fontSize: 50 }}/>
           <p className='mt-4 ms-2'>Applications: {count}</p>
      
        </div>

        <div className='col-4 border shadow-lg   rounded mx-5 d-flex'> 
       
           <WorkOutlineIcon color="primary" className='mt-2' sx={{ fontSize: 50 }}/>
           <p className='mt-4 ms-2'>Money Spent: {money}</p>
      
        </div>

    </div>

    </>
  )
}

export default GiverDashBoard