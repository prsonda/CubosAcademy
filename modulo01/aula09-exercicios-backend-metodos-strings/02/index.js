const cpf = '12345678900';
const cnpj = '12345678900';

const tamanhoCPF = cpf.length;

const tamanhoCNPJ = cnpj.length;

if (tamanhoCPF === 11) {
  let mascara = /(\d{3})(\d{3})(\d{3})(\d{2})/;
  console.log(cpf.replace(mascara, '$1.$2.$3-$4'));
} else {
  console.log('CPF Inválido');
}

if (tamanhoCNPJ === 14) {
  // 12.345.678/0001-99
  let mascara = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;
  console.log(cnpj.replace(mascara, '$1.$2.$3/$4-$5'));
} else {
  console.log('CNPJ Inválido');
}
