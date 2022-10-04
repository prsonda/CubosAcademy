const texto = 'Aprenda programar do zero na Cubos Academy';

let arrayTexto = texto.toLowerCase().split(' ');
let urlAmigavel = '';

for (let index = 0; index < arrayTexto.length; index++) {
  const element = arrayTexto[index];
  if (index === arrayTexto.length - 1) {
    urlAmigavel += element;
  } else {
    urlAmigavel += element + '-';
  }
}

console.log(urlAmigavel);
