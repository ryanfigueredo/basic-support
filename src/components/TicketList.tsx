import React from 'react';
import TicketItem from './TicketItem';

interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
}

interface TicketListProps {
  tickets: Ticket[];
}

const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  return (
    <div>
      <h2>Lista de Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
