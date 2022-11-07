let counter = 0, idAlarm = null

/** creates a timer to be activated on {timeToAlarm} seconds
 * @param {Number}   timeToAlarm    tempo, em segundos, que o alarme vai demorar para ser ativado(para mostrar beep na tela).
 * @param {Number}   timeAlarming   tempo, em segundos, que o alarme vai se manter ativo(prnumberando beep na tela) .
 * @param {Number}   timeInNaps     tempo, em segundos, que o alarme se mantera inativo antes de começar um novo ciclo
 * @param {Number}   numberOfNaps   quantidade de vezes que o alarme devera ser reativado
 */

function Alarm(timeToAlarm, timeAlarming, timeInNaps, numberOfNaps) {
    const timeToAlarmEmMilessegundos = SecondsToMilliseconds(timeToAlarm)

    console.log(`O alarme sera ativado em ${timeToAlarm} segundos`)
    setTimeout(TurnOnAlarm,timeToAlarmEmMilessegundos, timeToAlarm, timeAlarming, timeInNaps, numberOfNaps)
}

/** create alarm
 * @param {Number}   timeToAlarm    tempo, em segundos, que o alarme vai demorar para ser ativado(para mostrar beep na tela).
 * @param {Number}   timeAlarming   tempo, em segundos, que o alarme vai se manter ativo(prnumberando beep na tela) .
 * @param {Number}   timeInNaps     tempo, em segundos, que o alarme se mantera inativo antes de começar um novo ciclo
 * @param {Number}   numberOfNaps   quantidade de vezes que o alarme devera ser reativado
 */
function TurnOnAlarm(timeToAlarm, timeAlarming, timeInNaps, numberOfNaps){
    counter = 0
    const OneSecond = SecondsToMilliseconds(1) 
    idAlarm = setInterval(ActiveAlarm, OneSecond, timeToAlarm, timeAlarming, timeInNaps, numberOfNaps )
}

/** active alarm
 * @param {Number}   timeToAlarm    tempo, em segundos, que o alarme vai demorar para ser ativado(para mostrar beep na tela).
 * @param {Number}   timeAlarming   tempo, em segundos, que o alarme vai se manter ativo(prnumberando beep na tela) .
 * @param {Number}   timeInNaps     tempo, em segundos, que o alarme se mantera inativo antes de começar um novo ciclo
 * @param {Number}   numberOfNaps   quantidade de vezes que o alarme devera ser reativado
 */
function ActiveAlarm(timeToAlarm, timeAlarming, timeInNaps, numberOfNaps) {
    
    if (counter === timeAlarming) {
        
        if(numberOfNaps > 0){
            const timeInNapsEmSegundos = SecondsToMilliseconds(timeInNaps)

            console.log(`Soneca ativada por ${timeInNaps} segundos`);
            
            setTimeout(TurnOnAlarm, timeInNapsEmSegundos, timeToAlarm, timeAlarming, timeInNaps, numberOfNaps - 1)
        }
        else{
            console.log(`Alarme terminado`)
        }

        return clearInterval(idAlarm)
    }
    
    console.log('BEEP BEEP')
    counter++
}

/** Transform seconds in milliseconds
 * @param   {Number}  seconds time in seconds.
 * @return  {Number}  time in milliseconds.
 */
function SecondsToMilliseconds(seconds) {
    const milliseconds = seconds * 1000
    return milliseconds
}
 
module.exports = Alarm