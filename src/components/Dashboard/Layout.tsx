// src/components/Dashboard/Layout.tsx

import React, { ReactNode } from 'react';
import { Box, Toolbar, CssBaseline } from '@mui/material';
import Header from './Header';      // Assuming you have this component
import Sidebar from './Sidebar';    // Assuming you want Sidebar here as well

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        width: '100vw',
        maxWidth: '100%',
        overflow: 'hidden',
        flexDirection: 'column',
      }}
    >
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: '#F8F9FA',
            overflowY: 'auto',
            minHeight: '100vh',
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
