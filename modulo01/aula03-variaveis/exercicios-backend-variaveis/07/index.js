let popInicInfect = 1000;
let quantTransm = 4;
let dias = 100;
let totalInfectado = popInicInfect * quantTransm ** (dias / 7);

console.log(
  `Após ${dias} dias, haverá ${totalInfectado.toFixed(0)} pessoas infectadas`
);
