const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

let grupo1 = '';
let grupo2 = '';

for (let index = 0; index < nomes.length; index++) {
  const element = nomes[index];
  if (index < tamanhoDoGrupo) {
    if (index === tamanhoDoGrupo - 1) {
      grupo1 += element + '.';
    } else {
      grupo1 += element + ', ';
    }
  } else {
    if (index === nomes.length - 1) {
      grupo2 += element + '.';
    } else {
      grupo2 += element + ', ';
    }
  }
}

console.log(`Grupo 1: ${grupo1}`);
console.log(`Grupo 2: ${grupo2}`);
