const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

let frutasString = '';

for (let index = 0; index < frutas.reverse().length; index++) {
  const element = frutas[index];

  if (index === frutas.length - 1) {
    frutasString += element;
  } else {
    frutasString += element + ', ';
  }
}

console.log(frutasString);
