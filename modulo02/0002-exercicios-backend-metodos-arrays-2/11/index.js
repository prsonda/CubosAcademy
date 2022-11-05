const nomes = [
  'Maria',
  'João',
  'José',
  'Antonio',
  'Beatriz',
  'Camila',
  'amanda',
];

const encontrarLetra = nome => {
  if (nome.slice(0, 1) === 'a' || nome.slice(0, 1) === 'A') {
    return nome;
  }
};

const resultado = nomes.filter(encontrarLetra);

console.log(resultado);
