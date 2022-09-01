let capital = 60_000;
let tempo = 24;
let montante = 90_000;
let taxa = ((montante / capital) ** (1 / tempo) - 1) * 100;
console.log(
  `O seu financiamento de ${capital} reais teve uma taxa de juros de ${taxa.toFixed(
    2
  )}%, pois após ${tempo} meses você teve que pagar ${montante} reais.`
);
