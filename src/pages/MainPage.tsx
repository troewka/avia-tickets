import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { Header } from '../components/Header';

export const MainPage = () => {
  return (
    <>
      <Box>
        <Header />
      </Box>

      <Box
        sx={{
          minWidth: '1200px',
          minHeight: '100vh',
          padding: 2,
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};
