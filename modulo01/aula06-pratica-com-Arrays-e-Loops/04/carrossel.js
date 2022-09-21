const sequencia = '>>><>';

let soma = 0;
for (let i = 0; i < sequencia.length; i++) {
  if (sequencia[i] === '>') {
    soma += 1;
  } else if (sequencia[i] === '<') {
    soma -= 1;
  }
}
if (soma > 6) {
  let vezes = (soma / 7) | 0;
  soma -= 7 * vezes;
  console.log(soma);
} else if (soma < 0) {
  if (soma < -7) {
    let vezes = (soma / -7) | 0;
    soma += 7 * vezes;
    soma = soma + 7;
    console.log(soma);
  } else {
    soma += 7;
    console.log(soma);
  }
} else {
  console.log(soma);
}
