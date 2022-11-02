const cidades = [
  'Salvador',
  'São Paulo',
  'Brasilia',
  'Recife',
  'Rio de Janeiro',
];

const verificarCidade = cidade => {
  return cidade.length < 9;
};

const resultado = cidades.filter(verificarCidade);

console.log(resultado);

console.log(resultado.join(', '));
