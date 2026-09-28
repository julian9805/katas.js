const turnoBlancas = true
const reyEnJaque = false
const reyMovido = false

const puedeEnrocar = turnoBlancas && !reyEnJaque && !reyMovido

const statusDisplay = document.getElementById("status-display");

if (statusDisplay) {
    statusDisplay.textContent = puedeEnrocar ? "Movimiento legal: El Rey blanco (♔) puede realizar el enroque corto."
        : "Enroque no permitido en la posición actual."
}






