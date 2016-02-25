User Stories:

  -When the game begins, I should be able to see the size of the board and each individual element that hides a letter.
  -My name should highlight a certain color to indicate whether or not it is my turn.
  -When I select a tile, it should indicate what item is underneath.
  -If I select 2 tiles that match, they should disappear, my score should go up by one, and my turn should continue.
  -If I select 2 tiles that do not match, the letters should hide again and my turn should end.
  -When all the tiles are matched, the player with the highest score should be declared the winner.

Technologies Used: HTML, CSS, Javascript

  Creating a memory game incorporated many of the concepts taught to us in our HTML, CSS, and Javascript courses.  Therefore, HTML provided the framework and content for the game, CSS provided the styling, and Javascript provided the behavior and allowed the game to be interactive.

Approach Taken:

  Pseudocode - At the beginning, I attempted to pseudocode my entire project into the script.js file.  I wrote the javascript around the pseudocode "outline".  While I followed this notation at first, its effectiveness dwindled as I got deeper into coding my program. Later on, it became mildly confusing because I would multiple iterations of pseudocode interspersed with bits of code that I did not plan to use.  

  Code structures - This program required conditional statements, event listeners, HTML element selectors and appending methods, as well as arrays.  This program could have also been coded as an object, but I have not yet reached to skill level to do so.

  Trial and Error - Like much of coding, experimentation is key.  I constantly tested, parts of code in simpler contexts to verify the integrity of its structure.  For example, I first aimed to attach an event listener to a single element before I tried to get it synced up to an entire array of elements with the same class ID.

Installation Instructions:

I'm not sure what this entails.  However, this game runs in a Chrome web browser.

Unsolved Problems:

  Scoreboard - I aimed to incorporate a feature where each time a match is made, the "pieces" vanish and the corresponding player's score is increased by one.  However, this is contingent on keeping track of a player's turn.  

  Game Size Flexibility - It would have been nice to have the game customizable in a way that the players could decide how many matches are required to win and the elements that are being matched (ie. words, photos, etc.).  In order for this to happen, I would have had to code a process where the user is prompted to manually fill the array that holds all the elements to be matched.

  Standardize tile grid shape - I think flexbox could probably solve this issue.  As it stands, when I increase or decrease the size of the page, the tile grade changes shape.

Other Items of Note:

  Let data drive your site structure, not the other way around - I had originally decided on an 8x8 board so my first effort was to create 64 div elements in my HTML.  During a genius bar session, Jesse pointed out a better way to organize my program flow would be to let the data/inputs dictate what the page elements would be.  Instead of hard-coding div elements, we worked on a process to store matching data in an array and then created a function to append div elements based on the number of indexes in the array.  
