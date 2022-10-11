const lista = [10, 5, 20];

function solucao(numero, limiteInferior, limiteSuperior) {
  if (numero >= limiteInferior && numero <= limiteSuperior) {
    console.log('PERTENCE');
  } else {
    console.log('NAO PERTENCE');
  }
}

solucao(lista[0], lista[1], lista[2]);
