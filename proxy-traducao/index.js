const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/traduzir', async (req, res) => {
  try {
    const { q, source, target, format } = req.body;

    const response = await axios.post('https://libretranslate.de/translate', {
      q,
      source,
      target,
      format
    }, {
      headers: { 'Content-Type': 'application/json' }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Erro ao traduzir:', error.message);
    res.status(500).json({ error: 'Erro ao traduzir o texto.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy rodando em http://localhost:${PORT}/traduzir`);
});
