const express = require('express');
const rotas = require('../src/roteador');

const porta = process.env.PORT || 8000;

const app = express();

app.use('/', rotas);

app.listen(porta);
