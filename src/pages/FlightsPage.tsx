import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { getAviaTickets } from '../features/CardSlice';

import { Sort, type SortOption } from '../components/Sort';
import { CardItem } from '../components/CardItem';
import { SkeletonLoading } from '../components/SkeletonLoading';

export const FlightsPage = () => {
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>('id');

  const dispatch = useDispatch();
  const { aviaTickets } = useSelector((state: RootState) => state.card);

  const request = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://679d13f487618946e6544ccc.mockapi.io/testove/v1/flights',
        {
          params: {
            sortBy: sortBy,
          },
        }
      );
      dispatch(getAviaTickets(response.data));
    } catch (error) {
      console.log(`Виникла помилка ${error}`);
      dispatch(getAviaTickets([]));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    request();
  }, [sortBy]);

  const renderCards = () => {
    if (aviaTickets.length > 0) {
      return aviaTickets.map((ticket) => (
        <>
          <Grid size={{ xs: 4, sm: 4, md: 4, lg: 3 }} key={ticket.id}>
            <CardItem {...ticket} />
          </Grid>
        </>
      ));
    } else {
      return <h2>Щось пішло не так...</h2>;
    }
  };

  const loadingSkeleton = () => {
    return [...Array(12)].map((_, index) => (
      <Grid size={{ xs: 4, sm: 4, md: 4, lg: 3 }} key={index}>
        <SkeletonLoading width={300} height={400} />
      </Grid>
    ));
  };

  return (
    <>
      <Box sx={{ maxWidth: 250, mb: 2, ml: 'auto' }}>
        <Sort value={sortBy} onChange={setSortBy} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {loading ? loadingSkeleton() : renderCards()}
        </Grid>
      </Box>
    </>
  );
};
