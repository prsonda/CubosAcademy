const nota = 8.5;

if (nota < 4) {
  let notaConvertida = 'E';
  console.log(`O estudando obteve conceito ${notaConvertida}`);
} else if (nota >= 4 && nota < 6) {
  let notaConvertida = 'D';
  console.log(`O estudando obteve conceito ${notaConvertida}`);
} else if (nota >= 6 && nota < 8) {
  let notaConvertida = 'C';
  console.log(`O estudando obteve conceito ${notaConvertida}`);
} else if (nota >= 8 && nota < 9) {
  let notaConvertida = 'B';
  console.log(`O estudando obteve conceito ${notaConvertida}`);
} else if (nota >= 9 && nota < 10) {
  let notaConvertida = 'A';
  console.log(`O estudando obteve conceito ${notaConvertida}`);
}
