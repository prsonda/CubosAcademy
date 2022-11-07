const prompt = require("prompt-sync")();

const Alarm = require("./Alarme");

/*  ======================================= MAIN PROGRAM ================================================    */

console.log('Digite os valores pedidos em segundos para: ')

const tempoParaAlarmar = Number( prompt('Tempo para alarmar: '     ))
const tempoAlarmando = Number( prompt('Tempo alarmando: '        ) )
const tempoEmSoneca = Number( prompt('Tempo em sonecas: '       ) )
const quantidadeDeSonecas = Number( prompt('Quantidade de de sonecas: '))

console.clear() // limpar terminal

Alarm(tempoParaAlarmar, tempoAlarmando, tempoEmSoneca, quantidadeDeSonecas) // inicia alarme com os parametros passados

/*  ======================================= MAIN PROGRAM ================================================   */

