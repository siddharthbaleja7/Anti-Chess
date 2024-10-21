class Board {
  constructor() {
    // Initialize the 8x8 board with pieces
    this.board = this.createBoard();
  }

  // Method to create an 8x8 board (example setup)
  createBoard() {
    return Array(8).fill(null).map(() => Array(8).fill(null));
  }

  // Method to get the piece at a specific position on the board
  getPiece(row, col) {
    if (this.isValidPosition(row, col)) {
      return this.board[row][col];
    }
    return null;
  }

  // Method to set a piece at a specific position on the board
  setPiece(row, col, piece) {
    if (this.isValidPosition(row, col)) {
      this.board[row][col] = piece;
    }
  }

  // Method to remove a piece from a specific position on the board
  removePiece(row, col) {
    if (this.isValidPosition(row, col)) {
      this.board[row][col] = null; // Clear the piece at the specified position
    }
  }

  // Helper method to check if the position is valid on the board
  isValidPosition(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }
}

module.exports = Board;
