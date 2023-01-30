const express = require("express");

const cadastrarAutor = require("./controladores/cadastrar_autor");
const listarAutores = require("./controladores/listar_autor");

const rotas = express.Router();

rotas.get("/autor/:id", listarAutores);
rotas.post("/", cadastrarAutor);
rotas.post("/autor/:id/livro");

module.exports = rotas;
