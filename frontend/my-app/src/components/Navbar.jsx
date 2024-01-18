
function Navbar() {
    return (
        
      <div className="Navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary nvco">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 navlis">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Jobs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Job recruit</a>
              </li>
              </ul>
              </div>
              <a className="navbar-brand" href="/">
                <img src={require("../Assets/img/casgoLogo.png")} className="logo" alt=""/>
              </a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 navlis2">
              
              <li className="nav-item">
                <a className="nav-link" href="#">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Job recruit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
        
        
      </div>
       
    );
  }
  
  export default Navbar;