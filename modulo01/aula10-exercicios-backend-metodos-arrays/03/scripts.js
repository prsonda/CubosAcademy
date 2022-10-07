const nomes = [
  'Ford Ká',
  'Ranger',
  'Hilux',
  'Corola',
  'Fusca',
  'Chevete',
  'Brasilia',
];
const posicao = 3;

for (let index = 0; index < nomes.length; index++) {
  const element = nomes[index];
  let limete = 2;
  if (index >= posicao && index <= posicao + limete) {
    console.log(element);
  }
}
