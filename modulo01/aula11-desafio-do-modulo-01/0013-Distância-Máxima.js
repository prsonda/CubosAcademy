// formula da hipotenusa c² = a² + b²

const input = '5 3.56,17 -5.1,36.3 0.0002,-2 5,5 -9.01,-17.7';

const entrada = input.trim().split(' ');

const base = entrada[0];

const coordenadas = [];

// adiciona as coordenadas na variável coordenadas
for (let index = 1; index < entrada.length; index++) {
  const element = entrada[index].split(',');
  coordenadas.push([parseFloat(element[0]), parseFloat(element[1])]);
}

let maximo = 0;

// pega a maior distancia atravez da multiplicação e soma das coordenadas
for (let i = 0; i < base; i++) {
  for (let j = i + 1; j < base; j++) {
    let x = coordenadas[i][0] - coordenadas[j][0];
    let y = coordenadas[i][1] - coordenadas[j][1];

    const result = x * x + y * y;

    maximo = Math.max(maximo, result);
  }
}

// pega a raiz quadrada das distancias
let resultado = Math.sqrt(maximo);
console.log(resultado);
