import React, { useEffect } from 'react'
import { Sidebar, Menu, MenuItem, menuClasses, useProSidebar } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HomeIcon from '@mui/icons-material/Home';
import { Box, useTheme } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Person3Icon from '@mui/icons-material/Person3';
import Avatar from '@mui/material/Avatar';
// import logoDashboard from ''
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction, userProfileAction } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';


const SideBar = () => {
    const { userInfo } = useSelector(state => state.signIn);
    const { palette } = useTheme();
    const { collapsed } = useProSidebar();
    const {userInfoExtra} =useSelector(state => state.userProfile);

    const dispatch = useDispatch();
    const navigate = useNavigate();

   

    //log out 
    const logOut = () => {
        dispatch(userLogoutAction());
        window.location.reload(true);
        
    }


    return (
        <>
            <Sidebar backgroundColor="#ded8c5" style={{ borderRightStyle: "none" }}>
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
                                        <MenuItem component={<Link to="/admin/alljobs" />} icon={<WorkIcon />}> Jobs </MenuItem>
                                        {/* <MenuItem component={<Link to="/admin/category" />} icon={<CategoryIcon />}> Category </MenuItem> */}
                                        <MenuItem component={<Link to="/" />} icon={<HomeIcon />}> Back to Home </MenuItem>
                                    </> :userInfoExtra && userInfoExtra.role === "jobRecruit"?
                                    <>
                                        <MenuItem component={<Link to="/profile" />} icon={<Person3Icon />}> Personal Info </MenuItem>
                                        <MenuItem component={<Link to="/user/dashboard" />} icon={<DashboardIcon />}> Dashboard </MenuItem>
                                        <MenuItem component={<Link to="/jobgiver/jobPosted" />} icon={<WorkHistoryIcon />}> Jobs Posted</MenuItem>
                                        <MenuItem component={<Link to="/" />} icon={<HomeIcon />}> Back to Home </MenuItem>
                                        
                                    </>:
                                    <>
                                    <MenuItem component={<Link to="/profile" />} icon={<Person3Icon />}> Personal Info </MenuItem>
                                    <MenuItem component={<Link to="/user/dashboard" />} icon={<DashboardIcon />}> Dashboard </MenuItem>
                                    <MenuItem component={<Link to="/jobseeker/appliedjobs" />} icon={<WorkHistoryIcon />}> Applied Jobs </MenuItem>
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