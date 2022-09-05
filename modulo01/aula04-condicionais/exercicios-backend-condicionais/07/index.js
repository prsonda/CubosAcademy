const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui

const corte = 28559.7;

if (aposentada || portadoraDeDoenca) {
  console.log('ISENTA');
} else if (totalDeRendimentos <= corte) {
  console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE');
} else {
  console.log('PEGA LEAO');
}
