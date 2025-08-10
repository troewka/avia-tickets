import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

import { SkeletonLoading } from '../components/SkeletonLoading';
import bg from '../assets/airline_ticker_bg.jpg';

type FlightState = {
  id: string;
  airline: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: 300;
};

export const FlightDetailsPage = () => {
  const [flight, setFlight] = useState<FlightState>();
  const { id } = useParams();

  const requestFlight = async () => {
    try {
      const response = await axios.get(
        `https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights/${id}`
      );
      setFlight(response.data);
    } catch (error) {
      console.log(`Виникла поилка: ${error}`);
    }
  };

  useEffect(() => {
    requestFlight();
  }, []);

  if (!flight) {
    return <SkeletonLoading />;
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component='img' height='140' image={bg} alt='bg' />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              textAlign='center'
            >
              Ticket
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
