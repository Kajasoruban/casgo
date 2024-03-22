import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function JobGiverRoutes({ children }) {


    const { userInfoExtra } = useSelector((state) => state.userProfile);
    let authorised =false;
    if(userInfoExtra){
        if(userInfoExtra.role==="jobRecruit"){
            authorised=true;
        }
        
    }
    
    
  return  authorised ? children : <Navigate to="/" />;
}

export default JobGiverRoutes