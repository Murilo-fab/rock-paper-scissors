/* Variables */
let options = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;

/* Nodes */
let buttons = document.querySelectorAll("button");
let round = document.querySelector(".round");
let score = document.querySelector(".score")
let result = document.querySelector(".result")

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)]
}

function playRound (playerSelection, computerChoice) {

    if ( (playerSelection == 'rock' && computerChoice == 'scissors') || 
        (playerSelection == 'scissors' && computerChoice == 'paper') || 
        (playerSelection == 'paper' && computerChoice == 'rock')){
        return "player"
    } else if ( playerSelection == computerChoice) return "Tie!!!";
    else return "computer";
}

function main () {    
        
    buttons.forEach((button) => {

        function play () {

            if (playerScore < 5 && computerScore < 5) {

                playerSelection = button.id;
                computerChoice = getComputerChoice();

                round.textContent = "The computer chose " + computerChoice;
            
                match = playRound(playerSelection, computerChoice)
                    
                if (match == "player")
                    playerScore++;
                else if (match == "computer")
                    computerScore++;
                    
                score.textContent = "Player " + playerScore + " X " + computerScore + " Computer ";
        
                if (playerScore == 5) 
                    result.textContent = "Player won!!!";
                else if (computerScore == 5)
                    result.textContent = "Computer won!!!";
                
            } else {
                button.removeEventListener("click", play);
            }
        }
    
        button.addEventListener('click', play)
    })

}

main()