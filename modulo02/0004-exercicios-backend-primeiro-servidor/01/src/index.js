const express = require('express');

const app = express();

const jogadores = ['José', 'Maria', 'João', 'Marcos', 'Fernanda'];

contador = 0;

app.get('/', (req, res) => {
  res.send(`É a vez de ${jogadores[contador]} jogar!`);

  if (req) {
    contador++;

    if (contador == jogadores.length) {
      contador = 0;
    }
  }
});

app.listen(3000, () => {
  console.log(`Servidor iniciado na porta 3000`);
});
