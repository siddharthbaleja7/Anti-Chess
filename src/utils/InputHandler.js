class InputHandler {
  constructor(game) {
      this.game = game;
  }

  parseInput(input) {
      const parts = input.split(' ');
      const from = parts[0];
      const to = parts[1];

      // Example: "e2 e4" -> from: 'e2', to: 'e4'
      const fromCoords = this.algebraicToIndices(from);
      const toCoords = this.algebraicToIndices(to);

      console.log(`Parsed input from ${from} to ${to}:`, fromCoords, toCoords);
      return { fromCoords, toCoords };
  }

  algebraicToIndices(position) {
      // Convert from algebraic notation (e.g., "e2") to row/col indices
      const file = position[0].toLowerCase(); // e.g., 'e'
      const rank = parseInt(position[1], 10); // e.g., 2

      const col = file.charCodeAt(0) - 'a'.charCodeAt(0); // 'a' -> 0, 'b' -> 1, etc.
      const row = 8 - rank; // Rank 8 is row 0, rank 1 is row 7, etc.

      return [row, col];
  }

  handleInput(input) {
      const { fromCoords, toCoords } = this.parseInput(input);

      // Check move validity using `isValidMove` (fixed method name)
      const isValid = this.game.isValidMove(fromCoords[0], fromCoords[1], toCoords[0], toCoords[1]);
      if (isValid) {
          console.log(`Move from ${input.split(' ')[0]} to ${input.split(' ')[1]} is valid.`);
          this.game.switchTurn(); // Switch turns after a valid move
      } else {
          console.log(`Move from ${input.split(' ')[0]} to ${input.split(' ')[1]} is invalid.`);
      }
  }
}

module.exports = InputHandler;
