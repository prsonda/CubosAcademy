const express = require("express");

const cadastrarAutor = require("./controladores/cadastrar_autor");
const cadastrarLivro = require("./controladores/cadastrar_livro");
const listarAutores = require("./controladores/listar_autor");
const listarLivros = require("./controladores/listar_livros");

const rotas = express.Router();

rotas.get("/autor/:id", listarAutores);
rotas.post("/", cadastrarAutor);
rotas.post("/autor/:id/livro", cadastrarLivro);
rotas.get("/livro", listarLivros);

module.exports = rotas;
