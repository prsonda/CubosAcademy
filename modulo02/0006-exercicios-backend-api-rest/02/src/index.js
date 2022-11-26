const { json } = require('express');
const express = require('express');
const app = express();

const convidados = [
  'Carlos',
  'Amanda',
  'Fernanda',
  'Juliana',
  'Lucas',
  'Roberto',
];

app.use(express.json());
app.get('/convidados', (req, res) => {
  const { nome } = req.query;

  const convidado = convidados.find(convidado => {
    return nome === convidado;
  });

  if (convidado) {
    return res.json({ mensagem: 'Convidado presente.' });
  }

  if (nome) {
    return res.json({
      mensagem: 'O convidado buscado não está presente na lista.',
    });
  }

  return res.json(convidados);
});

app.post('/convidados', (req, res) => {
  const { nome } = req.body;

  const convidado = convidados.find(convidado => {
    return nome === convidado;
  });

  if (convidado) {
    return res.json({
      mensagem:
        'O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.',
    });
  } else {
    convidados.push(nome);
    return res.json({
      mensagem: 'Convidado adicionado.',
    });
  }
});

app.delete('/convidados/:nome', (req, res) => {
  const { nome } = req.params;

  const convidado = convidados.find(convidado => {
    return nome === convidado;
  });

  if (!convidado) {
    return res.json({
      mensagem:
        'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.',
    });
  } else {
    const indice = convidados.indexOf(nome);

    convidados.splice(indice, 1);

    return res.json({
      mensagem: 'Convidado removido.',
    });
  }
});

app.listen(3000);
