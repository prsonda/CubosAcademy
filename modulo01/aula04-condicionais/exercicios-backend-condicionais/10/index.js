const caractere = 'E';

const vogais = 'A E I O U a e i o u';
const numeros = '1 2 3 4 5 6 7 9 0';
const consoante = 'bcdfghjklmnpqrstvxzBCDFGHJKLMNPQRSTVXZ';

if (vogais.indexOf(caractere) >= 0) {
  if (caractere === caractere.toUpperCase()) {
    console.log('Vogal maiúscula');
  } else if (caractere === caractere.toLowerCase()) {
    console.log('Vogal minúscula');
  }
} else if (numeros.indexOf(caractere) >= 0) {
  console.log('É um número');
} else if (consoante.indexOf(caractere) >= 0) {
  if (caractere === caractere.toUpperCase()) {
    console.log('Consoante maiúscula');
  } else if (caractere === caractere.toLowerCase()) {
    console.log('Consoante minúscula');
  }
}
