// importações
const { livros } = require('../dados/livros');
const buscarPorID = require('../funcoes/buscarPorID');

// função para listar livros por ID
const listarLivroId = (req, res) => {
  const { id } = req.params;

  const livro = buscarPorID(livros, id);

  if (!livro) {
    return res.status(404).json({
      mensagem: 'Não existe livro para o ID informado.',
    });
  }

  res.status(200).json(livro);
};

module.exports = listarLivroId;
