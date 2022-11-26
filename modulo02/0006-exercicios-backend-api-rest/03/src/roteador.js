const espress = require('express');
const livros = require('./controladores/controlador');
const validar = require('../src/intermediarios/validar');

const rotas = espress.Router();

rotas.get('/livros', livros.listarLivros);
rotas.get('/livros/:id', validar, livros.listarLivroId);
rotas.post('/livros', validar, livros.adicionarLivros);
rotas.put('/livros/:id', validar, livros.substituirLivro);
rotas.patch('/livros/:id', validar, livros.atualizarLivro);

module.exports = rotas;
