const input = 'cubos ewvelrabsocaeln';

const lista = input.split(' ');

let codigoProcurado = [lista[1]];

let decifrado = '';

for (const letra of lista[0]) {
  let achei = codigoProcurado[0].indexOf(letra);
  if (achei >= 0) {
    decifrado += codigoProcurado[0][achei];
  }

  codigoProcurado = codigoProcurado[0].split(letra);

  if (codigoProcurado.length > 1) {
    codigoProcurado.shift();
  }
}

if (decifrado === lista[0]) {
  console.log('SIM');
} else {
  console.log('NAO');
}
