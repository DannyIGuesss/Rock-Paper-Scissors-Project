function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock') {
        return userInput;
    } else if(userInput === 'paper') {
        return userInput;
    } else if(userInput === 'scissors') {
        return userInput;
    }else {
        console.log('You did not enter a correct choice')
    }
} 

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if(choice === 0) {
        return 'rock'
    }else if(choice === 1) {
        return 'paper'
    }else if (choice === 2) {
        return 'scissors'
    }
}

function determineWinner(getUserChoice, getComputerChoice) {
    if(getUserChoice === getComputerChoice) {
        return 'Game ends in tie'
    }

    if(getUserChoice === 'rock') {
        if(getComputerChoice === 'paper') {
            return 'Computer Wins!'
        }else {
            return 'User Wins!'
        }
    }

    if(getUserChoice === 'paper') {
        if(getComputerChoice === 'scissors') {
            return 'Computer Wins!'
        } else {
            return 'User Wins!'
        }
    }

    if(getUserChoice === 'rock') {
        if(getComputerChoice === 'paper') {
            return 'Computer Wins!';
        }else {
            return 'User Wins!';
        }
    }
}

function playGame() {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(`User picked ${userChoice}`);
    console.log(`Computer picked ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice))
}

playGame()
