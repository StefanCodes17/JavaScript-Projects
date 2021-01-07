export function Cell(xPos, yPos, piece = null) {
    this.xPos = xPos
    this.yPos = yPos
    this.isEmpty = false
    this.piece = piece
    this.active = false
}