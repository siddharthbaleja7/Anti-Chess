class Board {
  constructor() {
    this.board = this.createBoard();
  }


  createBoard() {
    return Array(8).fill(null).map(() => Array(8).fill(null));
  }


  getPiece(row, col) {
    if (this.isValidPosition(row, col)) {
      return this.board[row][col];
    }
    return null;
  }


  setPiece(row, col, piece) {
    if (this.isValidPosition(row, col)) {
      this.board[row][col] = piece;
    }
  }


  removePiece(row, col) {
    if (this.isValidPosition(row, col)) {
      this.board[row][col] = null;
    }
  }

  isValidPosition(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }
}

module.exports = Board;
