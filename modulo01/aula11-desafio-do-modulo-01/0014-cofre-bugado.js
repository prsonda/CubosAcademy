const input = 'cubos cuggbyos';

const lista = input.split(' ');

const codigo = lista[0].split('');

let decifrado = '';

for (const [pos, letra] of codigo.entries()) {
  bloco: {
    for (const senha of lista[1]) {
      if (pos > 0) {
        if (letra === senha.slice(letra[pos - 1])) {
          decifrado += senha;
          break bloco;
        }
      } else if (letra === senha) {
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
