const express = require('express');
const cors = require('cors');
const app = express();
const productsRoutes = require('./routes/products');

app.use(express.json());
app.use(cors());

const pool = require('./db/connection');

app.use('/products', productsRoutes);


app.get('/pingdb', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0].now });
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error);
    res.status(500).json({ error: 'Erro ao conectar ao banco de dados' });
  }
});

app.listen('3001', () => {
    console.log('This is the test of the server');
});
