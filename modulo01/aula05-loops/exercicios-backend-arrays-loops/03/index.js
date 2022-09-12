const numeros = [54, 22, 14, 87, 10, 284];

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 10) {
    console.log(i);
    soma += 1;
  }
}
if (soma == 0) {
  console.log('-1');
}

soma = 0;
const numero = [54, 22, 14, 87, 284];

for (let i = 0; i < numero.length; i++) {
  if (numero[i] === 10) {
    console.log(i);
    soma += 1;
  }
}
if (soma == 0) {
  console.log('-1');
}
