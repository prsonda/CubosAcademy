const precos = [200, 150, 50, 100];

precos.sort((a, b) => a - b);

if (precos.length > 2) {
  precos[0] /= 2;
}

const soma = precos.reduce((a, b) => a + b);

console.log(soma);
