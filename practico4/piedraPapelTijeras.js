function obtenerJugadaComputadora() {
    let numeroRandom = Math.floor(Math.random() * 3);
    let eleccionComputadora;
switch (numeroRandom){
    case 0:
        eleccionComputadora = "piedra";
        break;
    
    case 1:
    eleccionComputadora = "papel";
    break;

    case 2:
        eleccionComputadora = "tijeras";

    }
    return eleccionComputadora;
}

function obtenerJugadaUsuario(){
    const readlineSync = require('readline-sync');
    let eleccionUsuario = readlineSync.question("Elija: piedra, papel o tijeras");
    eleccionUsuario = eleccionUsuario.toLowerCase();
    while (eleccionUsuario !== "piedra" && eleccionUsuario !== "papel" && eleccionUsuario !== "tijeras"){
        const readlineSync = require('readline-sync');
        let eleccionUsuario2 = readlineSync.question("Su ingreso es invalido, elija: piedra, papel o tijeras");
        eleccionUsuario = eleccionUsuario2;
    }     
    return eleccionUsuario;
}

function determinarGanador(obtenerJugadaComputadora, obtenerJugadaUsuario) {
    let resultado;
    if (obtenerJugadaComputadora === obtenerJugadaUsuario){
        resultado = "Empate";
    }else if ((obtenerJugadaComputadora === "piedra" && obtenerJugadaUsuario === "tijeras") || (obtenerJugadaComputadora === "papel" && obtenerJugadaUsuario === "piedra") || (obtenerJugadaComputadora === "tijeras" && obtenerJugadaUsuario === "papel")){
        resultado = "Gana la computadora";
    }else{
        resultado = "Gana el usuario";
    }
    return resultado;
}

let computadora = obtenerJugadaComputadora();
let usuario = obtenerJugadaUsuario();
let ganador = determinarGanador(computadora, usuario);

console.log("La computadora eligio: %s.", computadora);
console.log("El usuario eligio: %s.", usuario);
console.log("El resultado fue: %s.", ganador);



