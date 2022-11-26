// importando o banco livros
const { livros } = require('../dados/livros');

// função para listar os livros do bando de dados
const listarLivros = (req, res) => {
  res.status(200).json(livros);
};

module.exports = listarLivros;
