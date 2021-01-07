import { Board } from './modules/Board.mjs'

const gameBoard = new Board()
gameBoard.initializeBoard()
let boardState = gameBoard.getBoard()

const clientBoard = document.getElementById('chess__board')

for (let i = 0; i < 8; i++) {
    let mod = 0;
    for (let j = 0; j < 8; j++) {
        const tempDiv = document.createElement('div')
        tempDiv.classList.add('cell')
        if (boardState[i][j].path) {
            let img = document.createElement('img')
            img.classList.add('img')
            img.src = `${boardState[i][j].path}`
            tempDiv.append(img)
        }
        (j + mod) % 2 == 0 ? tempDiv.classList.add('white') : tempDiv.classList.add('black')
        clientBoard.append(tempDiv)
    }
    mod = (mod + 1) % 2
}
