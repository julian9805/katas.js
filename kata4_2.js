// Instrucciones: En un archivo kata4_2.js:
// 1. Define un array con las columnas: const COLUMNAS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];.
// 2. Usa un bucle exterior para recorrer las filas (de 8 a 1) y un bucle interior para las columnas (de 0 a 7).
// 3. Calcula si la casilla es clara u oscura con la expresión (fila + columnaIndex) % 2 === 0.
// 4. Muestra en la consola la coordenada completa (ej. e4) y su color correspondiente.

const COLUMNAS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let casillas = 0;

for (let fila = 1; fila <= 8; fila++){
    for (let colIndex = 0; colIndex < COLUMNAS.length; colIndex++){
        const columna = COLUMNAS[colIndex];
        const coordenada = `${columna} ${fila}`;
        const esClara = (fila + colIndex) % 2 === 0;
        const tipoCasilla = esClara ? "Clara" : "Oscura";
        console.log(`Casilla ${coordenada}, Color: ${tipoCasilla}`);
        casillas++;
    }
}

console.log(`Recorrido finalizado. Total de casillas: ${casillas}`);