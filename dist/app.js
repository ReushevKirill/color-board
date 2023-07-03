const board = document.querySelector('#board')
const colors = ['#ff7400', '#1a1eb2', '#ffe800', '#a60800', '#41a128']
const SQUARES_NUMBERS = 1000

for (let i = 0; i < SQUARES_NUMBERS; i++) {

    const square = document.createElement('div')

    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() { 
    return colors[Math.floor(Math.random() * colors.length)]
}