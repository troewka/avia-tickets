import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { Header } from '../components/Header';

export const MainPage = () => {
  return (
    <Box
      sx={{
        minWidth: '1280px',
        mx: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Висота сторінки
        border: '1px solid red',
      }}
    >
      <Header />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          px: 2,
          py: 4,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
