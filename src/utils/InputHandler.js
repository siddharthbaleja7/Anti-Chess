class InputHandler {
  constructor(game) {
      this.game = game;
  }

  parseInput(input) {
      const parts = input.split(' ');
      const from = parts[0];
      const to = parts[1];


      const fromCoords = this.algebraicToIndices(from);
      const toCoords = this.algebraicToIndices(to);

      console.log(`Parsed input from ${from} to ${to}:`, fromCoords, toCoords);
      return { fromCoords, toCoords };
  }

  algebraicToIndices(position) {

      const file = position[0].toLowerCase(); 
      const rank = parseInt(position[1], 10); 

      const col = file.charCodeAt(0) - 'a'.charCodeAt(0); 
      const row = 8 - rank; 
      return [row, col];
  }

  handleInput(input) {
      const { fromCoords, toCoords } = this.parseInput(input);


      const isValid = this.game.isValidMove(fromCoords[0], fromCoords[1], toCoords[0], toCoords[1]);
      if (isValid) {
          console.log(`Move from ${input.split(' ')[0]} to ${input.split(' ')[1]} is valid.`);
          this.game.switchTurn(); 
      } else {
          console.log(`Move from ${input.split(' ')[0]} to ${input.split(' ')[1]} is invalid.`);
      }
  }
}

module.exports = InputHandler;
