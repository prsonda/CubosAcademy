const express = require('express');
const encontarCEP = require('./controladores/cep');

const rotas = express.Router();

rotas.get('/enderecos/:cep', encontarCEP);

module.exports = rotas;
