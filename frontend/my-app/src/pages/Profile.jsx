import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "../Assets/css/Approval.css"

function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo,loading } = useSelector(state => state.signIn);
    const {userInfoExtra} =useSelector(state => state.userProfile);



    
  return (
    <>
          

            
          {/* <div className="container py-5">


              <div className="row">
                  
                  <div className="col-lg-8">
                      <div className="card mb-4">
                          <div className="card-body">
                              <div className="row">
                                  <div className="col-sm-3">
                                      <p className="mb-0">Name</p>
                                  </div>
                                  <div className="col-sm-9">
                                      <p className="text-muted mb-0">{userInfo ? userInfo.name : "name"}</p>
                                  </div>
                              </div>
                              <hr />
                              <div className="row">
                                  <div className="col-sm-3">
                                      <p className="mb-0">Email</p>
                                  </div>
                                  <div className="col-sm-9">
                                      <p className="text-muted mb-0">{userInfo ? userInfo.email : "email"}</p>
                                  </div>
                              </div>

                              {

                                  !userInfoExtra.message ?
                                      <>

                                          {
                                              userInfoExtra.role === "jobSeeker" ?
                                                  <>
                                                      <hr />
                                                      <div className="row">
                                                          <div className="col-sm-3">
                                                              <p className="mb-0">age</p>
                                                          </div>
                                                          <div className="col-sm-9">
                                                              <p className="text-muted mb-0">{userInfoExtra ? userInfoExtra.age : "100"}</p>
                                                          </div>
                                                      </div>
                                                      <hr />
                                                      <div className="row">
                                                          <div className="col-sm-3">
                                                              <p className="mb-0">gender</p>
                                                          </div>
                                                          <div className="col-sm-9">
                                                              <p className="text-muted mb-0">{userInfoExtra ? userInfoExtra.gender : "null"}</p>
                                                          </div>
                                                      </div>
                                                  </>
                                                  : <>
                                                      <hr />
                                                      <div className="row">
                                                          <div className="col-sm-3">
                                                              <p className="mb-0">Organization</p>
                                                          </div>
                                                          <div className="col-sm-9">
                                                              <p className="text-muted mb-0">{userInfoExtra ? userInfoExtra.nameOfOrganization : "vip"}</p>
                                                          </div>
                                                      </div>
                                                  </>}


                                          <hr />
                                          <div className="row">
                                              <div className="col-sm-3">
                                                  <p className="mb-0">Phone</p>
                                              </div>
                                              <div className="col-sm-9">
                                                  <p className="text-muted mb-0">{userInfoExtra ? userInfoExtra.contactNo : "00000000"}</p>
                                              </div>
                                          </div>
                                          <hr />

                                          <div className="row">
                                              <div className="col-sm-3">
                                                  <p className="mb-0">Address</p>
                                              </div>
                                              <div className="col-sm-9">
                                                  <p className="text-muted mb-0">{userInfoExtra ? userInfoExtra.address : "dubai road cross street"}</p>
                                              </div>
                                          </div>

                                      </> : null

                              }

                          </div>
                      </div>

                  </div>
              </div>
          </div> */}

          {/* <div className="border border-danger profileh"> */}
              <div className="row profileh">
                  <div className="col-12">
                      {/* <!-- Page title --> */}
                      <div className="my-2">
                          <h3>My Profile</h3>
                          <hr/>
                      </div>
                      {/* <!-- Form START --> */}
                      <form className="file-upload">
                          <div className="row mb-5 gx-5">
                              {/* <!-- Upload profile --> */}
                              <div className="col-xxl-4">
                                  <div className="bg-secondary-soft px-4 py-2 rounded">
                                      <div className="row g-1">
                                          <h4 className="mb-1 mt-0">Profile photo</h4>
                                          <div className="text-center">
                                              {/* <!-- Image upload --> */}
                                              <div className="square position-relative display-2 mb-3">
                                                  <img src={userInfoExtra && !userInfoExtra.message ? userInfoExtra.image.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU"}/>
                                              </div>
                                              {/* <!-- Button --> */}
                                              <input type="file" id="customFile" className='form-control' name="file" hidden=""/>
                                                  <label className="btn btn-success-soft btn-block my-2" for="customFile">Change</label>
                                                  {/* <button type="button" className="btn btn-danger-soft">Remove</button> */}
                                                  {/* <!-- Content --> */}
                                                  {/* <p className="text-muted mt-3 mb-0"><span className="me-1">Note:</span>Minimum size 300px x 300px</p> */}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              {/* <!-- Contact detail --> */}
                              <div className="col-xxl-8 mb-5 mb-xxl-0">
                                  <div className="bg-secondary-soft px-4 py-5 rounded">
                                      <div className="row g-3">
                                          <h4 className="mb-4 mt-0">Account detail</h4>
                                          
                                          {/* <!-- First Name --> */}
                                          <div className="col-md-6">
                                              <label className="form-label">User Name *</label>
                                              <input type="text" className="form-control" placeholder="" aria-label="First name" value={userInfo ? userInfo.name : "name"}/>
                                          </div>
                                          {/* <!-- Email --> */}
                                          <div className="col-md-6">
                                              <label for="inputEmail4" className="form-label">Email *</label>
                                              <input type="email" className="form-control" id="inputEmail4" value={userInfo ? userInfo.email : "email"}/>
                                          </div>
                                          {/* <!-- Last name --> */}
                                          
                                          
                                          {!userInfoExtra.message ?
                                                <>

                                                    {
                                                        userInfoExtra.role === "jobSeeker" ?
                                                            <>
                                                                
                                                                <div className="col-md-6">
                                                                    <label className="form-label">Age *</label>
                                                                    <input type="text" className="form-control" placeholder="" aria-label="Last name" value={userInfoExtra ? userInfoExtra.age : "100"}/>
                                                                </div>
                                                               
                                                                <div className="col-md-6">
                                                                    <label className="form-label">Gender *</label>
                                                                    <input type="text" className="form-control" placeholder="" aria-label="Last name" value={userInfoExtra ? userInfoExtra.gender : "null"}/>
                                                                </div>
                                                                
                                                            </>
                                                            : <>
                                                                {/* <!-- organization --> */}
                                                                <div className="col-md-6">
                                                                    <label className="form-label">Organization *</label>
                                                                    <input type="text" className="form-control" placeholder="" aria-label="Phone number" value={userInfoExtra ? userInfoExtra.nameOfOrganization : "vip"}/>
                                                                </div>
                                                            </>}

                                                     {/* <!-- Phone number --> */}
                                          <div className="col-md-6">
                                              <label className="form-label">Phone number *</label>
                                              <input type="text" className="form-control" placeholder="" aria-label="Phone number" value={userInfoExtra ? userInfoExtra.contactNo : "00000000"}/>
                                          </div>
                                                  
                                                    {/* <!-- address --> */}
                                          <div className="col-md-6">
                                              <label className="form-label">Address *</label>
                                              <input type="text" className="form-control" placeholder="" aria-label="Phone number" value={userInfoExtra ? userInfoExtra.address : "dubai road cross street"}/>
                                          </div>

                                                </> : null

                                            }
                                          {/* <div className="col-md-6">
                                              <label className="form-label">Last Name *</label>
                                              <input type="text" className="form-control" placeholder="" aria-label="Last name" value="Doe"/>
                                          </div> */}
                                        
                                      </div> 
                                      {/* <!-- Row END --> */}
                                  </div>
                              </div>
                              
                          </div>
                           {/* <!-- Row END --> */}
                           

                          {/* <!-- Social media detail --> */}
                          <div className="row mb-5 gx-5">
                              {/* <div className="col-xxl-6 mb-5 mb-xxl-0">
                                  <div className="bg-secondary-soft px-4 py-5 rounded">
                                      <div className="row g-3">
                                          <h4 className="mb-4 mt-0">Social media detail</h4>
                                          
                                          <div className="col-md-6">
                                              <label className="form-label"><i className="fab fa-fw fa-facebook me-2 text-facebook"></i>Facebook *</label>
                                              <input type="text" className="form-control" placeholder="" aria-label="Facebook" value="http://www.facebook.com"/>
                                          </div>
                                         
                                          <div className="col-md-6">
                                              <label className="form-label"><i className="fab fa-fw fa-twitter text-twitter me-2"></i>Twitter *</label>
                                              <input type="text" className="form-control" placeholder="" aria-label="Twitter" value="http://www.twitter.com"/>
                                          </div>
                                          
                                          <div className="col-md-6">
                                              <label className="form-label"><i className="fab fa-fw fa-linkedin-in text-linkedin me-2"></i>Linkedin *</label>
                                              <input type="text" className="form-control" placeholder="" aria-label="Linkedin" value="http://www.linkedin.com"/>
                                          </div>
                                        
                                          <div className="col-md-6">
                                              <label className="form-label"><i className="fab fa-fw fa-instagram text-instagram me-2"></i>Instagram *</label>
                                              <input type="text" className="form-control" placeholder="" aria-label="Instragram" value="http://www.instragram.com"/>
                                          </div>
                                        
                                        
                                      </div> 
                                    
                                  </div>
                              </div> */}

                              {/* <!-- change password --> */}
                              <div className="col-xxl-6">
                                  <div className="bg-secondary-soft px-4 py-5 rounded">
                                      <div className="row g-3">
                                          <h4 className="my-4">Change Password</h4>
                                          
                                          <div className="col-md-6">
                                              <label for="exampleInputPassword1" className="form-label">Old password *</label>
                                              <input type="password" className="form-control" id="exampleInputPassword1"/>
                                          </div>
                                          
                                          <div className="col-md-6">
                                              <label for="exampleInputPassword2" className="form-label">New password *</label>
                                              <input type="password" className="form-control" id="exampleInputPassword2"/>
                                          </div>
                                         
                                          <div className="col-md-12">
                                              <label for="exampleInputPassword3" className="form-label">Confirm Password *</label>
                                              <input type="password" className="form-control" id="exampleInputPassword3"/>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div> 
                          {/* <!-- Row END --> */}
                          {/* <!-- button --> */}
                          <div className="m-3">
                              <button type="button" className="btn btn-primary btn-lg">Update profile</button>
                          </div>
                      </form> 
                      {/* <!-- Form END --> */}
                  </div>
              </div>
          {/* </div> */}
            



    

    </>
  )
}

export default Profile