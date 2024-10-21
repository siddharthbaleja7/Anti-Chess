const Board = require('../models/Board');
const Piece = require('../models/Piece');
const InputHandler = require('../utils/InputHandler');

class AntiChess {
    constructor(board, currentPlayer) {
        this.board = board;
        this.currentPlayer = currentPlayer;
    }

    switchTurn() {
        this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white';
    }

    isValidMove(fromRow, fromCol, toRow, toCol) {
        const piece = this.board.getPiece(fromRow, fromCol);
        const destinationPiece = this.board.getPiece(toRow, toCol);

        // Check if there's a piece at the source position
        if (!piece) {
            console.log("No piece at the source.");
            return false;
        }

        // Check if the current player is moving their own piece
        if (piece.color !== this.currentPlayer) {
            console.log(`It's ${this.currentPlayer}'s turn, not ${piece.color}'s turn.`);
            return false;
        }

        // Example of a simple movement rule (no advanced chess rules here)
        const isMoveValid = Math.abs(fromRow - toRow) === 2 || Math.abs(fromRow - toRow) === 1;

        // Check for capture
        if (destinationPiece && destinationPiece.color !== this.currentPlayer) {
            console.log(`${this.currentPlayer} captures ${destinationPiece.color}!`);
            this.board.setPiece(toRow, toCol, piece); // Move piece to the destination
            this.board.removePiece(fromRow, fromCol); // Remove from original position
            return true;
        }

        // Standard move if no piece in the destination
        if (isMoveValid && !destinationPiece) {
            this.board.setPiece(toRow, toCol, piece); // Move piece
            this.board.removePiece(fromRow, fromCol); // Clear original spot
            return true;
        }

        console.log("Invalid move.");
        return false;
    }
}

// Initialize board and pieces
const board = new Board();

// Set up pieces
board.setPiece(6, 4, new Piece('white')); // e2 -> row 6, col 4 (White Pawn)
board.setPiece(1, 4, new Piece('black')); // e7 -> row 1, col 4 (Black Pawn)

// Initialize game
const game = new AntiChess(board, 'white');

// Initialize input handler
const inputHandler = new InputHandler(game);

// Test some moves
console.log("Testing valid moves:");
inputHandler.handleInput('e2 e4');  // Valid move for white pawn
inputHandler.handleInput('e7 e5');  // Invalid: not black's turn

// Switch turns
game.switchTurn();
console.log("Testing valid moves after turn switch:");
inputHandler.handleInput('e7 e5');  // Valid now

console.log("Testing capture move logic:");
inputHandler.handleInput('e5 e4');  // Black captures white's piece

module.exports = AntiChess;
