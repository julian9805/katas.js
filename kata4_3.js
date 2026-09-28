// Instrucciones: En un archivo kata4_3.js:
// 1. Crea un array de jugadas en notación algebraica: const HISTORIAL = ['e4', 'e5', 'Nf3', '{comentario}',
//     'Nc6', 'Bc4', 'Bc5', 'Qxf7#'];.
// 2. Recorre el historial usando for (const jugada of HISTORIAL).
// 3. Si la jugada empieza por '{', usa continue para saltar la iteración sin procesarla.
// 4. Si la jugada contiene '#' (jaque mate), imprímela, notifica la victoria en pantalla usando textContent y
// usa break para terminar el bucle inmediatamente.

const HISTORIAL = ['e4', 'e5', 'Nf3', '{apertura italiana}', 'Nc6', 'Bc4', 'Qxf7#', 'd6'];
let contadorJugadasValidas = 0;

for (const jugada of HISTORIAL) {
    if(jugada.startsWith("{")){
        console.log(`[Omision] Comentario detectado: ${jugada}`);
        continue;
    }

    contadorJugadasValidas++;
    console.log(`Procesando jugada ${contadorJugadasValidas}: ${jugada}`);

    if(jugada.includes("#")){
        console.log(`JAQUE MATE detectado enn la jugada: ${jugada}. FIN DE LA PARTIDA`);
        break;
    }
}