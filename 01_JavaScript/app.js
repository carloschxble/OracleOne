//Funcion
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//Variables
let numeroMaximoPosible = 20;
let numeroSecreto = getRandomArbitrary(1, numeroMaximoPosible);
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

console.log(numeroSecreto);
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > 3) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        //No se cumplio la condicion
        //alert('Lo siento, no acertaste el numero')
    }
}