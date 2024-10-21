class Piece {
  constructor(color) {
    this.color = color;  // 'white' or 'black'
  }

  // Additional methods for piece-specific movement can go here
  // For example, you could add `isValidMove` specific to pawns, rooks, etc.
}

module.exports = Piece;
