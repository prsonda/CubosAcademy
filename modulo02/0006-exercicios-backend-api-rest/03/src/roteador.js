const espress = require('express');
const livros = require('./controladores/controlador');
const validarSenha = require('./intermediarios/valicarSenha');
const validarID = require('./intermediarios/validarID');

const rotas = espress.Router();

rotas.get('/livros', livros.listarLivros);
rotas.get('/livros/:id', validarSenha, validarID, livros.listarLivroId);
rotas.post('/livros', validarSenha, livros.adicionarLivros);
rotas.put('/livros/:id', validarSenha, validarID, livros.substituirLivro);
rotas.patch('/livros/:id', validarSenha, validarID, livros.atualizarLivro);

module.exports = rotas;
