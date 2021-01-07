import { Piece } from './Piece.mjs'

export function Board() {

    this.board = []

    this.initializeBoard = () => {
        for (let i = 0; i < 8; i++) {
            const row = []
            for (let j = 0; j < 8; j++) {
                if (i == 1 || i == 6) {
                    i == 1 ? row.push(new Piece(i, j, 'P', 'black')) : null
                    i == 6 ? row.push(new Piece(i, j, 'P', 'white')) : null
                }
                if (i == 0 || i == 7) {
                    switch (j) {
                        case 0: { row.push(new Piece(i, j, 'R', i == 0 ? 'black' : 'white')); break; }
                        case 7: { row.push(new Piece(i, j, 'R', i == 0 ? 'black' : 'white')); break; }
                        case 1: { row.push(new Piece(i, j, 'K', i == 0 ? 'black' : 'white')); break; }
                        case 6: { row.push(new Piece(i, j, 'K', i == 0 ? 'black' : 'white')); break; }
                        case 2: { row.push(new Piece(i, j, 'B', i == 0 ? 'black' : 'white')); break; }
                        case 5: { row.push(new Piece(i, j, 'B', i == 0 ? 'black' : 'white')); break; }
                        case 3: { row.push(new Piece(i, j, 'Q', i == 0 ? 'black' : 'white')); break; }
                        case 4: { row.push(new Piece(i, j, 'Ki', i == 0 ? 'black' : 'white')); break; }
                    }

                }
                if (i != 1 && i != 6 && i != 0 && i != 7) {
                    row.push('')
                }
            }
            this.board.push(row)
        }
    }

    this.getBoard = () => {
        return this.board
    }

    this.printBoard = () => {
        for (let i = 0; i < 8; i++) {
            let row = ''
            for (let j = 0; j < 8; j++) {
                if (this.board[i][j].path) {
                    row += this.board[i][j].path + ' '
                } else {
                    row += 'X' + ' '
                }
            }
            console.log(row)
        }
    }
}