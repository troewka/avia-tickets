export type ticketType = {
  id: string;
  airline: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  terminal: string;
  gate: string;
  tickets: TicketCountType;
  flightId: string;
  row: number;
  seat: number;
};

export type TicketCountType = {
  total: number;
  remaining: number;
};
