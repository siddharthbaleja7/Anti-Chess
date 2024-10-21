const Board = require('./src/models/Board.js');
const Piece = require('./src/models/Piece.js');
const AntiChess = require('./src/game/AntiChess.js');
const InputHandler = require('./src/utils/InputHandler.js');


const board = new Board();


board.setPiece(6, 4, new Piece('white'));
board.setPiece(1, 4, new Piece('black'));


const game = new AntiChess(board, 'white');


const inputHandler = new InputHandler(game);

// Test some inputs
console.log("Testing valid moves:");
inputHandler.handleInput('e2 e4');  
inputHandler.handleInput('e7 e5');  

game.currentPlayer = 'black';
console.log("Testing valid moves after turn switch:");
inputHandler.handleInput('e7 e5');  

console.log("Testing capture move logic:");
inputHandler.handleInput('e5 e4');  
