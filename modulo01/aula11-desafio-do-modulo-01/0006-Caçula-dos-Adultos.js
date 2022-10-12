const lista = [12, 18, 27];

lista.sort((a, b) => a - b);

let permitidos = [];

for (const idade of lista) {
  if (idade >= 18) {
    permitidos.push(idade);
  }
}

if (permitidos.length > 0) {
  console.log(permitidos[0]);
} else {
  console.log('CRESCA E APARECA');
}
