import React from 'react';
import Header from './components/Header';
import TicketList from './components/TicketList';
import TicketForm from './components/TicketForm';
import Footer from './components/Footer';
import axios from 'axios';

const App: React.FC = () => {
  const [tickets, setTickets] = React.useState([]);

  React.useEffect(() => {
    // Carregar tickets do servidor ao montar o componente
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get('/api/tickets');
      setTickets(response.data);
    } catch (error) {
      console.error('Erro ao buscar tickets:', error);
    }
  };

  const handleCreateTicket = async (title: string, description: string) => {
    try {
      await axios.post('/api/tickets', { title, description });
      console.log('Novo ticket criado:', title, description);
      // Recarregar lista de tickets após a criação bem-sucedida
      fetchTickets();
    } catch (error) {
      console.error('Erro ao criar ticket:', error);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <TicketList tickets={tickets} />
        <TicketForm onSubmit={handleCreateTicket} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
