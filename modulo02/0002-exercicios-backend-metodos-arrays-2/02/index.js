const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const verifcarPalavra = palavra => {
  return palavra.length <= 5;
};

const resultado = palavras.every(verifcarPalavra);

if (resultado) {
  console.log('array validado');
} else {
  console.log('existe palavra inválida');
}
