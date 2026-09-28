const enJaque = true
const movimientos = 50
const estadoElemento = document.getElementById("status-display")
let mensajeEstado = ""

if(movimientos >= 50){
    mensajeEstado = "Se pueden reclamar tablas por la regla de los 50 movimientos"
} else if(enJaque === true){
    mensajeEstado = "Atencion. El rey esta amenazado. Debes salir del jaque"
} else {
    mensajeEstado = "Partida en curso normal"
}

console.log(`Estado actual: ${mensajeEstado}`)
if(estadoElemento){
    estadoElemento.textContent = mensajeEstado
}


