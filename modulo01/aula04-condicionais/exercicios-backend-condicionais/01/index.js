const jogada1 = 'pedra';
const jogada2 = 'tesoura';

//seu código aqui
/*
Pedra ganha da tesoura (amassando-a ou quebrando-a).
Tesoura ganha do papel (cortando-o).
Papel ganha da pedra (embrulhando-a).
*/

const jogada1Ganha =
  (jogada1 === 'pedra' && jogada2 === 'tesoura') ||
  (jogada1 === 'tesoura' && jogada2 === 'papel') ||
  (jogada1 === 'papel' && jogada2 === 'pedra');

const jogada2Ganha =
  (jogada1 === 'tesoura' && jogada2 === 'pedra') ||
  (jogada1 === 'papel' && jogada2 === 'tesoura') ||
  (jogada1 === 'pedra' && jogada2 === 'papel');

if (jogada1Ganha) {
  console.log('Jogador1 venceu!');
} else if (jogada2Ganha) {
  console.log('Jogador2 venceu!');
} else {
  console.log('Empate');
}
