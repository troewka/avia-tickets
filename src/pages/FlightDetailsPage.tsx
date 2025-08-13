import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
} from '@mui/material';
import { type aviaTicketsProp } from '../@types/cardTypes';
import { SkeletonLoading } from '../components/SkeletonLoading';
import bg from '../assets/airline_ticker_bg.jpg';
import { addAviaTickets } from '../features/CartSlice';
import { useDispatch } from 'react-redux';

//type FlightState = {
//  id: string;
//  airline: string;
//  from: string;
//  to: string;
//  departureTime: string;
//  arrivalTime: string;
//  price: number;
//  terminal: number
//};

type Seat = {
  id: string;
  row: number;
  seat: number;
  isOccupied: boolean;
};

export const FlightDetailsPage = () => {
  const [flight, setFlight] = useState<aviaTicketsProp>();
  const [selected, setSelected] = useState<string[]>([]);
  const [seats] = useState<Seat[]>(() =>
    Array.from({ length: 60 }, (_, i) => ({
      id: `${Math.floor(i / 6) + 1} - ${(i % 6) + 1}`,
      row: Math.floor(i / 6) + 1,
      seat: (i % 6) + 1,
      isOccupied: Math.random() < 0.3,
    }))
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  const flightInfo = [
    { label: 'Airline', value: flight?.airline },
    { label: 'From', value: flight?.from },
    { label: 'To', value: flight?.to },
    {
      label: 'Departure Time',
      value: flight?.departureTime.replace(/[tz]/gi, ' '),
    },
    {
      label: 'Arrival Time',
      value: flight?.arrivalTime.replace(/[tz]/gi, ' '),
    },
    { label: 'Price ticket', value: flight?.price },
  ];

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

  const onAddToCart = (obj: Seat) => {
    const ticketInfo = {
      flightId: flight?.id,
      airline: flight?.airline,
      from: flight?.from,
      to: flight?.to,
      departureTime: flight?.departureTime,
      arrivalTime: flight?.arrivalTime,
      price: flight?.price,
      terminal: flight?.terminal,
      gate: flight?.gate,
      row: obj.row,
      seat: obj.seat,
    };
    dispatch(addAviaTickets(ticketInfo));
    setSelected((prev) =>
      prev.includes(obj.id)
        ? prev.filter((seatId) => seatId !== obj.id)
        : [...prev, obj.id]
    );
  };

  //const handleSelect = (id: string) => {
  //  setSelected((prev) =>
  //    prev.includes(id) ? prev.filter((seatId) => seatId !== id) : [...prev, id]
  //  );
  //};

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {flight ? (
        <Card sx={{ maxWidth: 550 }}>
          <CardMedia component='img' height='200' image={bg} alt='bg' />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              textAlign='center'
            >
              Flight № {flight.id}
            </Typography>
            <Box sx={{ mb: 1 }}>
              {flightInfo.map((item) => (
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
              ))}
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {seats.map((seat) => (
                  <Button
                    key={seat.id}
                    variant='contained'
                    size='small'
                    onClick={() => onAddToCart(seat)}
                    disabled={seat.isOccupied}
                    sx={{
                      backgroundColor: seat.isOccupied
                        ? 'gray'
                        : selected.includes(seat.id)
                        ? 'green'
                        : undefined,
                    }}
                  >
                    {seat.seat}
                  </Button>
                ))}
              </Grid>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <SkeletonLoading width={550} height={800} />
      )}
    </Box>
  );
};
