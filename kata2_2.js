let numeroJugada = 7

const esTurnoBlancas = (numeroJugada % 2 !== 0)

const puntosBlancas = 15
const puntosNegras = 10
const ventajaClara = (puntosBlancas - puntosNegras) >= 3

console.log(`Es turno de las blancas: ${esTurnoBlancas}, Existe una ventaja clara: ${ventajaClara}`)

