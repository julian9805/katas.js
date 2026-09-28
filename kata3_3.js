// Tareas en kata3_3.js:
// 1. Define la fila alcanzada por un peón blanco: const filaAlcanzada = 8;.
// 2. Evalúa con el operador ternario si el peón ha promocionado: const figuraFinal = (filaAlcanzada === 8) ? '♕'
//     : '♙';.
// 3. Crea una función promocionar() que reemplace el texto de la casilla en el HTML usando textContent.
// 4. Asigna la acción a un botón mediante addEventListener('click', promocionar).


//Me creo dinamicamente los elementos al hacer click en el boton para no tener que crearlos en el HTML a mano
const botonEstado = document.getElementById("estado");

botonEstado.addEventListener("click", function(){
    const tablero = document.createElement("div");
    const elemento = document.createElement("span");
    const boton = document.createElement("button");

    boton.textContent = "Promocionar";

    tablero.appendChild(elemento);
    tablero.appendChild(boton);

    document.body.appendChild(tablero);

    const filaAlcanzada = 8;

    function promocionarPeon() {
    // Operador Ternario: condicion ? valorTrue : valorFalse
        const piezaResultado = (filaAlcanzada === 8) ? "♕" : "♙";
        if (elemento) {
            elemento.textContent = piezaResultado;
        }
        console.log(`¡Promoción ejecutada! Nueva pieza: ${piezaResultado}`);
    }
    if (boton) {
        boton.addEventListener("click", promocionarPeon);
    }

})






