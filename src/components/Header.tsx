import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Typography, Toolbar, AppBar, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            variant='h5'
            sx={{
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { color: 'inherit' },
            }}
          >
            Flights
          </Typography>
          <IconButton color='inherit' sx={{ '&:focus': { outline: 'none' } }}>
            <ShoppingCartIcon fontSize='large' />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
