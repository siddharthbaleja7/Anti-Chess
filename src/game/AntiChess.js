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

        if (!piece) {
            console.log("No piece at the source.");
            return false;
        }

        if (piece.color !== this.currentPlayer) {
            console.log(`It's ${this.currentPlayer}'s turn, not ${piece.color}'s turn.`);
            return false;
        }

        const isMoveValid = Math.abs(fromRow - toRow) === 2 || Math.abs(fromRow - toRow) === 1;

        if (destinationPiece && destinationPiece.color !== this.currentPlayer) {
            console.log(`${this.currentPlayer} captures ${destinationPiece.color}!`);
            this.board.setPiece(toRow, toCol, piece); // Move piece to the destination
            this.board.removePiece(fromRow, fromCol); // Remove from original position
            return true;
        }

        if (isMoveValid && !destinationPiece) {
            this.board.setPiece(toRow, toCol, piece); // Move piece
            this.board.removePiece(fromRow, fromCol); // Clear original spot
            return true;
        }

        console.log("Invalid move.");
        return false;
    }
}

const board = new Board();


board.setPiece(6, 4, new Piece('white')); 
board.setPiece(1, 4, new Piece('black')); 


const game = new AntiChess(board, 'white');


const inputHandler = new InputHandler(game);


console.log("Testing valid moves:");
inputHandler.handleInput('e2 e4'); 
inputHandler.handleInput('e7 e5'); 


game.switchTurn();
console.log("Testing valid moves after turn switch:");
inputHandler.handleInput('e7 e5'); 

console.log("Testing capture move logic:");
inputHandler.handleInput('e5 e4'); 

module.exports = AntiChess;
