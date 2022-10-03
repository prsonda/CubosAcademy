let contador = 0;

let num = 0;

while (contador < 100) {
  num += 1;
  alterado = String(num).padStart(3, '000');
  console.log(alterado);
  contador += 1;
}
