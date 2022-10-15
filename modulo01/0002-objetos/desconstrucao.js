const x = [1, 2, 3, 4];

const [y, z, ...sobra] = x;

console.log(y);
console.log(z);
console.log(sobra);

const objeto = { b: 1, c: 2, z: 3, w: 4, a: 5 };

const { b, c, ...resto } = objeto;

console.log(b);
console.log(c);
console.log(resto);
