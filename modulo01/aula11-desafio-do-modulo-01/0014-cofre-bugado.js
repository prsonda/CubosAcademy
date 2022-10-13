const input = 'cubos cuggbyos';

const lista = input.split('\n');

let decifrado = '';

for (const letra of lista[0]) {
  bloco: {
    for (const senha of lista[1]) {
      if (letra === senha) {
        decifrado += senha;
        break bloco;
      }
    }
  }
}
if (decifrado === lista[0]) {
  console.log('SIM');
} else {
  console.log('NAO');
}
