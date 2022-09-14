let letra = 'm';
let palavras = ['mamao', 'maca', 'melao', 'melancia', 'laranja'];

let soma = 0;
for (let resposta of palavras) {
  if (resposta.indexOf(letra) !== 0) {
    soma += 1;
  }
}
console.log(soma);
