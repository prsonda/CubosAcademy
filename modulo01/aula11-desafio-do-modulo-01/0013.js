// formula da hipotenusa c² = a² + b²

const input = '5 3.56,17 -5.1,36.3 0.0002,-2 5,5 -9.01,-17.7';

const entrada = input.trim().split(' ');

const base = entrada[0];

const coordenadas = [];

let resultado = 0;
for (let index = 1; index < entrada.length; index++) {
  const element = entrada[index].split(',');
  coordenadas.push({
    x: parseFloat(element[0]),
    y: parseFloat(element[1]),
  });

  resultado += Math.hypot(element[0], element[1]);
  console.log(resultado);
}

let x = 0;
let y = 0;
for (const item of coordenadas) {
  x += item.x;
  y += item.y;
}

resultado += Math.hypot(x, y);

console.log(resultado);
