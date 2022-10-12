const texto =
  'Cuidado,  /  . ? pois usuarios as vezes deixam espacos vazios no fim do texto sem querer';

const lista = texto.trim().split(' ');

let soma = 0;
for (const palavra of lista) {
  if (
    palavra === '' ||
    palavra === '.' ||
    palavra === ',' ||
    palavra === '!' ||
    palavra === '?' ||
    palavra === '/' ||
    palavra === /[^\w\s]/gi
  ) {
  } else {
    soma += 1;
  }
}
console.log(soma);
