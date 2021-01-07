export function Cell(xPos, yPos, piece = null) {
    this.xPos = xPos
    this.yPos = yPos
    this.isEmpty = piece == null
    this.piece = piece
    this.active = false
}