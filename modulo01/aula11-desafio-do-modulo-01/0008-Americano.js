const numeros = [1, 3, 2, 3];

const soma = numeros.reduce((a, b) => a + b);

if (soma % numeros.length === 0) {
  console.log(numeros.length);
} else {
  console.log(soma % numeros.length);
}
