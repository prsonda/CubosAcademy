const input =
  'cONSIDERAMOS QUE UMA PALAVRA FOI ESCRITA COM cAPS lOCK SE OU TODAS AS SUAS LETRAS FOREM MAIÚSCULAS OU SE A PRIMEIRA FOR MINÚSCULA E TODAS AS OUTRAS MAIÚSCULAS. a CORREÇÃO NESSES CASOS É INVERTER TODAS AS LETRAS.';

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';

const lista = input.split(' ');

let texto = '';

for (const palavra of lista) {
  let comeco = '';
  let resto = '';

  let achei = false;
  bloco: {
    for (const letra of alfabeto) {
      if (palavra.includes(letra)) {
        achei = true;
        break bloco;
      }
    }
  }
  if (palavra === palavra.toUpperCase()) {
    texto += palavra.toLowerCase() + ' ';
  } else if (achei === true) {
    comeco = palavra.slice(0, 1).toUpperCase();
    resto = palavra.slice(1).toLowerCase();
    texto += comeco + resto + ' ';
  } else {
    texto += palavra + ' ';
  }
}

console.log(texto.trim());
