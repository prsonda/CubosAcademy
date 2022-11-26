// importando o banco livros
let { livros } = require('../dados/livros');

// função para substituir livros no banco de dados
const substituirLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, numPaginas } = req.body;

  const livro = livros.find(livro => {
    if (Number(id) === livro.id) {
      livro.titulo = titulo;
      livro.autor = autor;
      livro.ano = ano;
      livro.numPaginas = numPaginas;
    }
    return Number(id) === livro.id;
  });

  if (!livro) {
    return res.status(404).json({
      mensagem: 'Não existe livro a ser substituído para o ID informado.',
    });
  }

  return res.status(200).json({
    mensagem: 'Livro substituído.',
  });
};

module.exports = substituirLivro;
