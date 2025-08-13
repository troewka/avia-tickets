import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, IconButton, Paper, Typography, Grid } from '@mui/material';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import type { RootState } from '../store';
import { removeAviaTickets } from '../features/CartSlice';

export const Cart = () => {
  const { aviaTickets } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const ticketObj = {
    id: { title: 'Flight №', value: '1' },
    seat: { title: 'Seat №', value: '1' },
    row: { title: 'Row №', value: '1' },
    from: { title: 'From', value: '1' },
    to: { title: 'To', value: '1' },
    departureTime: { title: 'Departure Time', value: '1' },
    arrivalTime: { title: 'Arrival Time', value: '1' },
    price: { title: 'Price', value: '1' },
    terminal: { title: 'Terminal', value: '1' },
    gate: { title: 'Gate', value: '1' },
  };

  const ticketInfo = aviaTickets.map((ticket) => [
    { label: 'Flight №', value: ticket.flightId },
    { label: 'Seat №', value: ticket.seat },
    { label: 'Row №', value: ticket.row },
    { label: 'From', value: ticket.from },
    { label: 'To', value: ticket.to },
    { label: 'Departure Time', value: ticket.departureTime },
    { label: 'Arrival Time', value: ticket.arrivalTime },
    { label: 'Price', value: ticket.price },
    { label: 'Terminal', value: ticket.terminal },
    { label: 'Gate', value: ticket.gate },
  ]);

  const onRemoveTicket = (id) => {
    dispatch(removeAviaTickets(id));
  };

  return (
    <Box sx={{ minWidth: 400, display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {ticketInfo.map((ticket, index) => (
          <Grid key={index} size={{ xs: 4, sm: 4, md: 4 }}>
            <Paper sx={{ minWidth: 300, minHeight: 200, padding: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  sx={{
                    flexGrow: 1,
                    fontSize: 18,
                    fontWeight: 700,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                  }}
                >
                  Ticket
                </Typography>
                <IconButton
                  onClick={() => onRemoveTicket()}
                  sx={{
                    '&:focus': { outline: 'none' },
                  }}
                >
                  <BackspaceOutlinedIcon />
                </IconButton>
              </Box>
              <Box sx={{ mb: 1 }}>
                {ticket.map((item) => (
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
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

<List>
  <ListItem sx={{ display: 'flex' }}>
    <ListItemText primary='Parent:' sx={{ mr: 0 }} />
    <ListItemText primary='Inbox' />
  </ListItem>
  <ListItem sx={{ display: 'flex' }}>
    <ListItemText primary='Parent:' sx={{ mr: 0 }} />
    <ListItemText primary='Inbox' />
  </ListItem>
  <ListItem sx={{ display: 'flex' }}>
    <ListItemText primary='Parent:' sx={{ mr: 0 }} />
    <ListItemText primary='Inbox' />
  </ListItem>
  <ListItem sx={{ display: 'flex' }}>
    <ListItemText primary='Parent:' sx={{ mr: 0 }} />
    <ListItemText primary='Inbox' />
  </ListItem>
  <ListItem sx={{ display: 'flex' }}>
    <ListItemText primary='Parent:' sx={{ mr: 0 }} />
    <ListItemText primary='Inbox' />
  </ListItem>
  <ListItem sx={{ display: 'flex' }}>
    <ListItemText primary='Parent:' sx={{ mr: 0 }} />
    <ListItemText primary='Inbox' />
  </ListItem>
  <ListItem sx={{ display: 'flex' }}>
    <ListItemText primary='Parent:' sx={{ mr: 0 }} />
    <ListItemText primary='Inbox' />
  </ListItem>
</List>;
