const numeros = [1, 3, 2, 1];

const soma = numeros.reduce((a, b) => a + b);

let pos = 1;
for (let index = 1; index <= soma; index++) {
  pos++;
  if (pos > numeros.length) {
    pos = 0;
  }
}

if (soma > numeros.length) {
  console.log(pos);
} else {
  console.log(numeros.length);
}
