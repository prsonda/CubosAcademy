const input = 'cubos cuggbyos';

const lista = input.split(' ');

const senha = lista[0];
const digitado = lista[1];

let contador = 0;
for (const letra of digitado) {
  if (letra === senha[contador]) {
    contador++;
  }
}

if (contador === senha.length) {
  console.log('SIM');
} else {
  console.log('NAO');
}
