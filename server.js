const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Alterações na configuração do banco de dados
const db = mysql.createConnection({
  host: '127.0.0.1', // Alterado para o endereço IP local
  user: 'ryan',      // Alterado para o nome de usuário do MySQL
  password: 'senha', // Alterado para a senha do MySQL
  database: 'support_web',
});

// A conexão com o banco de dados permanece a mesma
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida!');
});

app.use(express.json());

// Rota para criar um novo ticket
app.post('/api/tickets', (req, res) => {
  const { title, description } = req.body;
  const query = 'INSERT INTO tickets (title, description) VALUES (?, ?)';
  db.query(query, [title, description], (err, result) => {
    if (err) {
      console.error('Erro ao inserir ticket no banco de dados:', err);
      res.status(500).json({ error: 'Erro ao criar ticket' });
      return;
    }
    console.log('Novo ticket criado no banco de dados!');
    res.status(201).json({ message: 'Ticket criado com sucesso' });
  });
});

// Mantém a mesma configuração do servidor
app.listen(port, () => {
  console.log(`Servidor backend está rodando em http://localhost:${port}`);
});
