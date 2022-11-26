// importações
const express = require('express');
const rotas = require('../src/roteador');

// atribuindo o express a constante app
const app = express();

// definindo o uso de json
app.use(express.json());

// usando as rotas
app.use(rotas);

// porta a ser ouvida
app.listen(3000);
