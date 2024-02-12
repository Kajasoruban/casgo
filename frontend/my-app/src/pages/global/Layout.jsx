import { Box } from '@mui/material';
import React from 'react'
// import HeaderTop from './HeaderTop';
import SideBar from './SideBar';

const Layout = (Component) => ({ ...props }) => {

    return (
        <>
            <div style={{ display: 'flex', minHeight: "100vh" }}>
                <SideBar />
                <Box sx={{ width: "100%", bgcolor: "#fff" }}>
                    
                    <Box sx={{ p: 3 }}>
                        <Component {...props} />
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Layout