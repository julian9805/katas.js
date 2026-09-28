// Tareas en kata3_2.js:
// 1. Crea una variable piezaSeleccionada con una figura Unicode (ej. '♞').
// 2. Evalúa la pieza con switch(piezaSeleccionada) describiendo la regla de movimiento para: ♔ (Rey), ♛
// (Dama), ♖ (Torre), ♝ (Alfil), ♞ (Caballo) y ♟ (Peón).

const piezaSeleccionada = "♞";
let reglaMovimiento = "";

switch (piezaSeleccionada){
    case "♔", "♚":
        reglaMovimiento = "El rey mueve una casilla en cualquier direccion";
        break;
    case "♕", "♛":
        reglaMovimiento = "La dama mueve en cualquier direccion las casillas que quiera";
        break;
    case "♖", "♜":
        reglaMovimiento = "La torre mueve en cualquier direccion excepto diagonal, las casillas que quiera";
        break;
    case "♗", "♝":
        reglaMovimiento = "El alfil mueve solo en diagonal, las casillas que quiera";
        break;
    case "♘", "♞":
        reglaMovimiento = "Se mueve en L: dos casillas y una perpendicular.";
        break;
    case "♙", "♟":
        reglaMovimiento = "El peon avanza solo una casilla hacia adelante excepto en el primer movimiento que puede moverse dos casillas";
        break;
    default:
        reglaMovimiento = "Pieza no seleccionada o tipo desconocido";
}

console.log(`Regla para ${piezaSeleccionada}: ${reglaMovimiento}`);
