const Board = require('./src/models/Board.js');
const Piece = require('./src/models/Piece.js');
const AntiChess = require('./src/game/AntiChess.js');
const InputHandler = require('./src/utils/InputHandler.js');

// Initialize board and pieces
const board = new Board();

// Set up some pieces (example: white pawn at e2, black pawn at e7)
board.setPiece(6, 4, new Piece('white')); // e2 -> row 6, col 4
board.setPiece(1, 4, new Piece('black')); // e7 -> row 1, col 4

// Initialize the game (white's turn first)
const game = new AntiChess(board, 'white');

// Initialize input handler
const inputHandler = new InputHandler(game);

// Test some inputs
console.log("Testing valid moves:");
inputHandler.handleInput('e2 e4');  // Should be valid move for white pawn
inputHandler.handleInput('e7 e5');  // Invalid because it's not black's turn

// Switch turns and test again
game.currentPlayer = 'black';
console.log("Testing valid moves after turn switch:");
inputHandler.handleInput('e7 e5');  // Should be valid now

console.log("Testing capture move logic:");
inputHandler.handleInput('e5 e4');  // Should check for capture move rules
