let { livros, idendificador } = require('../dados/livros');

const listarLivros = (req, res) => {
  res.status(200).json(livros);
};

const listarLivroId = (req, res) => {
  const { id } = req.params;

  const livroId = livros.find(livro => {
    return Number(id) === livro.id;
  });

  if (Number(id) < 0 || isNaN(id)) {
    return res.status(400).json({
      mensagem: 'O valor do parâmetro ID da URL não é um número válido.',
    });
  }

  if (!livroId) {
    return res.status(404).json({
      mensagem: 'Não existe livro para o ID informado.',
    });
  }

  res.status(200).json(livroId);
};

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

const atualizarLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, numPaginas } = req.body;

  const livro = livros.find(livro => {
    return Number(id) === livro.id;
  });

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

module.exports = {
  listarLivros,
  listarLivroId,
  adicionarLivros,
  substituirLivro,
  atualizarLivro,
};
