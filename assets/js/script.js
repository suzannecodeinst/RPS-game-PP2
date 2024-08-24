/* constants for the DOM */

const buttons = document.getElementsByClassName("btn-choice")
const puterChoiceDisplay = document.getElementById('puter-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const choices = ["rock", "paper", "scissors"];
let playerChoice;


for (let button of buttons) {
    button.addEventListener("click", function () {
    let playerChoice = this.getAttribute("data-choice");
    userChoiceDisplay.innerHTML = `${choices[playerChoice]}`;
    playGame(playerChoice);
  });
}

/* function records data choice value of selected button
prints array value to user choice

computer randomly selects a value between 0 and 3
and selects a corresponding data choice based on array value, prints to computer choice

compares the data choices and declares a winner


 /* function playGame(playerChoice) {

   
    
    let puterChoice = Math.floor(Math.random() * 3);

    puterChoiceDisplay.innerHTML = `${choices[puterChoice]}`;

    let resultDisplay = checkWinner(choices[puterChoice], choices[playerChoice]);

  
  }

 