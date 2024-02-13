import { Box } from '@mui/material';
import React from 'react'
import SideBar from './SideBar';
import HeaderTop from './Header';

const Layout = (Component) => ({ ...props }) => {

    return (
        <>
            <div style={{ display: 'flex', minHeight: "100vh" }}>
                <SideBar />
                <Box sx={{ width: "100%", bgcolor: "#fff" }}>
                     <HeaderTop />
                    <Box sx={{ p: 3 }}>
                        <Component {...props} />
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Layout