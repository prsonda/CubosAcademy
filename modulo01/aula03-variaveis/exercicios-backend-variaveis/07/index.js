let populacaoInicialInfectada = 1000;
let quantidadeTransmissao = 4;
let tempoPercorrido = 100;
let pessoasInfectadasTotal =
  populacaoInicialInfectada * quantidadeTransmissao ** (tempoPercorrido / 7);

console.log(pessoasInfectadasTotal);
