const express = require('express');

const rotas = express();

rotas.get('/');
rotas.get('/alunos');
rotas.get('/professores');
rotas.get('/cursos');
rotas.get('/turmas');
rotas.get('/materias');

module.exports = rotas;
