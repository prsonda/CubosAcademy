const cidades = [
  'Salvador',
  'São Paulo',
  'Brasilia',
  'Recife',
  'Rio de Janeiro',
];

const maiorString = (a, b) => {
  let menor = a;

  if (b.length > menor.length) {
    menor = b;
  }

  return menor;
};

let resultado = cidades.reduce(maiorString);

console.log(resultado);
