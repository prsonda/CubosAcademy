const numeros = [8, 11, 4, 1];

let menor = numeros[0];
let maior = numeros[0];
let diferenca = 0;

for (n of numeros) {
  if (n < menor) {
    menor = n;
  }
}
for (n of numeros) {
  if (n > maior) {
    maior = n;
  }
}

diferenca = maior - menor;
console.log(diferenca);

/* 

diferenca = 0;

// função de callback para ordenar o array
numeros.sort(function (a, b) {
  return a - b;
});

let maior1 = numeros[numeros.length - 1];
let menor1 = numeros[0];

diferenca = maior1 - menor1;
console.log(diferenca);
*/
