// importações
let { livros } = require('../dados/livros');
const buscarPorID = require('../funcoes/buscarPorID');

// função para atualizar o livro no banco por chave
const atualizarLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, numPaginas } = req.body;

  const livro = buscarPorID(livros, id);

  if (titulo) {
    livros.find(livro => {
      if (Number(id) === livro.id) {
        livro.titulo = titulo;
      }
    });
  }

  if (autor) {
    livros.find(livro => {
      if (Number(id) === livro.id) {
        livro.autor = autor;
      }
    });
  }

  if (ano) {
    livros.find(livro => {
      if (Number(id) === livro.id) {
        livro.ano = ano;
      }
    });
  }

  if (numPaginas) {
    livros.find(livro => {
      if (Number(id) === livro.id) {
        livro.numPaginas = numPaginas;
      }
    });
  }

  if (!livro) {
    return res.status(404).json({
      mensagem: 'Não existe livro a ser alterado para o ID informado.',
    });
  }

  return res.status(200).json({
    mensagem: 'Livro alterado.',
  });
};

module.exports = atualizarLivro;
