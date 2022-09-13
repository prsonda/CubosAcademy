const numeros = [8, 11, 4, 1];

let diferenca = 0;

// função de callback para ordenar o array
numeros.sort(function (a, b) {
  return a - b;
});

let maior = numeros[numeros.length - 1];
let menor = numeros[0];

diferenca = maior - menor;
console.log(diferenca);
