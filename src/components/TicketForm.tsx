import React, { useState } from 'react';

interface TicketFormProps {
  onSubmit: (title: string, description: string) => void;
}

const TicketForm: React.FC<TicketFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Criar Novo Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Nome:</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="description">Como posso te ajudar?</label>
          <textarea 
            id="description" 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Criar Ticket</button>
      </form>
    </div>
  );
}

export default TicketForm;
