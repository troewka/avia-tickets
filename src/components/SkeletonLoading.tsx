import React from 'react';
import { Skeleton, Stack } from '@mui/material';

type SkeletonProps = {
  width: number;
  height: number;
};

export const SkeletonLoading: React.FC<SkeletonProps> = ({ width, height }) => {
  return (
    <Stack spacing={1}>
      <Skeleton variant='rounded' width={width} height={height} />
    </Stack>
  );
};
