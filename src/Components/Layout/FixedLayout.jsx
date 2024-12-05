import React from 'react';
import { AppBar, Box, Container, CssBaseline } from '@mui/material';

const FixedLayout = ({ header, footer, children, color = "#fff" }) => {
  return (
    <>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" elevation={0} color="default" sx={{ p: 0, m: 0, backgroundColor: "#FFF" }}>
        {header}
      </AppBar>
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          pt: '64px', // Space for the AppBar height
          backgroundColor: `${color}`,
        }}
      >
        {/* <Box sx={{ flex: 1, py: { xs: 2, sm: 3, md: 4 }, m: 0 }}> */}
          {children}
        {/* </Box> */}
        <Box
          component="footer"
          sx={{
            width: '100%',
            textAlign: 'center',
            bgcolor: 'background.paper',
            bottom:0,
           }}
        >
          {footer}
        </Box>
      </Box>
    </>
  );
};

export default FixedLayout;
