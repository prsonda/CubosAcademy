const lista = [2, 3, 4];

let soma = 0;
for (const item of lista) {
  soma += item;
}

let media = soma / lista.length;

console.log(media);
