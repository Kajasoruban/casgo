import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {


  const { userInfo } = useSelector(state => state.signIn);




    return (
        
      <div className="Navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary nvco">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 navlis">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Jobs</a>
              </li>
              
              </ul> */}
              
              

              <Link className="nav-link" to="/">
              <img src={require("../Assets/img/casgoLogo.png")} className="logo" alt=""/>
                </Link>
              
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navlis2">
              
              {/* <Link className="nav-link"to="/faq">
                FAQ
                </Link> */}
              
              {  !userInfo ? 
              <Link className="btn  btn-warning" to="/login">
                Login <i className="bi bi-box-arrow-in-right h2"></i> 
                </Link>
                                
                              
                              :

                              <Link className="nav-link" to="/profile">
                              <i className="bi bi-person-circle h1  "></i>
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