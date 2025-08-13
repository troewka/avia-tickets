import React from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  type SelectChangeEvent,
} from '@mui/material';

export type SortOption = 'id' | 'price' | 'airline';

interface SortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const Sort: React.FC<SortProps> = ({ value, onChange }) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as SortOption);
  };

  return (
    <FormControl fullWidth size='small'>
      <InputLabel id='sort-select-label'>Сортувати за</InputLabel>
      <Select
        labelId='sort-select-label'
        id='sort-select'
        value={value}
        label='Сортувати за'
        onChange={handleChange}
      >
        <MenuItem value='id'>Номер рейсу</MenuItem>
        <MenuItem value='price'>Ціна квитка</MenuItem>
        <MenuItem value='airline'>Авіакомпанія</MenuItem>
      </Select>
    </FormControl>
  );
};
