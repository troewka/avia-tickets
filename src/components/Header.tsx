import React from 'react';
import { IconButton, Typography, Toolbar, AppBar, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h5'
            component='div'
            sx={{ flexGrow: 1, textAlign: 'left' }}
          >
            Avia Tickets
          </Typography>
          <IconButton color='inherit'>
            <ShoppingCartIcon fontSize='large' />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
