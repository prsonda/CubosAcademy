const express = require('express');
const produtos = require('./controladores/produtos');

const rotas = express.Router();

rotas.get('/produtos', produtos.listarProdutos);
rotas.get('/produtos/:idProduto', produtos.buscarProdutoId);
rotas.get('/produtos/:idProduto/frete/:cep', produtos.calcularFrete);

module.exports = rotas;
