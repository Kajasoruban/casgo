import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { giverProfileAction, notificationsAction, paymentHistoryAction, userProfileAction } from "../redux/actions/userAction";
import { useEffect, useState } from "react";
import LoginModel from "./LoginModel";
import { expireAction } from "../redux/actions/jobAction";
import { toast } from "react-toastify";

function Navbar() {
   const [registered, setRegistered] = useState(false);
   const [pay,setPay]=useState(false);
   const dispatch=useDispatch();
  const { userInfo} = useSelector(state => state.signIn);
  let {userInfoExtra,loading} =useSelector(state => state.userProfile);
  let {notifications} =useSelector(state => state.notifications);

  let read=true
  notifications&&notifications.map((note)=>{
    if(note.read==false){
    // console.log("uread message found");
    read=false
    }
  })
  
  const {paymentHistory} =useSelector(state => state.paymentHistory);
  let data = [];
    data = (paymentHistory !== undefined && paymentHistory.length > 0) ? paymentHistory : []

    useEffect(()=>{
      if(userInfo!==null){
        dispatch(notificationsAction())
      }
     
    },[])
  
  

  let role= userInfoExtra?userInfoExtra.role:"";
  // let endDate="03/07/2024 21:45:00";
  let endDate;
  let currentDate = new Date();

  useEffect(() => {
    let timer;
    if (data.length !== 0) {

      data.map(p => {

        if (p.paymentId.expired === false) {
          // console.log(p.paymentId.EndingTime);
          //  endDate = new Date(endDate);
          endDate = new Date(p.paymentId.EndingTime);
         
          /* Browsers store the delay as a 32-bit signed integer internally. 
          This causes an integer overflow when using delays larger than 2,147,483,647 ms (about 24.8 days),
           resulting in the timeout being executed immediately. */

          // so i put condition to start time out only if expiration time less than 24 hours.

          if ((endDate.getTime() - currentDate.getTime()) < 86400000) {
            // console.log("count down start");
            // console.log(endDate.getTime() - currentDate.getTime());
            timer = setTimeout(() => {

              dispatch(expireAction(p.paymentId._id));
              console.log("expired");
              // console.log(endDate.getTime()-currentDate.getTime());

            }, endDate.getTime() - currentDate.getTime())


          }

          //  if(!(currentDate.getTime()<endDate.getTime())){
          //   console.log("expired");
          //   dispatch(expireAction(p.paymentId._id));
          //  }
        }

        // expireAction 

      })
    }

    return () => {
      clearInterval(timer);
    };


  }, [paymentHistory])
 

   useEffect(() => {
    if(userInfo){
      if(!userInfoExtra){
        dispatch(userProfileAction());
      }
    }
    if (userInfoExtra) {
      if (userInfoExtra.role=="jobRecruit" && !loading) {
        setRegistered(true)
        
      }
    }
    
   
  },[userInfoExtra]);

  

   useEffect(()=>{
  
    registered && !loading && dispatch(giverProfileAction()) && dispatch(paymentHistoryAction())
    
  },[registered])



  





    return (
        
     <>
        <nav className="navbar navbar-expand-md  nvco fixed-top">
          <div className="container rounded-5  innernav">

            <Link className="" to="/">
              <img src={require("../Assets/img/casgoLogo.png")} className="logo" alt="casgo"/>
            </Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            
              <ul className="navbar-nav  mx-auto  mb-2  mb-lg-0 navlis2">
                 
                 <Link className="nav-link mx-5" to="/">
                    Home
                  </Link>

                  {/* <Link className="nav-link mx-5" to="/contact">
                    Contact
                  </Link> */}

                  <Link className="nav-link mx-5" to="/jobs">
                    Jobs
                  </Link>

                  {/* { 
                  !userInfo ? null : userInfo.role==='admin' ? <Link className="nav-link mx-5" to="/admin/dashboard">Dashboard</Link>:null
                  } */}
                  
                  {role==="jobRecruit"?
                 <Link className="nav-link mx-5" to="/pricing">
                    Pricing
                  </Link>
                  :null}
                 

                
                
              </ul>
              {role==="jobRecruit"?
                 <Link className=" jobpost btn " to="/jobPost">
                    Post Job
                  </Link>
                  :null}

              {  !userInfo ? 

                <Link className=" btn btn-warning ms-5" to="/login">Login <i className="bi bi-box-arrow-in-right "></i></Link> 

                :

                <Link className="nav-link ms-5"  to="/profile">
                        
                { loading ?
                  <div className="spinner-border" style={{width: "3rem",height: "3rem"}}>
                      <span className="sr-only"></span>
                  </div>
                        :
                    <>
                    <div className="profilecover">
                      {!read&&<span className="notification"></span>}
                <img src={ !userInfoExtra ?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU":!userInfoExtra.message  ? userInfoExtra.image.url  :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU" } alt="profile pic" style={{ width:"4.5rem", height:"4.5rem", borderRadius:"50%",border:"1px solid black"}} className=""/>
                {/* <p className="text-center small">{userInfo?userInfo.name:"user"}</p>  */}
                   </div>
                    </>   
                }

                </Link>
                              
                              
              }

              
            </div>

          </div>
        </nav>
        <div className="navbott"></div>
         
      </>
       
    );
  }
  
  export default Navbar;