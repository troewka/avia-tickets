import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import {
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  Box,
  Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = () => {
  const isMounted = useRef(false);
  const { aviaTickets } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(aviaTickets);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [aviaTickets]);

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
          <Badge color='secondary' badgeContent={aviaTickets.length}>
            <IconButton
              component={Link}
              to='/cart'
              sx={{
                color: 'inherit',
                '&:hover': { color: 'inherit' },
                '&:focus': { outline: 'none' },
              }}
            >
              <ShoppingCartIcon fontSize='large' />
            </IconButton>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
