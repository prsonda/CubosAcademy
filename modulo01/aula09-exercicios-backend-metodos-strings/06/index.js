const celular = 7199918888;

const comDDD = 11;
const semDDD = 9;

const celularString = String(celular);
const tamanhoCelular = String(celular).length;

if (tamanhoCelular === comDDD) {
  let mascara = /(\d{2})(\d{1})(\d{4})(\d{4})/;
  console.log(celularString.replace(mascara, '($1) $2 $3-$4'));
} else if (tamanhoCelular === comDDD - 1) {
  let mascara = /(\d{2})(\d{4})(\d{4})/;
  console.log(celularString.replace(mascara, '($1) 9 $2-$3'));
} else if (tamanhoCelular === semDDD) {
  let mascara = /(\d{1})(\d{4})(\d{4})/;
  console.log(celularString.replace(mascara, '$2 $3-$4'));
} else if (tamanhoCelular === semDDD - 1) {
  let mascara = /(\d{4})(\d{4})/;
  console.log(celularString.replace(mascara, '9 $2-$3'));
}
