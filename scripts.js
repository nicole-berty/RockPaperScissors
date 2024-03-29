let playerScore = 0, computerScore = 0;
                let playerSelection, computerSelection;

                const results = document.querySelector('#result');
                const content = document.createElement('p');
                const score = document.createElement('p');
                results.appendChild(content);
                results.appendChild(score);
    
                function computerPlay() {
                    let random = Math.floor(Math.random() * 3 + 1)
                    if (random == 1) {
                        return "rock";
                    } else if (random == 2) {
                        return "paper";
                    } else {
                        return "scissors";
                    }
                }
    
                function playRound(playerSelection) {
                    computerSelection = computerPlay();
                    if (playerSelection === null) {
                        alert("Game over!");
                        return;
                    } else if (playerSelection === "rock" && computerSelection === "scissors" || 
                        playerSelection === "paper" && computerSelection === "rock" ||
                        playerSelection === "scissors" && computerSelection === "paper") {
                        content.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                        playerScore++;
                    } else if (playerSelection === computerSelection) {
                        content.textContent = `${playerSelection} is ${computerSelection}. It's a tie!`;
                    } else {
                        content.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`; 
                        computerScore++;
                    }
                    score.textContent = `Your score: ${playerScore} | Computer score: ${computerScore}`;
                    checkScores();
                }           
                
                function checkScores() {
                    if(playerScore === 5 || computerScore === 5) {
                        if (playerScore > computerScore) {
                            content.textContent = 'You won by reaching 5 points first!';
                        } else if (playerScore === computerScore) {
                            content.textContent = 'It\'s a draw!';
                        } else {
                            content.textContent = 'You Lost! The computer reached 5 points first!';
                        } 
                        playerScore = 0, computerScore = 0;
                    }
                }