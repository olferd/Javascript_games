const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)

    switch(randomNumber) {
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'scissors'
            break;
        case 3:
            computerChoice = 'paper'
            break;        
    }   

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw'
    } 

    if( userChoice === 'rock') {
        switch(computerChoice){
            case 'paper':
                result = 'You lost !'
                break;
            case 'scissors':
                result = 'You win !'
        }
    } 
    if( userChoice === 'paper') {
        switch(computerChoice){
            case 'rock':
                result = 'You win !'
                break;
            case 'scissors':
                result = 'You lost !'
        }
    } 
    if( userChoice === 'scissors') {
        switch(computerChoice){
            case 'paper':
                result = 'You win !'
                break;
            case 'rock':
                result = 'You lost !'
        }
    }
    resultDisplay.innerHTML = result 
}
