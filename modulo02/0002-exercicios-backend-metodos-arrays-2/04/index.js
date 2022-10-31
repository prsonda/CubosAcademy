const numeros = [0, 122, 4, 6, 7, 8, 44];

const numeroPar = numero => {
  return numero % 2 === 0;
};

const resultado = numeros.every(numeroPar);

if (resultado) {
  console.log('array válido');
} else {
  console.log('array inválido');
}
