import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction, userProfileAction } from '../redux/actions/userAction';
import { useEffect } from 'react';

function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo,loading } = useSelector(state => state.signIn);
    const {userInfoExtra} =useSelector(state => state.userProfile);
     
    // console.log(userInfoExtra);
    
    console.log(userInfoExtra.message)
     
//    useEffect(() => {
//     dispatch(userProfileAction());
//   },[]);


    

    

    const logOutUser = () => {
        dispatch(userLogoutAction());
        
       
            
        
        window.location.reload(true);
    }



  return (
    <>
          

            
          <div className="container py-5">


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
          </div>
            



    

    </>
  )
}

export default Profile