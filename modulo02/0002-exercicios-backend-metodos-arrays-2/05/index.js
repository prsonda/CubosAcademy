const usuários = [
  {
    nome: 'André',
    idade: 29,
    habilitado: false,
  },
  {
    nome: 'Marcos',
    idade: 70,
    habilitado: true,
  },
  {
    nome: 'Ana',
    idade: 35,
    habilitado: true,
  },
  {
    nome: 'Vinícius',
    idade: 44,
    habilitado: true,
  },
  {
    nome: 'Carlos',
    idade: 17,
    habilitado: false,
  },
  {
    nome: 'Maria',
    idade: 19,
    habilitado: true,
  },
];

const verificaIdade = usuario => {
  return usuario.idade > 17 && usuario.idade < 66;
};

const temHabilitacao = usuario => {
  return usuario.habilitado;
};

const abilitados = usuários.filter(verificaIdade).every(temHabilitacao);

if (abilitados) {
  console.log('todos passaram no teste');
} else {
  console.log('todos precisam estar habilitados');
}
