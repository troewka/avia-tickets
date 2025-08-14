import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { type ticketType } from '../@types/cardTypes';
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

export const CardItem: React.FC<ticketType> = ({
  id,
  airline,
  from,
  to,
  departureTime,
  arrivalTime,
  price,
  terminal,
  gate,
  tickets,
}) => {
  const [isFavorite, setFavorite] = useState(false);

  const flightInfo = [
    { label: 'Flight №', value: id },
    { label: 'Airline', value: airline },
    { label: 'From', value: from },
    { label: 'To', value: to },
    { label: 'Departure Time', value: departureTime.replace(/[tz]/gi, ' ') },
    { label: 'Arrival Time', value: arrivalTime.replace(/[tz]/gi, ' ') },
    { label: 'Price', value: price },
    { label: 'Terminal', value: terminal },
    { label: 'Gate', value: gate },
    { label: 'Tickets remaining', value: tickets.remaining },
    { label: 'Tickets total', value: tickets.total },
  ];

  const card = (
    <>
      <CardContent>
        <Typography
          sx={{
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
          variant='h6'
          color='primary'
        >
          Flight
        </Typography>
        {flightInfo.map((item) => {
          return (
            <Typography
              key={item.label}
              sx={{ textAlign: 'left' }}
              variant='body1'
            >
              <Box
                component='span'
                sx={{ fontSize: 16, fontWeight: 700, mr: 1 }}
              >
                {item.label}:
              </Box>
              {item.value}
            </Typography>
          );
        })}
        <Link to={`/flights/${id}`}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <Button variant='outlined' sx={{ '&:focus': { outline: 'none' } }}>
              Детальніше
            </Button>
          </Box>
        </Link>

        <IconButton
          onClick={() => setFavorite((prev) => !prev)}
          sx={{
            position: 'absolute',
            top: 5,
            right: 10,
            '&:focus': { outline: 'none' },
          }}
        >
          {isFavorite ? (
            <FavoriteOutlinedIcon color='primary' />
          ) : (
            <FavoriteBorderOutlinedIcon color='primary' />
          )}
        </IconButton>
      </CardContent>
    </>
  );

  return (
    <Box>
      <Card variant='outlined' sx={{ position: 'relative' }}>
        {card}
      </Card>
    </Box>
  );
};
