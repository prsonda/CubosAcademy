let n = [5, 1, 7, 10, 8];

let menor = n[0];

for (i of n) {
  if (i < menor) {
    menor = i;
  }
}
console.log(menor);
