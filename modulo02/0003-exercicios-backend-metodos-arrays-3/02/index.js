const cidades = [
  'Salvador',
  'São Paulo',
  'Brasilia',
  'Recife',
  'Rio de Janeiro',
];

const maiorString = (a, b) => {
  let maior = a;

  if (b.length > maior.length) {
    maior = b;
  }

  return maior;
};

let resultado = cidades.reduce(maiorString);

console.log(resultado);
