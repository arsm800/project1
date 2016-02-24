//Create variables.

//var player1 = prompt("Welcome to concentration.  Enter your name, player 1.");
//var player2 = prompt("Welcome to concentration.  Enter your name, player 2.");
var boardRandom = [];
var selectButton;
var player1Score = 0;
var player2Score = 0;




//Populate board.

    //Create array of pairs of letters a-z. There should be 26 letters total in a 8x8 grid plus the remaining 6 characters.  Everything is double.  Note: it will probably be easier to start with just several different letters first.  Originally I started with an array of array, but I think it will be easier to use a single, long array.

var boardDefault = ["a", "a", "b", "b", "c", "c", "d", "d", "e", "e", "f", "f", "g", "g", "h", "h", "i", "i", "j", "j", "k", "k", "l", "l", "m", "m", "n", "n", "o", "o", "p", "p", "q", "q", "r", "r", "s", "s", "t", "t", "u", "u", "v", "v", "w", "w", "x", "x", "y", "y", "z", "z", "aa", "aa", "bb", "bb", "cc", "cc", "dd", "dd", "ee", "ee", "ff", "ff"];

//Shuffle board values.

    //There are several methods listed on stackOverflow as well as the way Robin shuffled the deck in our "high card" homework.

    //Given this is an 8x8 array, we want this function to randomly select the coordinates of the outer array, then the inner array, then push that value to a new array of the same dimensions.  Fisher-Yates randomization function.

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
setBoard(boardDefault);
console.log(boardRandom);

//Apply game board values to css elements on web page.



//Get players.
var getPlayers = function() {
  player1();
  player2();
};


//Add div elements to HTML webpage based on indexes in boardRandom array

var newTile = function() {
  for (var i = 0; i < boardRandom.length; i++) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("class", "square");
      document.body.appendChild(newDiv);
      newDiv.innerHTML = boardRandom[i];  //Just like setting the attributes, you are assigning an index from boardRandom to its innerHTML.
  }
};
newTile();

var divSquares = document.querySelectorAll(".square");
  //$("#cool").text("one").css("color , black");

var revealText = function(e) {
  this.style.color = "green";
  
  }
  //document.body.style.backgroundColor = "red";
  //for (var i = 0; i < divSquares.length; i++) {
  //document.getElementsByClassName(".square").style.color = "red";
};


for (var i = 0; i < divSquares.length; i++) {
divSquares[i].addEventListener("click", revealText);
  //$("square").css("color" , "blue");
}

//Receive player input.  Create classes for specifc events.

//Player 1 clicks one tile
var clickTile = function() {
  //Tile turns red
  div.square.setAttribute("class", "click");
//Player 1 clicks second tile
  //Tile turns red

//If tile 1 text = tile 2 text
  if (div.innerHTML === div.innerHTML) {
  //tiles change to player 1 color
    div.square.setAttribute("class", "player");
  //tiles cannot be clicked again
    //remove click event listener for player class
  //add 1 to player 1 score
    player1Score ++;
  //do not switch to player 2 turn (player one goes again)
//Else (tile 1 text and tile 2 text do not match)
  } else {
  //tile 1 and tile 2 color returns to original color
    div.square.setAttribute("class", "square");
  // add 0 to player 1 score
  // switch to player 2 turn
  }
};



//How would you separate turns?//





     //When a button is clicked, the letter will appear.  Clicking on another button will make the other letter appear.  If they match, the buttons disappear.  If they do not match, letters remain (hidden) and player 2 begins turn.


//Conditionals

    //keep score - 1 pt for each correct match

    //some sort of color change to indicate the player turn

    //When all tiles are removed, indicate a winner

    //Create some sort of option to start the game again
