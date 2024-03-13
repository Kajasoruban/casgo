import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, menuClasses, useProSidebar } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HomeIcon from '@mui/icons-material/Home';
import { Box, useTheme } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Person3Icon from '@mui/icons-material/Person3';
import Avatar from '@mui/material/Avatar';
import HowToRegIcon from '@mui/icons-material/HowToReg';
// import logoDashboard from ''
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { giverProfileAction, notificationsAction, paymentHistoryAction, userLogoutAction, userProfileAction } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { expireAction, jobPostedAction } from '../../redux/actions/jobAction';
import { toast } from 'react-toastify';


const SideBar = () => {
    const [registered, setRegistered] = useState(false);
    const { userInfo } = useSelector(state => state.signIn);
    const { palette } = useTheme();
    const { collapsed } = useProSidebar();
    let {userInfoExtra,loading} =useSelector(state => state.userProfile);
    let {notifications} =useSelector(state => state.notifications);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {paymentHistory} =useSelector(state => state.paymentHistory);
    let data = [];
      data = (paymentHistory !== undefined && paymentHistory.length > 0) ? paymentHistory : []

      let read=true
        notifications&&notifications.map((note)=>{
            if(note.read==false){
            // console.log("uread message found");
            read=false
            }
        })

    useEffect(() => {
        if(userInfo){
          if(!userInfoExtra){
            dispatch(userProfileAction());
          }
        }
        if (userInfoExtra) {
          if (userInfoExtra.role=="jobRecruit" && !loading) {
            setRegistered(true)
            
          }
        }
        
       
      },[userInfoExtra]);

      useEffect(() => {
        dispatch(jobPostedAction())
        dispatch(notificationsAction())
        // console.log(disable);
    }, []);
   
    useEffect(()=>{
  
        registered && !loading && dispatch(giverProfileAction()) && dispatch(paymentHistoryAction())
        
      },[registered])

    //   let role= userInfoExtra?userInfoExtra.role:"";
    // let endDate="03/07/2024 21:45:00";
    let endDate;
    let currentDate = new Date();

    useEffect(() => {
        let timer;
        if (data.length !== 0) {

        data.map(p => {

            if (p.paymentId.expired === false) {
            // console.log(p.paymentId.EndingTime);
            //  endDate = new Date(endDate);
            endDate = new Date(p.paymentId.EndingTime);

            /* Browsers store the delay as a 32-bit signed integer internally. 
            This causes an integer overflow when using delays larger than 2,147,483,647 ms (about 24.8 days),
            resulting in the timeout being executed immediately. */

            // so i put condition to start time out only if expiration time less than 24 hours.

            if ((endDate.getTime() - currentDate.getTime()) < 86400000) {
                // console.log("count down start");
                timer = setTimeout(() => {

                dispatch(expireAction(p.paymentId._id));
                console.log("expired");
                // console.log(endDate.getTime()-currentDate.getTime());

                }, endDate.getTime() - currentDate.getTime())


            }

            //  if(!(currentDate.getTime()<endDate.getTime())){
            //   console.log("expired");
            //   dispatch(expireAction(p.paymentId._id));
            //  }
            }

            // expireAction 

        })
        }

        return () => {
        clearInterval(timer);
        };


    }, [paymentHistory])

   

    

       //log out 
    const logOut = () => {
        dispatch(userLogoutAction());
        window.location.reload(true);
        
    }


    return (
        <>
            <Sidebar backgroundColor="#F5F0DE" style={{ borderRightStyle: "none" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%" }}>
                    <Box>
                        <Box sx={{ pt: 3, pb: 5, display: "flex", justifyContent: "center" }}>

                            {
                                collapsed ?
                                    <Avatar alt="logo dashboard" src={ !userInfoExtra ?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU":!userInfoExtra.message  ? userInfoExtra.image.url  :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU"} /> :
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <img style={{ width: "150px", heigth: "150px", textAlign: "center", transition: "all ease-out .5s", borderRadius:"50%" }} src={ !userInfoExtra ?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU":!userInfoExtra.message  ? userInfoExtra.image.url  :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU"} alt="logo dashboard" />
                                    </Box>
                            }

                        </Box>

                        <Menu

                            menuItemStyles={{


                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: "#2b580c",
                                    },
                                    [`&.${menuClasses.disabled}`]: {
                                        color: "#2b580c",
                                    },
                                    '&:hover': {
                                        backgroundColor: " rgba(240, 192, 1, 0.5)",
                                        color: "#2b580c",
                                    },
                                },

                                icon: {
                                    [`&.${menuClasses.icon}`]: {
                                        color: "#2b580c",
                                        
                                    }
                                },
                            }}

                        >
                            {
                                userInfo && userInfo.role === "admin" ?
                                    <>  <MenuItem component={<Link to="/profile" />} icon={<Person3Icon />}> Personal Info </MenuItem>
                                        <MenuItem component={<Link to="/admin/dashboard" />} icon={<DashboardIcon />}> Dashboard </MenuItem>
                                        <MenuItem component={<Link to="/admin/allusers" />} icon={<GroupAddIcon />}> Users </MenuItem>
                                        <MenuItem component={<Link to="/admin/approval" />} icon={<HowToRegIcon />}> Verification </MenuItem>
                                        <MenuItem component={<Link to="/admin/alljobs" />} icon={<WorkIcon />}> Jobs </MenuItem>
                                        <MenuItem component={<Link to="/notifications" />} icon={<NotificationsIcon />}sx={{position:"relative"}} > Notifications {!read&&<span className='notification2'></span>}</MenuItem>
                                        <MenuItem component={<Link to="/" />} icon={<HomeIcon />}> Back to Home </MenuItem>
                                    </> :userInfoExtra && userInfoExtra.role === "jobRecruit"?
                                    <>
                                        <MenuItem component={<Link to="/profile" />} icon={<Person3Icon />}> Personal Info </MenuItem>
                                        <MenuItem component={<Link to="/jobgiver/dashboard" />} icon={<DashboardIcon />}> Dashboard </MenuItem>
                                        <MenuItem component={<Link to="/jobgiver/jobPosted" />} icon={<WorkHistoryIcon />}> Jobs Posted</MenuItem>
                                        <MenuItem component={<Link to="/jobgiver/paymentHistory" />} icon={<ScheduleIcon />}> Payment History</MenuItem>
                                        <MenuItem component={<Link to="/notifications" />} icon={<NotificationsIcon />} sx={{position:"relative"}} > Notifications {!read&&<span className='notification2'></span>}</MenuItem>
                                        <MenuItem component={<Link to="/" />} icon={<HomeIcon />}> Back to Home </MenuItem>
                                        
                                    </>:
                                    <>
                                    <MenuItem component={<Link to="/profile" />} icon={<Person3Icon />}> Personal Info </MenuItem>
                                    <MenuItem component={<Link to="/user/dashboard" />} icon={<DashboardIcon />}> Dashboard </MenuItem>
                                    <MenuItem component={<Link to="/jobseeker/appliedjobs" />} icon={<WorkHistoryIcon />}> Applied Jobs </MenuItem>
                                    <MenuItem component={<Link to="/notifications" />} icon={<NotificationsIcon />} sx={{position:"relative"}} > Notifications {!read&&<span className='notification2'></span>}</MenuItem>
                                    <MenuItem component={<Link to="/" />} icon={<HomeIcon />}> Back to Home </MenuItem>
                                    
                                </>
                            }

                        </Menu>
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        <Menu
                            menuItemStyles={{


                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: "#fafafa",
                                    },

                                    '&:hover': {
                                        backgroundColor: "rgba(240, 192, 1, 0.5)",
                                        color: "#fafafa",
                                    },
                                },

                                icon: {
                                    [`&.${menuClasses.icon}`]: {
                                        color: "#2b580c",
                                       
                                    }
                                },
                            }}
                        >
                            <MenuItem onClick={logOut} icon={<LoginIcon />} style={{color: "#2b580c"}}>   Log out </MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Sidebar>
        </>
    )
}

export default SideBar