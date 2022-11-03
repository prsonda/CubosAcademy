const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const pares = numero => {
  return numero % 2 === 0;
};

const resultado = numeros.filter(pares);

console.log(resultado);
