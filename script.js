//Create variables.

//var player1 = prompt("Welcome to concentration.  Enter your name, player 1.");
//var player2 = prompt("Welcome to concentration.  Enter your name, player 2.");
var boardRandom = [];

//Populate board.

    //Create array of pairs of letters a-z. There should be 26 letters total in a 8x8 grid plus the remaining 6 characters.  Everything is double.  Note: it will probably be easier to start with just several different letters first.

var boardDefault = [["a", "a", "b", "b", "c", "c", "d", "d"], ["e", "e", "f", "f", "g", "g", "h", "h"], ["i", "i", "j", "j", "k", "k", "l", "l"], ["m", "m", "n", "n", "o", "o", "p", "p"], ["q", "q", "r", "r", "s", "s", "t", "t"], ["u", "u", "v", "v", "w", "w", "x", "x"], ["y", "y", "z", "z", "aa", "aa", "bb", "bb"], ["cc", "cc", "dd", "dd", "ee", "ee", "ff", "ff"]];

//Shuffle board values.

    //There are several methods listed on stackOverflow as well as the way Robin shuffled the deck in our "high card" homework.

    //Given this is an 8x8 array, we want this function to randomly select the coordinates of the outer array, then the inner array, then push that value to a new array of the same dimensions.

var setBoard = function() {
  var currentIndex = boardDefault.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor((Math.random() * currentIndex));
    currentIndex -= 1;
    temporaryValue = boardDefault[currentIndex];
    boardDefault[currentIndex] = boardDefault[randomIndex];
    boardDefault[randomIndex] = temporaryValue;
  }
  return boardDefault;
};

//Set up tile/button game board.

//Get players.

var getPlayers = function() {
  player1();
  player2();
};

//Receive player input.

    //Set query selectors to match clicking with buttons.  When a button is clicked, the letter will appear.  Clicking on another button will make the other letter appear.  If they match, the buttons disappear.  If they do not match, letters remain (hidden) and player 2 begins turn.

    //Note: I am still undecided on buttons or colored tiles to indicate letter items.

//Conditionals

    //keep score - 1 pt for each correct match

    //some sort of color change to indicate the player turn

    //When all tiles are removed, indicate a winner

    //Create some sort of option to start the game again


setBoard(boardDefault);
console.log(boardDefault);
