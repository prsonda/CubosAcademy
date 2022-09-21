const disparos = [0, 10, 50, 70, 80, 30];

let soma = 0;
for (let disparo of disparos) {
  if (disparo > 70) {
    soma += 1;
  }
}

if (soma >= 3) {
  console.log(soma);
} else {
  console.log('ELIMINADO');
}
