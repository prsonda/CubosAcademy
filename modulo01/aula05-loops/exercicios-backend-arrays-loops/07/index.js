const nomes = ['Ana', 'Joana', 'Carlos', 'amanda'];

let nomeComA = [];
for (nome of nomes) {
  if (nome.indexOf('A') == 0 || nome.indexOf('a') == 0) {
    nomeComA.push(nome);
  }
}
console.log(nomeComA);
