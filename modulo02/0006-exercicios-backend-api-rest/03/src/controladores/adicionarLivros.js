// importações
let { livros, idendificador } = require('../dados/livros');

// função para adicionar livro no banco de dados
const adicionarLivros = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body;

  const livro = {
    id: idendificador++,
    titulo,
    autor,
    ano,
    numPaginas,
  };

  livros.push(livro);

  res.status(201).json(livro);
};

module.exports = adicionarLivros;
