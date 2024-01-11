
function Navbar() {
    return (
        
      <div className="Navbar">
      <nav class="navbar navbar-expand-lg bg-body-tertiary nvco">
        <div class="container-fluid">
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 navlis">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Jobs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Job recruit</a>
              </li>
              </ul>
              </div>
              <a class="navbar-brand" href="/">
                <img src={require("../Assets/img/casgoLogo.png")} class="logo" alt=""/>
              </a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 navlis2">
              
              <li class="nav-item">
                <a class="nav-link" href="#">FAQ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Job recruit</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
        
        
      </div>
       
    );
  }
  
  export default Navbar;