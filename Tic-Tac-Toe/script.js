let player1 = {
    name: 'Player1',
    mark: 'X',
}
let player2 = {
    name: 'Player2',
    mark: 'O',
}
let players = [player1, player2]
let count = 0
let gameArray = []

let gameContainer = document.getElementById('game__container')
let resetButton = document.getElementById('btn__reset')

populateGameArray()
addClick()

const activePlayerCont = document.getElementById('players')
activePlayerCont.innerHTML = `Active Player: ${players[count % 2].name}`

resetButton.addEventListener('click', () => {
    location.reload()
})

function handleClick(gridItem, gameArray, player) {
    if (gridItem.children.length < 1) {
        let cWin = checkWin(gameArray)
        if (cWin.win || cWin.tie) {
            if (cWin.win) {
                activePlayerCont.innerHTML = `${players[count % 2].name} has won!!`
            }
            if (cWin.tie) {
                activePlayerCont.innerHTML = `Its a tie!!`
            }
        } else {
            let mark = document.createElement('div')
            mark.innerHTML = player.mark
            mark.classList.add('mark')
            gameArray[parseInt(gridItem.id)].append(mark)
            count++
            activePlayerCont.innerHTML = `Active Player: ${players[count % 2].name}`
        }

    } else {
        activePlayerCont.innerHTML = 'Field has already been used'
    }
}

function populateGameArray() {
    for (let i = 0; i < 9; i++) {
        gridItem = document.createElement('div')
        gridItem.classList.add('grid__item')
        gridItem.id = i
        gameArray.push(gridItem)
        gameContainer.append(gridItem)
    }
}

function addClick() {
    for (let i = 0; i < 9; i++) {
        gameArray[i].addEventListener('click', () => { handleClick(gameArray[i], gameArray, players[count % 2]) })
    }
}

function checkWin(arr) {
    tempArr = []
    arr.forEach(item => {
        let tempMark = document.createElement('div')
        let mark = item.children[0] ? item.children[0] : tempMark
        tempArr.push(mark.innerHTML)
    })
    function checkRows(arr) {
        for (let i = 0; i < arr.length; i += 3) {
            row = arr.slice(i, i + 3)
            test = row[0]
            if (row.every((x) => x == test && x != '')) return true
        }
        return false
    }

    function checkCols(arr) {
        for (let i = 0; i < 3; i++) {
            col = [arr[i], arr[i + 3], arr[i + 6]]
            test = col[0]
            if (col.every((x) => x == test && x != '')) return true
        }
        return false
    }
    function checkDiag(arr) {
        //First Diagonal
        fDiag = [arr[0], arr[4], arr[8]]
        test = fDiag[0]
        if (fDiag.every((x) => x == test && x != '')) return true
        //Second Diagonal
        sDiag = [arr[2], arr[4], arr[6]]
        test = sDiag[0]
        if (sDiag.every((x) => x == test && x != '')) return true
        return false
    }
    function checkTie(arr) {
        return arr.every((elem) => elem != '')
    }
    return { win: checkRows(tempArr) || checkCols(tempArr) || checkDiag(tempArr), tie: checkTie(tempArr) }
}

