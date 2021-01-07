const checkUp = (x, y, board, color) => {
    const possMoves = []
    for (let i = x - 1; i >= 0; i--) {
        if (board[i][y].piece && board[i][y].piece.color == color) {
            break;
        }
        if (board[i][y].piece && board[i][y].piece.color != color) {
            possMoves.push([i, y])
            break;
        }
        if (!board[i][y].piece) { possMoves.push([i, y]) }
    }
    return possMoves
}
const checkDown = (x, y, board, color) => {
    const possMoves = []
    for (let i = x + 1; i <= 7; i++) {
        if (board[i][y].piece && board[i][y].piece.color == color) {
            break;
        }
        if (board[i][y].piece && board[i][y].piece.color != color) {
            possMoves.push([i, y])
            break;
        }
        if (!board[i][y].piece) { possMoves.push([i, y]) }
    }
    return possMoves
}

const checkLeft = (x, y, board, color) => {
    const possMoves = []
    for (let i = y - 1; i >= 0; i--) {
        if (board[x][i].piece && board[x][i].piece.color == color) {
            break;
        }
        if (board[x][i].piece && board[x][i].piece.color != color) {
            possMoves.push([x, i])
            break;
        }
        if (!board[x][i].piece) { possMoves.push([x, i]) }
    }
    return possMoves
}

const checkRight = (x, y, board, color) => {
    const possMoves = []
    for (let i = y + 1; i <= 7; i++) {
        if (board[x][i].piece && board[x][i].piece.color == color) {
            break;
        }
        if (board[x][i].piece && board[x][i].piece.color != color) {
            possMoves.push([x, i])
            break;
        }
        if (!board[x][i].piece) { possMoves.push([x, i]) }
    }
    return possMoves
}

const generateMoves = {
    'P': (x, y, board, color, hasMoved) => {
        const possMoves = []
        if (color == 'white') {
            board[x - 1][y].isEmpty ? possMoves.push([x - 1, y]) : null
            !hasMoved && board[x - 1][y].isEmpty && board[x - 2][y].isEmpty ? possMoves.push([x - 2, y]) : null
            if ((y - 1) >= 0 && board[x - 1][y - 1].piece && board[x - 1][y - 1].piece.color != color) {
                possMoves.push([x - 1, y - 1])
            }
            if ((y + 1) >= 0 && board[x - 1][y + 1].piece && board[x - 1][y + 1].piece.color != color) {
                possMoves.push([x - 1, y + 1])
            }
        } else {
            board[x + 1][y].isEmpty ? possMoves.push([x + 1, y]) : null
            !hasMoved && board[x + 1][y] ? possMoves.push([x + 2, y]) : null
            if ((y + 1) >= 0 && board[x + 1][y + 1].piece && board[x - 1][y - 1].piece.color != color) {
                possMoves.push([x + 1, y + 1])
            }
            if ((y - 1) >= 0 && board[x + 1][y - 1].piece && board[x + 1][y + 1].piece.color != color) {
                possMoves.push([x + 1, y - 1])
            }
        }
        return possMoves
    },
    'R': (x, y, board, color, hasMoved) => {
        let possMoves = []
        possMoves = possMoves.concat(checkUp(x, y, board, color))
        possMoves = possMoves.concat(checkDown(x, y, board, color))
        possMoves = possMoves.concat(checkLeft(x, y, board, color))
        possMoves = possMoves.concat(checkRight(x, y, board, color))
        return possMoves
    }
}

export function Piece(xPos, yPos, p, color) {

    this.xPosition = xPos
    this.yPosition = yPos
    this.possibleMoves = []
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