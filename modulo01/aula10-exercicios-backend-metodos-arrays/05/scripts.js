const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

let fila = [];

function agendarPaciente(paciente) {
  for (let i of paciente) {
    fila.push(i);
  }
}

function atenderPaciente(paciente) {
  for (let [key, valor] of paciente.entries()) {
    paciente.splice(key);
  }
}

function cancelarAtendimento(paciente) {
  for (let [key, valor] of paciente.entries()) {
    if (valor == 'Joana') {
      paciente.splice(key);
    }
  }
}

agendarPaciente(pacientes);
console.log(fila);

cancelarAtendimento(fila);
console.log(fila);

atenderPaciente(fila);
console.log(fila);
