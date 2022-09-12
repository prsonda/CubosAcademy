const filaDeDentro = ['Jose', 'Maria', 'Joao'];
const filaDeFora = ['Joana', 'Roberta', 'Marcos', 'Felipe'];

for (fora of filaDeFora) {
  if (filaDeDentro.length < 5) {
    filaDeDentro.push(filaDeFora.shift());
  }
}

console.log(filaDeDentro);
console.log(filaDeFora);
