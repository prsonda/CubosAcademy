let maior_idade;
const usuarios = [
  {
    nome: 'João',
    idade: 25,
    maior_idade,
  },
  {
    nome: 'Ana',
    idade: 18,
    maior_idade,
  },
  {
    nome: 'Beatriz',
    idade: 15,
    maior_idade,
  },
  {
    nome: 'Carlos',
    idade: 16,
    maior_idade,
  },
  {
    nome: 'Antonio',
    idade: 32,
    maior_idade,
  },
];

for (let usuario of usuarios) {
  if (usuario.idade >= 18) {
    usuario.maior_idade = true;
  } else {
    usuario.maior_idade = false;
  }
}

console.log(usuarios);
