const express = require('express');

const rotas = express.Router();

// permições de acesso
const loginAlunos = require('../intermediarios/loginAlunos');
const loginDiretor = require('../intermediarios/LoginDiretor');
const loginProfessores = require('../intermediarios/LoginProfessores');
const loginCoordenadorCurso = require('../intermediarios/LoginsCoordenadoresCurso');
const loginSecretaria = require('../intermediarios/loginSecretaria');

// acesso geral
rotas.get('/');
rotas.get('/alunos');
rotas.get('/professores');
rotas.get('/cursos');
rotas.get('/turmas');
rotas.get('/materias');

// acessos alunos

// acessos professores

// acessos coordenadores

// acessos secretaria

// acessos diretor

module.exports = rotas;
