const PEON = 1, CABALLO = 3, ALFIL = 3, TORRE = 5, DAMA = 9

let puntosBlancas = 0
let puntosNegras = 0

//Captura de una Dama y dos Peones negros
puntosBlancas += DAMA
puntosBlancas += PEON * 2

//Captura de una Torre y un Caballo blanco
puntosNegras += TORRE
puntosNegras += CABALLO

const ventaja = puntosBlancas - puntosNegras

let mensaje = ""

if (puntosBlancas > puntosNegras){
    mensaje = "Ganando las blancas"
} else{
    mensaje= "Ganando las negras"
}

console.log(`Puntos Blancas: ${puntosBlancas}, PuntosNegras: ${puntosNegras}`)
console.log(`Diferencia de puntos ${ventaja}, ${mensaje} `)