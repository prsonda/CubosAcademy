const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let soma = 0;

for (n of numeros) {
  if (n % 2 == 0) {
    soma += n;
  }
}

console.log(soma);
