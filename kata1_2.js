
const REY_BLANCO = "♔";
const DAMA_BLANCA = "♕";
const TORRE_BLANCA = "♖";
const CABALLO_BLANCO = "♘";
const PEON_NEGRO = "♟";

const casillasTexto = "64";
const totalCasillas = Number(casillasTexto);
const casillasPorJugador = totalCasillas / 2;

console.log(`Tablero: ${totalCasillas} casillas (${casillasPorJugador} por bando).`);
console.log(`Piezas activas: Rey ${REY_BLANCO}, Dama ${DAMA_BLANCA}, Torre ${TORRE_BLANCA}, Caballo ${CABALLO_BLANCO} frente a Peón ${PEON_NEGRO}`);

