const min = 25;
const km = 11.5;

const valorMinuto = 50;
const valorKm = 70;
const valorKmAcima10 = 50;
const valorMinutoAcima20 = 30;

let minAbaixo = 0;
let minAcima = 0;
let kmAbaixo = 0;
let kmAcima = 0;

if (min > 20) {
  minAbaixo = 20;
  minAcima = min - minAbaixo;
} else {
  minAbaixo = min;
}
if (km > 10) {
  kmAbaixo = 10;
  kmAcima = km - kmAbaixo;
} else {
  kmAbaixo = km;
}

const valorTempo = minAbaixo * valorMinuto + minAcima * valorMinutoAcima20;
const valorKms = kmAbaixo * valorKm + kmAcima * valorKmAcima10;

const totalPagar = Math.floor(valorTempo + valorKms);

console.log(totalPagar);
