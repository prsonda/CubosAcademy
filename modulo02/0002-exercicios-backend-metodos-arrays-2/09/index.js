const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const numerosPositivos = numero => {
  return numero > 0;
};

const resultado = numeros.filter(numerosPositivos);

console.log(resultado);
