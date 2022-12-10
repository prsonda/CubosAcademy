var { format } = require('date-fns');

const data = new Date();

function data1(data) {
  return format(data, "dd 'de' MMMM 'de' yyyy");
}

console.log(data1(data));

function data2(data) {
  return format(data, 'dd/MM/yyyy');
}

console.log(data2(data));

function data3(data) {
  return format(data, 'dd MMM');
}

console.log(data3(data));

function data4(data) {
  return format(data, 'dd MMM yyyy');
}

console.log(data4(data));

function data5(data) {
  return format(data, "dd 'de' MMM 'de' yyyy");
}

console.log(data5(data));

function data6(data) {
  return format(data, 'dd/MMM');
}

console.log(data6(data));
