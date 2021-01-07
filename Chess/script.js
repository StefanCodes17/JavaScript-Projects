import { Board } from './modules/Board.mjs'

const gameBoard = new Board()
gameBoard.initializeBoard()
let boardState = gameBoard.getBoard()
let pieceInHand;

const clientBoard = document.getElementById('chess__board')

//Initialize the start of the game
function generateBoard(boardState) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const tempDiv = document.createElement('div')
            tempDiv.classList.add('cell')
            if (boardState[i][j].piece) {
                let img = document.createElement('img')
                img.classList.add('img')
                img.src = `${boardState[i][j].piece.path}`
                tempDiv.append(img)
            }
            if (boardState[i][j].active) { tempDiv.classList.add('cellActive') }
            (j + i) % 2 == 0 ? tempDiv.classList.add('white') : tempDiv.classList.add('black')
            tempDiv.addEventListener('click', () => {
                gameBoard.clearMoves()
                if (boardState[i][j].piece && tempDiv.classList[1] != 'cellActive') {
                    let moves = boardState[i][j].piece.getPossMoves(boardState)
                    gameBoard.showMoves(moves)
                    clientBoard.innerHTML = ""
                    generateBoard(gameBoard.getBoard())
                    pieceInHand = boardState[i][j]
                }
                if (tempDiv.classList[1] == 'cellActive') {
                    console.log(pieceInHand, boardState[i][j])
                    gameBoard.makeMove(pieceInHand, boardState[i][j])
                    clientBoard.innerHTML = ""
                    generateBoard(gameBoard.getBoard())
                }
            })
            clientBoard.append(tempDiv)
        }
    }
}
generateBoard(boardState)