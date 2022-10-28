const pets = [
  {
    nome: 'Farofa',
    tipo: 'cachorro',
    raca: 'Doberman',
    servico: [],
  },
  {
    nome: 'Lessie',
    tipo: 'cachorro',
    raca: 'pincher',
    servico: [],
  },
  {
    nome: 'Batata',
    tipo: 'gato',
    raca: 'cianez',
    servico: [],
  },
  {
    nome: 'Pingo',
    tipo: 'cachorro',
    raca: 'viralata',
    servico: [],
  },
  {
    nome: 'Naninha',
    tipo: 'gato',
    raca: 'viralata',
    servico: [],
  },
];

const darBanhoNoPet = pet => {
  pet.servico.push('Tomou Banho');
  console.log(`O pet ${pet.nome} tomou banho!`);
};

const servicoRealizado = (listaPets, nomePet, callback) => {
  let petEncontrado;
  for (const pet of listaPets) {
    if (nomePet === pet.nome) {
      petEncontrado = pet;
    }
  }
  if (petEncontrado) {
    callback(petEncontrado);
  } else {
    console.log(`O pet ${nomePet} não foi encontrado.`);
  }
};

servicoRealizado(pets, 'Naninha', darBanhoNoPet);

console.log(pets);
