function solucao(min, max, valores) {
  let novo = [];
  for (const valor of valores) {
    if (valor >= min && valor <= max) {
      novo.push(valor);
    }
  }
  console.log(novo);
}

const min = 2;
const max = 10;
const valores = [0, 5, 6, 10, 11];

solucao(min, max, valores);
