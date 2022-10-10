const usuarios = [
  {
    nome: 'João',
    pets: ['Max'],
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

function encontraPet(objeto, pet) {
  blocoExterno: {
    for (const [chave, indice] of objeto.entries()) {
      for (const i of indice.pets) {
        if (i.toUpperCase() === pet.toUpperCase()) {
          console.log(`O dono(a) do(a) ${pet} é o(a) ${indice.nome}`);
          break blocoExterno;
        } else if (chave === objeto.length - 1) {
          console.log(`Que pena ${pet}, não encontramos seu dono(a)`);
        }
      }
    }
  }
}

encontraPet(usuarios, 'Max');
