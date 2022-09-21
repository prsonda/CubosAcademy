const resultados = ['V', 'E', 'V', 'E'];

let soma = 0;

for (let resultado of resultados) {
  if (resultado === 'V') {
    soma += 3;
  } else if (resultado === 'E') {
    soma += 1;
  }
}

console.log(soma);
