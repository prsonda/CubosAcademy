const letras = ['A', 'a', 'B', 'C', 'E', 'e'];

let soma = 0;
for (i = 0; i < letras.length; i++) {
  if (letras[i] == 'E' || letras[i] == 'e') {
    soma += 1;
  }
}

if (soma > 0) {
  console.log(`Foram encontradas ${soma} letras "E" ou "e".`);
} else {
  console.log('Nenhuma letra "E" ou "e" foi encontrada.');
}
