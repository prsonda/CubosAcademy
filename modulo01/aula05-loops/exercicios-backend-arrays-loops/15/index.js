const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

// primeira opção
for (n of original) {
  if (n % 2 == 0) {
    pares.push(n);
  } else {
    impares.push(n);
  }
}

console.log(pares);
console.log(impares);

// segunda opção
const par = [];
const impar = [];

let contador = 0;
while (contador < original.length) {
  if (original[contador] % 2 == 0) {
    par.push(original[contador]);
  } else {
    impar.push(original[contador]);
  }
  contador++;
}

console.log();
console.log(par);
console.log(impar);

// terceira opção
const par1 = [];
const impar1 = [];

for (let n = 0; n < original.length; n++) {
  if (original[n] % 2 == 0) {
    par1.push(original[n]);
  } else {
    impar1.push(original[n]);
  }
}

console.log();
console.log(par1);
console.log(impar1);
