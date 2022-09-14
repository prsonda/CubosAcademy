const precos = [30, 10, 54, 76, 1, 4, 35];

const anos = precos.length;

let ano = 0;
let contador = 1;

let valorDiferenca = precos.reduce(function (a, b) {
  return Math.max(a, b);
}, -Infinity);

while (ano < anos) {
  while (contador < anos) {
    let diferenca = precos[ano] - precos[contador];
    if (diferenca < valorDiferenca && diferenca > 0) {
      valorDiferenca = diferenca;
    }
    contador++;
  }
  ano++;
  contador = ano + 1;
}
console.log(valorDiferenca);
