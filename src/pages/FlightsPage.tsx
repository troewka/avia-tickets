import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { getAviaTickets } from '../features/CardSlice';

import { CardItem } from '../components/CardItem';
import { SkeletonLoading } from '../components/SkeletonLoading';

export const FlightsPage = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { aviaTickets } = useSelector((state: RootState) => state.card);

  const request = async () => {
    setLoading(true);
    try {
      await axios
        .get('https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights')
        .then((response) => dispatch(getAviaTickets(response.data)));
    } catch (error) {
      console.log(`Виникла помилка ${error}`);
      dispatch(getAviaTickets([]));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    request();
  }, []);

  const renderCards = () => {
    if (aviaTickets.length > 0) {
      return aviaTickets.map((ticket, index) => (
        <Grid key={index} size={{ xs: 4, sm: 4, md: 4, lg: 3 }}>
          <CardItem {...ticket} />
        </Grid>
      ));
    } else {
      return <h2>Щось пішло не так...</h2>;
    }
  };

  const skeleton = () => {
    return [...Array(12)].map((_, index) => <SkeletonLoading key={index} />);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {loading ? skeleton() : renderCards()}
        </Grid>
      </Box>
    </>
  );
};
