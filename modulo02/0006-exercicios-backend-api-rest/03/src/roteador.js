// importando o express
const espress = require('express');

// importando validações
const validarSenha = require('./intermediarios/valicarSenha');
const validarID = require('./intermediarios/validarID');

// importando controladores
const listarLivros = require('./controladores/listarLivros');
const listarLivroId = require('./controladores/listarLivroPorID');
const adicionarLivros = require('./controladores/adicionarLivros');
const substituirLivro = require('./controladores/substituirLivro');
const atualizarLivro = require('./controladores/atualizarLivro');

// atribuindo o express a constante rotas
const rotas = espress.Router();

// rotas definidas
rotas.get('/livros', listarLivros);
rotas.get('/livros/:id', validarSenha, validarID, listarLivroId);
rotas.post('/livros', validarSenha, adicionarLivros);
rotas.put('/livros/:id', validarSenha, validarID, substituirLivro);
rotas.patch('/livros/:id', validarSenha, validarID, atualizarLivro);

// exportando as rotas
module.exports = rotas;
