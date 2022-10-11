const carta = '3';

const cartas = ['Q', 'J', 'K', 'A', '2', '3'];

for (const [chave, valor] of cartas.entries()) {
  if (carta == valor) {
    if (chave < cartas.length - 1) {
      console.log(cartas[chave + 1]);
    } else {
      console.log(cartas[0]);
    }
  }
}
