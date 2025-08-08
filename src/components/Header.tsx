import React from 'react';
import {
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  Container,
  Box,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <AppBar
        position='static'
        elevation={1}
        sx={{ backgroundColor: '#1976d2' }}
      >
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <Typography
              variant='h5'
              component='div'
              sx={{ flexGrow: 1, textAlign: 'left' }}
            >
              Flights
            </Typography>
            <IconButton color='inherit'>
              <ShoppingCartIcon fontSize='large' />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Відступ щоб контент не був під шапкою */}
      <Toolbar />
    </Box>
  );
};
