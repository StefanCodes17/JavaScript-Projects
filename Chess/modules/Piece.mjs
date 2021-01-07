export function Piece(xPos, yPos, p, color) {

    this.xPosition = xPos
    this.yPosition = yPos
    this.possibleMoves = []
    this.active = false
    this.path = `./assets/${color}${p}.svg`
    this.color = color

    this.getPos = () => {
        return { xPos, yPos }
    }
}