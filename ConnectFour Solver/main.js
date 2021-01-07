var board = [['-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', 'R', 'R', 'R', 'R'],
['-', '-', '-', 'Y', 'Y', 'R', 'Y'],
['-', '-', '-', 'Y', 'R', 'Y', 'Y'],
['-', '-', 'Y', 'Y', 'R', 'R', 'R']];

function connectFour(board) {
    let rCoords = []
    let yCoords = []
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 'R') {
                rCoords.push([i, j])
            }
            if (board[i][j] == 'Y') {
                yCoords.push([i, j])
            }
        }
    }
    console.log("R Coords", rCoords)
    console.log("Y Coords", yCoords)
    for (let i = 1; i < rCoords.length; i++) {
        let yCoord = rCoords[i][0]
        let xCoord = rCoords[i][1]

    }
}

connectFour(board)