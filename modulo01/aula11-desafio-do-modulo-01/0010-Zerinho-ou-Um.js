const jogadores = [
  {
    nome: 'Herman',
    jogada: 1,
  },
  {
    nome: 'Rhodes',
    jogada: 0,
  },
  {
    nome: 'Beach',
    jogada: 0,
  },
  {
    nome: 'Laurel',
    jogada: 0,
  },
  {
    nome: 'Beatrice',
    jogada: 0,
  },
  {
    nome: 'Alison',
    jogada: 0,
  },
  {
    nome: 'Saundra',
    jogada: 0,
  },
  {
    nome: 'Klein',
    jogada: 0,
  },
];

const num1 = [];
const num0 = [];

for (const item of jogadores) {
  if (item.jogada === 0) {
    num0.push(item);
  } else {
    num1.push(item);
  }
}

if (num0.length === 1) {
  for (const iterator of num0) {
    console.log(iterator.nome);
  }
} else if (num1.length === 1) {
  for (const iterator of num1) {
    console.log(iterator.nome);
  }
} else {
  console.log('NINGUEM');
}
