const pessoas = [
  {
    nome: 'Antonio',
    idade: 30,
    profissao: 'Jornalista',
  },
  {
    nome: 'Maria',
    idade: 30,
    profissao: 'Jornalista',
  },
  {
    nome: 'Ana',
    idade: 21,
    profissao: 'Programador',
  },
  {
    nome: 'Beatriz',
    idade: 20,
    profissao: 'Programador',
  },
  {
    nome: 'José',
    idade: 32,
    profissao: 'Jornalista',
  },
  {
    nome: 'Marcos',
    idade: 30,
    profissao: 'Programador',
  },
];

const programadoresMaiores = pessoa => {
  if (pessoa.idade > 20 && pessoa.profissao === 'Programador') {
    return pessoa;
  }
};

const resultadoProgramadoresMaiores = pessoas.filter(programadoresMaiores);

console.log(resultadoProgramadoresMaiores);

const jornalistaMaiores30 = pessoa => {
  if (pessoa.idade > 30 && pessoa.profissao === 'Jornalista') {
    return pessoa;
  }
};

const resultadojornalistaMaiores30 = pessoas.filter(jornalistaMaiores30);

console.log(resultadojornalistaMaiores30);

const jovens = pessoa => {
  if (pessoa.idade < 30) {
    return pessoa;
  }
};

const resultadoJovens = pessoas.filter(jovens);

console.log(resultadoJovens);
