const numeros = [3, 24, 1, 8, 11, 7, 15];

let maior = 0;
for (n of numeros) {
  if (n > maior) {
    maior = n;
  }
}
console.log(maior);
