

const choices = ["rock", "paper", "scissors"];
const userChoiceDisplay = document.getElementById("user-choice");
const puterChoiceDisplay = document.getElementById("puter-choice");
const resultDisplay = document.getElementById("result");


function playGame(playerChoice){
    const puterChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === puterChoice){
        result = "Great minds think alike!";
    } else if (puterChoice === 'rock' && playerChoice === "paper") {
      result = 'Yay you win!';
    } else if (puterChoice === 'rock' && playerChoice === "scissors") {
      result = 'Oops you lose!';
    } else if (puterChoice === 'paper' && playerChoice === "scissors") {
      result = "You're a winner!";
    } else if (puterChoice === 'paper' && playerChoice === "rock") {
      result = 'Bad luck, you lose!';
    } else if (puterChoice === 'scissors' && playerChoice === "rock") {
      result = 'Great win!';
    } else (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'Noooo, you lose!';
    }
  }

  userChoiceDisplay.textContent = `Your Choice: ${playerChoice}`;
  puterChoiceDisplay.textContent = `Cpu Choice: ${puterChoice}`;
  resultDisplay.textContent = result;



/*document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName("btn-user");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let userChoices = this.getAttribute("data-choice");
            playGame(userChoice);
            alert("user clicked")


        });
    }
}) */






// Add initial functions - reference Love Maths video- first setup of js

function playGame(userChoice) {
     let puterChoice = Math.floor(Math.random() * 3);

}

function checkAnswer() {

}

function incrementScore() {

}