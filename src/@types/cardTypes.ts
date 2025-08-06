export type aviaTicketsProp = {
  id: string;
  airline: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  terminal: string;
  gate: string;
  tickets: TicketsProp;
};

export type TicketsProp = {
  total: number;
  remaining: number;
};

export type aviaTicketsState = {
  aviaTickets: aviaTicketsProp[];
};
