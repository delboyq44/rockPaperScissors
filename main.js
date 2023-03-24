        const rockButton = document.querySelector('.rock');
        const paperButton = document.querySelector('.paper');
        const scissorsButton = document.querySelector('.scissors');
        const outcome = document.querySelector('.result');


        const checkForWinner  = (playerScore, computerScore) => {
            if (playerScore === 5) {
                const youWon = document.createElement('h2');
                const youWonNode = document.createTextNode("You Beat the computer! Congratulations!");
                youWon.appendChild(youWonNode);
                outcome.appendChild(youWon);
            } else if (computerScore === 5) {
                const youLost = document.createElement('h2');
                const youLostNode = document.createTextNode("You Lost to the computer! better luck next time!");
                youLost.appendChild(youLostNode);
                outcome.appendChild(youLost);
            }
        }
        rockButton.addEventListener('click', () => {
            computerSelection = getComputerChoice();
            playerSelection = 'rock';
            playRound(playerSelection, computerSelection);
            checkForWinner(playerScore, computerScore);
        })

        paperButton.addEventListener('click', () => {
            computerSelection = getComputerChoice();
            playerSelection = 'paper';
            playRound(playerSelection, computerSelection);
            checkForWinner(playerScore, computerScore);
        })

        scissorsButton.addEventListener('click', () => {
            computerSelection = getComputerChoice();
            playerSelection = 'scissors';
            playRound(playerSelection, computerSelection);
            checkForWinner(playerScore, computerScore);
        })
  
        let computerScore = 0;
        let playerScore = 0;
        
        function getComputerChoice() {
            let rps = ["rock", "paper", "scissors"];
            let choice = rps[Math.floor(Math.random() * rps.length)];
            return choice;
        }
        
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                playerScore++;
                computerScore++;
                const para = document.createElement('p');
                const node = document.createTextNode(`It's a draw! player score: ${playerScore} computer score: ${computerScore}`);
                para.appendChild(node);
                outcome.appendChild(para);
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore++;
                const para = document.createElement('p');
                const node = document.createTextNode(`You Win! Rock beats Scissors! player score: ${playerScore} computer score: ${computerScore}`);
                para.appendChild(node);
                outcome.appendChild(para);
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore++;
                const para = document.createElement('p');
                const node = document.createTextNode(`You Win! Scissors beats Paper! player score: ${playerScore} computer score: ${computerScore}`);
                para.appendChild(node)
                outcome.appendChild(para);
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore++;
                const para = document.createElement('p');
                const node = document.createTextNode(`You Win! Paper beats Rock! player score: ${playerScore} computer score: ${computerScore}`);
                para.appendChild(node)
                outcome.appendChild(para);
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                computerScore++;
                const para = document.createElement('p');
                const node = document.createTextNode(`You Loose! Paper beats Rock! player score: ${playerScore} computer score: ${computerScore}`);
                para.appendChild(node)
                outcome.appendChild(para);
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                computerScore++;
                const para = document.createElement('p');
                const node = document.createTextNode(`You Loose! Scissors beats Paper! player score: ${playerScore} computer score: ${computerScore}`);
                para.appendChild(node)
                outcome.appendChild(para);
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                computerScore++;
                const para = document.createElement('p');
                const node = document.createTextNode(`You Loose! Rock beats Scissors! player score: ${playerScore} computer score: ${computerScore}`);
                para.appendChild(node)
                outcome.appendChild(para);
            }
        }