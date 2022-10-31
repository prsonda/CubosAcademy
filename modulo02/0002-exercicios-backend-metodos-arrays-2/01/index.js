const livros = [
  'Guerra e Paz',
  'A Montanha Mágica',
  'Cem Anos de Solidão',
  'Dom Quixote',
  'A Divina Comédia',
];
const nomeDoLivro = 'Dom Quixote';

const buscaLivro = livro => {
  return livro === nomeDoLivro;
};

const posicaoLivro = livros.findIndex(buscaLivro);

console.log(`O livro está na posição ${posicaoLivro}`);
