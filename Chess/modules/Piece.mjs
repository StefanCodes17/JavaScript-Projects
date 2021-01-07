const generateMoves = {
    'P': (x, y, board, color, hasMoved) => {
        const possMoves = []
        if (color == 'white') {
            possMoves.push([x - 1, y])
            !hasMoved ? possMoves.push([x - 2, y]) : null
            if ((y - 1) >= 0 && board[x - 1][y - 1].piece && board[x - 1][y - 1].piece.color != color) {
                possMoves.push([x - 1, y - 1])
            }
            if ((y + 1) >= 0 && board[x - 1][y + 1].piece && board[x - 1][y + 1].piece.color != color) {
                possMoves.push([x - 1, y + 1])
            }
        }
        return possMoves
    }
}

export function Piece(xPos, yPos, p, color) {

    this.xPosition = xPos
    this.yPosition = yPos
    this.possibleMoves = []
    this.active = false
    this.path = `./assets/${color}${p}.svg`
    this.color = color
    this.hasMoved = false


    this.getPos = () => {
        return { xPos, yPos }
    }
    this.getPossMoves = (board) => {
        return generateMoves[p](this.xPosition, this.yPosition, board, color, this.hasMoved)
    }
}