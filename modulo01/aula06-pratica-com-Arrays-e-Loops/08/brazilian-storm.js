const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

notas.sort(function (a, b) {
  return a - b;
});

notas.pop();
notas.shift();

const totalNotas = notas.length;
let soma = 0;
let media = 0;
for (let nota of notas) {
  soma += nota;
}

media = soma / totalNotas;

console.log(media);
