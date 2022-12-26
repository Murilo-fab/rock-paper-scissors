function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)]
}

function playRound (playerSelection, computerChoice) {
    playerSelection = playerSelection.toLowerCase();

    if ( (playerSelection == 'rock' && computerChoice == 'scissors') || (playerSelection == 'scissors' && computerChoice == 'paper') || (playerSelection == 'paper' && computerChoice == 'rock')) {
        return "You Win!!!"
    } else if ( playerSelection == computerChoice) {
        return "Tie!!!"
    } else {
        return "You Lose!!!"
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors? ")
        computerChoice = getComputerChoice()

        console.log(playRound(playerSelection, computerChoice))
    }
}

game()