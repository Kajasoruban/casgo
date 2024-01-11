
import { useState } from "react";


function Login (){

    

    return(
        <>
        
        <div class="container2">
        
        <div class="loginc border border-primary p-2 mb-2 border-opacity-75">
    {/* <!-- Pills navs --> */}
   <ul class="nav nav-pills nav-justified mb-3  spa" id="ex1" role="tablist">
    <li class="nav-item" role="presentation">
      <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="/login" role="tab"
        aria-controls="pills-login" aria-selected="true">Login</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="/register" role="tab"
        aria-controls="pills-register" aria-selected="false">Register</a>
    </li>
  </ul>
  {/* <!-- Pills navs --> */}
  
  {/* <!-- Pills content --> */}
  <div class="tab-content">
    <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
      <form action="/api/users/login"method="post">
       
  
        {/* <!-- Email input --> */}
        <div class="form-outline mb-4">
          <input type="email" id="loginName" placeholder="                                                                           Email" class="form-control" />
          {/* <!-- <label class="form-label" for="loginName">Email or username</label> --> */}
        </div>
  
        {/* <!-- Password input --> */}
        <div class="form-outline mb-4"> 
          <input type="password" id="loginPassword" placeholder="                                                                        Password"  class="form-control" />
          {/* <!-- <label class="form-label" for="loginPassword">Password</label> --> */}
        </div>
  
        {/* <!-- 2 column grid layout --> */}
        <div class="row mb-4">
          <div class="col-md-6 d-flex justify-content-center">
            {/* <!-- Checkbox --> */}
            <div class="form-check mb-3 mb-md-0">
              <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
              <label class="form-check-label" for="loginCheck"> Remember me </label>
            </div>
          </div>
  
          <div class="col-md-6 d-flex justify-content-center">
            {/* <!-- Simple link --> */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>
  
        {/* <!-- Submit button --> */}
        <div class="d-grid gap-2">
        <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button></div>
  
        {/* <!-- Register buttons --> */}
        <div class="text-center spa2">
          <p>Not a member? <a href="#!">Register</a></p>
        </div>
      </form>
    </div>
    
    
  </div>
</div>
  {/* <!-- Pills content --> */}
    </div>

    <div class="space"></div>
        
        
        </>
    )
}

export default Login;