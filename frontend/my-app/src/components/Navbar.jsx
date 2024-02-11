import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userProfileAction } from "../redux/actions/userAction";
import { useEffect, useState } from "react";
import LoginModel from "./LoginModel";

function Navbar() {

   const dispatch=useDispatch();
   const[no,setNo]=useState(0);
  const { userInfo ,loading} = useSelector(state => state.signIn);


  // const profile =()=>{
  //   dispatch(userProfileAction())
  // }

 

  const {userInfoExtra} =useSelector(state => state.userProfile);

   useEffect(() => {
    if(userInfo){
      if(!userInfoExtra){
        dispatch(userProfileAction());
      }
    }
    
   
  },[userInfoExtra]);

    return (
        
     <>
        <nav className="navbar navbar-expand-md bg-body-tertiary nvco fixed-top">
          <div className="container">

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

                  <Link className="nav-link mx-5" to="/contact">
                    Contact
                  </Link>

                  <Link className="nav-link mx-5" to="/jobs">
                    Jobs
                  </Link>

                  { 
                  !userInfo ? null : userInfo.role==='admin' ? <Link className="nav-link mx-5" to="/job">Dashboard</Link>:null
                  }
                  
                  
                 

                
                
              </ul>
              <Link className=" jobpost btn " to="/jobPost">
                    Post Job
                  </Link>

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
                <img src={ !userInfoExtra ?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU":!userInfoExtra.message  ? userInfoExtra.image.url  :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU" } alt="profile pic" style={{ width:"4rem", height:"4rem", borderRadius:"50%"}} />
                <p className="text-center small">{userInfo?userInfo.name:"user"}</p> 
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