// let contador = 0;

// let num = 0;

// while (contador < 100) {
//   num += 1;
//   alterado = String(num).padStart(3, '000');
//   console.log(alterado);
//   contador += 1;
// }

function imprimirData(dia, mes, ano) {
  'use strict';
  let diaFormatado = String(dia).padStart(2, '0');
  let mesFormatado = String(mes).padStart(2, '0');

  console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}

imprimirData(1, 1, 2022);
