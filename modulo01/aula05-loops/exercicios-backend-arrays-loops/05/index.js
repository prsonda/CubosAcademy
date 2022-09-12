const original = [1, 4, 12, 21, 53, 88, 112];

let novo = [];
for (n of original) {
  if (n % 2 == 0) {
    novo.push(n);
  }
}
console.log(novo);
