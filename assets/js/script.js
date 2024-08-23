// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them


const userScore = document.getElementById("user-score");
const puterScore = document.getElementById("puter-score");
const choices = ["rock", "paper", "scissors"];



document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName("btn-user");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let userChoices = this.getAttribute("data-choice");
            playGame(userChoice);
            alert("user clicked")

            


        });
    }
})




// Add initial functions - reference Love Maths video- first setup of js

function playGame(userChoice) {
     let puterChoice = Math.floor(Math.random() * 3);

}

function checkAnswer() {

}

function incrementScore() {

}