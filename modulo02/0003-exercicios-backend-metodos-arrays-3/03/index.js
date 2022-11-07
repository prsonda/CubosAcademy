const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorValor = (a, b) => {
  let maior = a;

  if (b > maior) {
    maior = b;
  }

  return maior;
};

const resultado = numeros.reduce(maiorValor);

console.log(resultado);
