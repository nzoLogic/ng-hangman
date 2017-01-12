console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp", [])
  .controller('hangmanController', hangmanController);

function hangmanController(){
  var game = new HangmanGame('elephant');
  var vm = this;
  console.log(game)
  vm.game = game;

  vm.guessLetter = function(letter){
    vm.game.input = '';
    vm.game.guess(letter);
    vm.game.isWinner
  }
}
