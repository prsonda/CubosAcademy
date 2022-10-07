const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const fila = [];

for (let paciente of pacientes) {
  // se o nome do paciente começar com J ele será atendido e removido da lista
  if (paciente[0] !== 'J') {
    fila.push(paciente);
  }
}

console.log(fila);
