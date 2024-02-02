import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userProfileAction } from "../redux/actions/userAction";
import { useEffect } from "react";
import LoginModel from "./LoginModel";

function Navbar() {

   const dispatch=useDispatch();

  const { userInfo } = useSelector(state => state.signIn);


  // const profile =()=>{
  //   dispatch(userProfileAction())
  // }

  useEffect(() => {
    dispatch(userProfileAction());
  },[]);

  const {user} =useSelector(state => state.userProfile);

    return (
        
      <div className="Navbar">
      <nav className="navbar navbar-expand-md bg-body-tertiary nvco">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navlis">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Jobs</a>
              </li> */}
               <Link className="nav-item" to="/">
              <img src={require("../Assets/img/casgoLogo.png")} className="logo" alt=""/>
                </Link>
              
              </ul>
              
              
             
             
              
            <ul className="navbar-nav  ms-auto  mb-2  mb-lg-0 navlis2">
              
              {/* <Link className="nav-link"to="/faq">
                FAQ
                </Link> */}
              
              {  !userInfo ? 
              // <Link className="btn  btn-warning" to="/login">
              //   Login <i className="bi bi-box-arrow-in-right h3"></i> 
              //   </Link>
               <>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Login
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <LoginModel/>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

                </>
              
                                
                              
                              :

                              <Link className="nav-link" to="/profile">
                              {/* <i className="bi bi-person-circle h1  "></i> */}
                              <img src={ user?user[1].image.url  :"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"  } alt="" style={{width:"5rem",height:"5rem",borderRadius:"50%"}} />
                              <p className="small">{userInfo?userInfo.name:"user"}</p>
                              </Link>
                              
                              
                            }
              

              
              
            </ul>
            
          </div>
        </div>
      </nav>
        
        
      </div>
       
    );
  }
  
  export default Navbar;