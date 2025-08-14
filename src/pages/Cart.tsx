import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RootState } from '../store';
import { removeAviaTickets } from '../features/CartSlice';
import {
  Box,
  IconButton,
  Paper,
  Typography,
  Grid,
  List,
  ListItem,
  Button,
} from '@mui/material';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

export const Cart = () => {
  const { aviaTickets } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const ticketInfo = aviaTickets.map((ticket) => ({
    id: ticket.flightId,
    row: ticket.row,
    seat: ticket.seat,
    info: [
      { label: 'Flight №:', value: ticket.flightId },
      { label: 'Seat №:', value: ticket.seat },
      { label: 'Row №:', value: ticket.row },
      { label: 'From:', value: ticket.from },
      { label: 'To:', value: ticket.to },
      {
        label: 'Departure Time:',
        value: ticket.departureTime.replace(/[tz]/gi, ' '),
      },
      {
        label: 'Arrival Time:',
        value: ticket.arrivalTime.replace(/[tz]/gi, ' '),
      },
      { label: 'Price:', value: ticket.price },
      { label: 'Terminal:', value: ticket.terminal },
      { label: 'Gate:', value: ticket.gate },
    ],
  }));

  let sum = 0;
  aviaTickets.reduce((acc, ticket) => {
    return (sum = ticket.price + acc);
  }, 0);

  const onRemoveTicket = (id: string, row: number, seat: number) => {
    dispatch(removeAviaTickets({ id, row, seat }));
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
      >
        {aviaTickets.length > 0 ? (
          <Grid container sx={{ flexGrow: 1 }}>
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
                      onClick={() =>
                        onRemoveTicket(ticket.id, ticket.row, ticket.seat)
                      }
                      sx={{
                        '&:focus': { outline: 'none' },
                      }}
                    >
                      <BackspaceOutlinedIcon />
                    </IconButton>
                  </Box>
                  <List>
                    {ticket.info.map((info, i) => (
                      <ListItem key={i} sx={{ padding: 0 }}>
                        <Typography
                          sx={{ mr: 1, fontSize: 18, fontWeight: 600 }}
                        >
                          {info.label}
                        </Typography>
                        <Typography>{info.value}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            ))}
            <Grid
              sx={{ display: 'flex', justifyContent: 'flex-start' }}
              size={{ xs: 12 }}
            >
              <Typography variant='h5' textAlign='center'>
                Загальна ціна квитків: {sum}
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <Box>
            <Typography variant='h5' sx={{ mb: 2 }}>
              Кошик порожній
            </Typography>
            <Button
              component={Link}
              to='/'
              variant='contained'
              sx={{
                '&:hover': { color: 'white' },
              }}
            >
              Повернутись на головну
            </Button>
          </Box>
        )}
      </Grid>
    </Box>
  );
};
