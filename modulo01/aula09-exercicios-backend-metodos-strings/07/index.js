const email = 'jose@cubos.academy';

const indexArroba = email.indexOf('@');

const indexPonto = email.indexOf('.');

const comecaComPonto = email[0].indexOf('.');

const terminaComPonto = email.indexOf('.', email.length - 1);

if (comecaComPonto === -1 && terminaComPonto === -1) {
  if (indexArroba > -1 && indexPonto > -1) {
    console.log('E-mail válido');
  } else {
    console.log('E-mail inválido');
  }
} else {
  console.log('E-mail inválido');
}
