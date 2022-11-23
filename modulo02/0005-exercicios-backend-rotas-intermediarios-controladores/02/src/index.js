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

app.get('/remover', (req, res) => {
  const indice = req.query.indice;

  if (indice >= jogadores.length || indice < 0) {
    return res.send(
      `Não existe jogador no índice informado (${indice}) para ser removido.`
    );
  } else {
    jogadores.splice(indice, 1);
  }

  return res.send(jogadores);
});

app.get('/adicionar', (req, res) => {
  const nome = req.query.nome;
  const indice = req.query.indice;

  if (indice >= jogadores.length || indice < 0) {
    return res.send(
      `O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`
    );
  } else {
    if (indice) {
      jogadores.splice(indice, 0, nome);
    } else {
      jogadores.push(nome);
    }
  }

  res.send(jogadores);
});

app.listen(8000, () => {
  console.log(`Servidor iniciado na porta 8000`);
});
