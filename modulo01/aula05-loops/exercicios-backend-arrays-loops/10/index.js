const numeros = [8, 11, 4, 1];

let diferenca = 0;
let maior = 0;
let menor = numeros.sort()[0];
for (n of numeros) {
  if (n > maior) {
    maior = n;
  }
}
diferenca = maior - menor;
console.log(diferenca);
