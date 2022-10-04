const numeroCartao = '1111222233334444';

const tamenhoCartão = numeroCartao.length;

let numeroCartaoEditado = '';

if (tamenhoCartão === 16) {
  let primeiraParte = numeroCartao.slice(0, 4);
  let segundaParte = numeroCartao.slice(12);
  numeroCartaoEditado += primeiraParte + segundaParte.padStart(12, '*');
  console.log(numeroCartaoEditado);
} else {
  console.log('Cartão inválido');
}
