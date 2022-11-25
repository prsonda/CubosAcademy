const express = require('express');
const alunos = require('./controladores/alunos');
const validacao = require('./intermediarios');

const rotas = express.Router();

rotas.get('/alunos', alunos.listarAlunos);
rotas.get('/alunos/:id', validacao, alunos.listarAlunoId);
rotas.post('/alunos', validacao, alunos.cadastrarAluno);
rotas.delete('/alunos/:id', validacao, alunos.deletraAlunoId);

module.exports = rotas;
