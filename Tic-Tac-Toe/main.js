arr = ['O', 'X', 'X', 'X', 'O', 'X', 'X', 'X', 'O']

console.log(arr)

function checkRows(arr) {
    for (let i = 0; i < arr.length; i += 3) {
        row = arr.slice(i, i + 3)
        test = row[0]
        if (row.every((x) => x == test)) return true
    }
    return false
}

function checkCols(arr) {
    for (let i = 0; i < 3; i++) {
        col = [arr[i], arr[i + 3], arr[i + 6]]
        test = col[0]
        if (col.every((x) => x == test)) return true
    }
    return false
}
function checkDiag(arr) {
    //First Diagonal
    fDiag = [arr[0], arr[4], arr[8]]
    test = fDiag[0]
    if (fDiag.every((x) => x == test)) return true
    //Second Diagonal
    sDiag = [arr[2], arr[4], arr[6]]
    test = sDiag[0]
    if (sDiag.every((x) => x == test)) return true
    return false
}


console.log(checkRows(arr))
console.log(checkCols(arr))
console.log(checkDiag(arr))