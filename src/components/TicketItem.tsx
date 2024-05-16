import React from 'react';

interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
}

interface TicketItemProps {
  ticket: Ticket;
}

const TicketItem: React.FC<TicketItemProps> = ({ ticket }) => {
  return (
    <li>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>
    </li>
  );
}

export default TicketItem;
