const jogada1 = 5;
const jogada2 = 3;

//seu código aqui

const resultado = jogada1 + jogada2;
const par = resultado % 2 === 0;
const impar = resultado % 2 !== 0;
const jogador1 = par;

if (jogador1) {
  console.log('Jogador1 é o vencedor!');
} else {
  console.log('Jogador2 é o vencedor!');
}
