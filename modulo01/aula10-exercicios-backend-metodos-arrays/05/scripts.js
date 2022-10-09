const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

let fila = [];

function agendarPaciente(paciente) {
  for (let i of paciente) {
    fila.push(i);
  }
}

function atenderPaciente(paciente) {
  for (let i of paciente) {
    paciente.pop(i);
  }
}

function cancelarAtendimento(paciente) {
  for (let i of paciente) {
    if (i == 'Joana') {
      paciente.pop(i);
    }
  }
}

agendarPaciente(pacientes);
console.log(fila);

cancelarAtendimento(fila);
console.log(fila);

atenderPaciente(fila);
console.log(fila);
