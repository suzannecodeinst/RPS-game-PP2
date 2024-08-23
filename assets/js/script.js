// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "reset-game") {
                alert("You clicked Reset!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }       
        })
    }
})


const buttons = document.getElementsByClassName("btn-choice");
const userScore = document.getElementById("user-score");
const puterScore = document.getElementById("puter-score");
const choices = ["rock", "paper", "scissors"];

// Add initial functions - reference Love Maths video- first setup of js

function runGame() {

}

function checkAnswer() {

}

function incrementScore() {

}