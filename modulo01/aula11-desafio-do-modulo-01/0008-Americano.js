const numeros = [1, 3, 2, 1];

const soma = numeros.reduce((a, b) => a + b);

// incrementa a posição em 1
let pos = 1;
for (let index = 1; index <= soma; index++) {
  pos++;
  // se a possição for maior que o array retorna a zero
  if (pos > numeros.length) {
    pos = 0;
  }
}
// faz a checagem se a soma é maior que o array
if (soma > numeros.length) {
  console.log(pos);
} else {
  console.log(numeros.length);
}

// não está passando em todos os casos de teste e não consigo identificar o problema
// passa na maioria mas em 3 testes da erro
