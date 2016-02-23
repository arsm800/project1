//Create variables.

//var player1 = prompt("Welcome to concentration.  Enter your name, player 1.");
//var player2 = prompt("Welcome to concentration.  Enter your name, player 2.");
var boardRandom = [];
var selectButton;


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
    boardRandom = boardDefault;
  }
  return boardRandom;
};
                                      //This only scrambles the order of arrays, not indexes in each array.

//Apply game board values to css elements on web page.



//Get players.

var getPlayers = function() {
  player1();
  player2();
};


//Add div elements to HTML webpage based on indexes in boardRandom array
var newTile = function() {
  for (var i = 0; i < boardRandom.length; i++) {
    for (var j = 0; j < boardRandom[i].length; j++) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("class", "square");
      document.body.appendChild(newDiv);
    }
  }
};
//I can see the divs in the element window, but the borders (from css) do not appear.
var divSquare = document.querySelectorAll(".square");
//Reveal text when tile is clicked
var setText = function() {
    var changeTileText = function() {
    this.textContent = boardRandom;
  };
  divSquare.addEventListener("click", changeTileText);
};



//Receive player input.

     //When a button is clicked, the letter will appear.  Clicking on another button will make the other letter appear.  If they match, the buttons disappear.  If they do not match, letters remain (hidden) and player 2 begins turn.


//Conditionals

    //keep score - 1 pt for each correct match

    //some sort of color change to indicate the player turn

    //When all tiles are removed, indicate a winner

    //Create some sort of option to start the game again


setBoard(boardDefault);
console.log(boardRandom);
newTile();
