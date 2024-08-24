/* constants for the DOM */

const buttons = document.getElementsByClassName("btn-choice")
const puterChoiceDisplay = document.getElementById('puter-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const choices = ["rock", "paper", "scissors"];


/*  play game function records data choice value of selected button
prints array value to user choice*/


for (let button of buttons) {
  button.addEventListener("click", function () {
    let playerChoice = this.getAttribute("data-choice");
    userChoiceDisplay.innerHTML = `${choices[playerChoice]}`;
    playGame(playerChoice);
   
  });
}



/*computer randomly selects a value between 0 and 3
and selects a corresponding data choice based on array value, prints to computer choice*/


function playGame(playerChoice) {

  let puterChoice = Math.floor(Math.random() * 3);

  puterChoiceDisplay.innerHTML = `${choices[puterChoice]}`;

  /*compares the data choices and declares a winner */

  let result = document.getElementById("result-display");

  if (puterChoice == playerChoice) {
    result.innerText = "Draw!";

  } else if (puterChoice == "0") {
    if (playerChoice == "2") {
      result.innerText = "Oops you lose!";
    } else {
      result.innerText = "Yay you win!";
    }
  }  else if (puterChoice == "1") {
    if (playerChoice == "0") {
      result.innerText = "Agh, you lose!";
    } else {
      result.innerText = "You win!";
    }
  }  else if (puterChoice == "2") {
    if (playerChoice == "0") {
      result.innerText = "You win!"
    } else {
      result.innerText = "You lose!"
    }
  }


  
}





