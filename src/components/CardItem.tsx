import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { type aviaTicketsProp } from '../@types/cardTypes';

export const CardItem: React.FC<aviaTicketsProp> = ({
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
  const flightInfo = [
    { label: 'Ticket num', value: id },
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
          sx={{ fontWeight: 700, textTransform: 'uppercase' }}
          variant='h6'
          color='primary'
        >
          Ticket
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
        <IconButton sx={{ position: 'absolute', top: 5, right: 10 }}>
          <FavoriteBorderIcon color='primary' />
        </IconButton>
      </CardContent>
    </>
  );

  return (
    <Box sx={{ minWidth: 300 }}>
      <Card variant='outlined' sx={{ cursor: 'pointer', position: 'relative' }}>
        {card}
      </Card>
    </Box>
  );
};
