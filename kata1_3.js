
const $p = document.createElement('p')
const $button = document.createElement('button')
const $div = document.querySelector('.tablero')


$p.setAttribute('id', 'casilla')
$button.setAttribute('id', 'btn-mover')

$div.appendChild($p)
$div.appendChild($button)

$button.textContent = 'Mover'

const casillaElemento = document.getElementById('casilla')
const botonMover = document.getElementById('btn-mover')

function  colocarPieza(){
    const caballo = "♘"
    casillaElemento.textContent = `Casilla e4 ocupada por: ${caballo}`
}
botonMover.addEventListener('click', colocarPieza)



