const primeiraLetra = 'm';
const segundaLetra = 'a';
const palavras = ['aveia', 'manha', 'ave'];

let soma = 0;
for (let palavra of palavras) {
  if (
    palavra.indexOf(primeiraLetra) === 0 &&
    palavra.indexOf(segundaLetra) === 1
  ) {
    console.log(palavra);
    soma += 1;
  }
}
if (soma === 0) {
  console.log('NENHUMA');
}
