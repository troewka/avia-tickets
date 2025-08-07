import React from 'react';
import { Skeleton, Stack } from '@mui/material';

export const SkeletonLoading = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant='rounded' width={290} height={350} />
    </Stack>
  );
};
