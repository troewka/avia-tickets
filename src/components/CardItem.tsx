import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import type { aviaTicketsProp } from '../@types/cardTypes';

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
}) => {
  const flightInfo = [
    { label: 'id', value: id },
    { label: 'airline', value: airline },
    { label: 'from', value: from },
    { label: 'to', value: to },
    { label: 'departureTime', value: departureTime },
    { label: 'arrivalTime', value: arrivalTime },
    { label: 'price', value: price },
    { label: 'terminal', value: terminal },
    { label: 'gate', value: gate },
  ];

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{ fontWeight: 700, textTransform: 'uppercase' }}
          variant='h6'
          color='inherit'
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
                sx={{ fontSize: 18, fontWeight: 700, mr: 1 }}
              >
                {item.label}:
              </Box>
              {item.value}
            </Typography>
          );
        })}
      </CardContent>
      <CardActions>
        <Button variant='outlined' size='small'>
          Learn More
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>{card}</Card>
    </Box>
  );
};
