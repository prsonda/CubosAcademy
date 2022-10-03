let numero = '1,354,423';

function alteraTexto(original, texto, novoTexto) {
  for (i of original) {
    original = original.replace(texto, novoTexto);
  }
  return original;
}

numero = alteraTexto(numero, ',', '.');

console.log(numero);
