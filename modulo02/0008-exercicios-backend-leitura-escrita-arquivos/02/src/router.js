const express = require('express');
const pokemon = require('./controladores/pokemon');

const rotas = express.Router();

rotas.get('/pokemon', pokemon.listaPokemon);
rotas.get('/pokemon/:id', pokemon.listaPokemonId);

module.exports = rotas;
