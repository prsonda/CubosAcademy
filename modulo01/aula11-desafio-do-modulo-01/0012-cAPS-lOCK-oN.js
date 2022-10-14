const input =
  'cONSIDERAMOS QUE UMA PALAVRA FOI ESCRITA COM cAPS lOCK SE OU TODAS AS SUAS LETRAS FOREM MAIÚSCULAS OU SE A PRIMEIRA FOR MINÚSCULA E TODAS AS OUTRAS MAIÚSCULAS. a CORREÇÃO NESSES CASOS É INVERTER TODAS AS LETRAS.';

const lista = input.split(' ');

let texto = '';

for (const palavra of lista) {
  let comeco = palavra.slice(0, 1);
  let resto = palavra.slice(1);

  if (palavra === palavra.toUpperCase()) {
    texto += palavra.toLowerCase() + ' ';
  } else if (comeco === comeco.toLowerCase() && resto === resto.toUpperCase()) {
    comeco = palavra.slice(0, 1).toUpperCase();
    resto = palavra.slice(1).toLowerCase();
    texto += comeco + resto + ' ';
  } else {
    texto += palavra + ' ';
  }
}

console.log(texto.trim());
