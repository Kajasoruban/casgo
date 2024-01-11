


function Register(){
    return(
        <>
        
        <div class="container2">
        <div class="loginc border border-primary p-2 mb-2 border-opacity-75">
            {/* <!-- Pills navs --> */}
            <ul class="nav nav-pills nav-justified mb-3  spa" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
            <a class="nav-link " id="tab-login" data-mdb-toggle="pill" href="/login" role="tab"
                aria-controls="pills-login" aria-selected="false">Login</a>
            </li>
            <li class="nav-item" role="presentation">
            <a class="nav-link active" id="tab-register" data-mdb-toggle="pill" href="/register" role="tab"
                aria-controls="pills-register" aria-selected="true">Register</a>
            </li>
        </ul>
        {/* <!-- Pills navs --> */}
        
        {/* <!-- Pills content --> */}
            <div class="tab-content">
            <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form action="/api/users/"method="post">
                

                {/* <!-- Username input --> */}
                <div class="form-outline mb-4">
                    <input type="name" id="loginName" name="name" placeholder="                                                                             username" class="form-control" />
                    {/* <!-- <label class="form-label" for="loginName">Email or username</label> --> */}
                </div>

                <div class="form-outline mb-4">
                    <input type="number" id="loginName" name="age"placeholder="                                                                                 age" class="form-control" />
                    {/* <!-- <label class="form-label" for="loginName">Email or username</label> --> */}
                </div>

                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                <input type="email" id="loginName" name="email" placeholder="                                                                                Email" class="form-control" />
                {/* <!-- <label class="form-label" for="loginName">Email or username</label> --> */}
                </div>
        
                {/* <!-- Password input --> */}
                <div class="form-outline mb-4"> 
                <input type="password" id="loginPassword"name="password" placeholder="                                                                             Password"  class="form-control" />
                {/* <!-- <label class="form-label" for="loginPassword">Password</label> --> */}
                </div>
        
                {/* <!-- 2 column grid layout --> */}
                <div class="row mb-4">
                
        
                
                </div>
                {/* <!-- Checkbox --> */}
                <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                    aria-describedby="registerCheckHelpText" />
                    <label class="form-check-label" for="registerCheck">
                    I have read and agree to the terms
                    </label>
                </div>
        
                {/* <!-- Submit button --> */}
                <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary btn-block mb-4  spa2">Register</button>
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

export default Register;