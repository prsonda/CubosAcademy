const precos = [100, 500, 100, 200, 50];

const tamanho = precos.length;

let soma = 0;

if (tamanho >= 5) {
  precos.sort(function (a, b) {
    return a - b;
  });
  precos.shift();
  for (let preco of precos) {
    soma += preco;
  }
  console.log(soma);
} else {
  for (let preco of precos) {
    soma += preco;
  }
  console.log(soma);
}
