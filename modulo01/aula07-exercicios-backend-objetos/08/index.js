const usuarios = [
  {
    nome: 'João',
    pets: [],
  },
  {
    nome: 'Ana',
    pets: ['Pingo', 'Lulu'],
  },
  {
    nome: 'Beatriz',
    pets: ['Lessie'],
  },
  {
    nome: 'Carlos',
    pets: ['Farofa', 'Salsicha', 'Batata'],
  },
  {
    nome: 'Antonio',
    pets: ['Naninha'],
  },
];

soma = 0;

for (let usuario of usuarios) {
  for (let numPet of usuario.pets) {
    soma += 1;
  }

  if (soma === 0) {
    console.log(`Sou ${usuario.nome} e não tenho pets`);
  } else if (soma === 1) {
    console.log(`Sou ${usuario.nome} e tenho ${soma} pet`);
  } else {
    console.log(`Sou ${usuario.nome} e tenho ${soma} pets`);
  }
  soma = 0;
}
