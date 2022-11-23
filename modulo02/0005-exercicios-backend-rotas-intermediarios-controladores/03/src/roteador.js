const express = require('express');
const { get, getPorId } = require('./controladores/imoveis');

const rotas = express.Router();

rotas.get('/imoveis', get);

rotas.get('/imoveis/:id', getPorId);

module.exports = rotas;
